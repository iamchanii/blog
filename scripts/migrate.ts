import * as fs from 'https://deno.land/std@0.144.0/fs/mod.ts';
import * as path from 'https://deno.land/std@0.144.0/path/mod.ts';
import * as conversion from 'https://deno.land/std@0.144.0/streams/conversion.ts';
import { slug } from 'https://deno.land/x/slug@v0.1.1/mod.ts';
import { NodeHtmlMarkdown } from 'https://esm.sh/node-html-markdown@1.2.0';

type PrismicPostBlock =
  | { type: 'hr' }
  | { type: 'image'; url: string }
  | { type: 'markdown' }
  | { type: 'blockquote'; text: string }
  | { type: 'text'; html: string };

interface PrismicPost {
  slug: string;
  date: string;
  title: string;
  blocks: PrismicPostBlock[];
}

const queryAllPrismicPosts = async (): Promise<any[]> => {
  const endpoint = 'http://localhost:8000/___graphql';
  const query = `
  {
    allPrismicPost(
      sort: {fields: [first_publication_date, data___migrated_date], order: DESC}
      ) {
        nodes {
          uid
          first_publication_date
          data {
            title {
              text
            }
            migrated_date
            body {
              __typename
              ... on PrismicPostDataBodyHr {
                id
              }
              ... on PrismicPostDataBodyImage {
                primary {
                  image {
                    url
                  }
                }
              }
              ... on PrismicPostDataBodyMarkdown {
                primary {
                  markdown {
                    text
                  }
                }
              }
              ... on PrismicPostDataBodyQuote {
                primary {
                  quote {
                    text
                  }
                }
              }
              ... on PrismicPostDataBodyText {
                primary {
                  content {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const resp = await fetch(endpoint, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables: null }),
  });

  const json = await resp.json();

  return json.data.allPrismicPost.nodes;
};

const parsePrismicPost = (data: any): PrismicPost => ({
  slug: slug(data.uid, {
    replacement: '-', // replace spaces with replacement character (defaults to `-`)
    remove: undefined, // remove characters that match regex (defaults to `undefined`)
    lower: false, // convert to lower case (defaults to `false`)
    strict: false, // strip special characters except replacement (defaults to `false`)
    locale: 'vi', // language code of the locale to use (defaults to `vi`)
    trim: true,
    extends: { '.': '-' },
  }),
  date: data.data.migrated_date
    ? (() => {
      const firstPublicationDate = new Date(data.first_publication_date);
      const migratedDate = new Date(data.data.migrated_date);
      migratedDate.setHours(
        firstPublicationDate.getHours(),
        firstPublicationDate.getMinutes(),
        firstPublicationDate.getSeconds(),
        firstPublicationDate.getMilliseconds(),
      );

      return migratedDate.toISOString();
    })()
    : data.first_publication_date,
  title: data.data.title.text,
  blocks: data.data.body.map((x: any) => {
    switch (x.__typename) {
      case 'PrismicPostDataBodyHr':
        return { type: 'hr' };
      case 'PrismicPostDataBodyImage':
        return { type: 'image', url: x.primary.image.url };
      case 'PrismicPostDataBodyMarkdown':
        throw new Error('markdown is not implemented.');
      case 'PrismicPostDataBodyQuote':
        return { type: 'blockquote', text: x.primary.quote.text };
      case 'PrismicPostDataBodyText':
        return { type: 'text', html: x.primary.content.html };
    }
  }),
});

const __dirname = new URL('.', import.meta.url).pathname;
const contentsPath = path.resolve(__dirname, '..', 'contents', 'posts');

const ensurePostDir = async (post: PrismicPost) => {
  const postDir = path.join(contentsPath, post.slug);
  await fs.ensureDir(postDir);

  return postDir;
};

const nhm = new NodeHtmlMarkdown(undefined, {
  pre: ({ options: { codeFence }, visitor }) => {
    return {
      noEscape: true,
      prefix: codeFence + '\n',
      postfix: '\n' + codeFence,
      childTranslators: visitor.instance.codeBlockTranslators,
    };
  },
});

const getData = (post: PrismicPost) => {
  const buffer: string[] = [`---\ntitle: "${post.title}"\n---`];
  const imagesToDownload: string[] = [];

  post.blocks.forEach((block) => {
    switch (block.type) {
      case 'blockquote':
        buffer.push(`> ${block.text}`);
        break;
      case 'hr':
        buffer.push(`---`);
        break;
      case 'image': {
        imagesToDownload.push(block.url);
        buffer.push(`![](${path.basename(block.url.split('?')[0]).replace(/([\(\)])/g, '_')})`);
        break;
      }
      case 'text':
        buffer.push(nhm.translate(block.html));
        break;
      case 'markdown':
        throw new Error('markdown is not implemented.');
    }
  });

  return { markdown: buffer.join('\n\n'), imagesToDownload };
};

const writeMarkdown = async (postDir: string, markdown: string, utime: Date) => {
  const indexDir = path.join(postDir, 'index.md');
  await Deno.writeTextFile(indexDir, markdown);
  await Deno.utime(indexDir, utime, utime);
};

const downloadImage = async (postDir: string, imageUrl: string) => {
  const res = await fetch(imageUrl);
  const target = path.join(postDir, path.basename(imageUrl.split('?')[0]).replace(/([\(\)])/g, '_'));
  const file = await Deno.open(target, { create: true, write: true });

  for await (const chunk of res.body!) {
    await conversion.writeAll(file, chunk);
  }
  file.close();
};

const rawPosts = await queryAllPrismicPosts();
const posts = rawPosts.map(parsePrismicPost);
posts.forEach(async (post) => {
  const postDir = await ensurePostDir(post);
  const { markdown, imagesToDownload } = getData(post);
  await writeMarkdown(postDir, markdown, new Date(post.date));

  if (imagesToDownload.length > 0) {
    for await (const imageUrl of imagesToDownload) {
      await downloadImage(postDir, imageUrl);
    }
  }
});
