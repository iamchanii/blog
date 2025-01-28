import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { indexBy } from 'remeda';
import satori, { type SatoriOptions } from 'satori';
import sharp from 'sharp';

const allPosts = await getCollection('posts');
const postsById = indexBy(allPosts, (post) => post.id);

export function getStaticPaths() {
  return allPosts.map((post) => {
    return {
      params: { slug: post.id },
    };
  });
}

const satoriOptions = await getSatoriOptions();

export const GET: APIRoute = async ({ params }) => {
  const post = postsById[params.slug!];

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 24,
    padding: 120,
    paddingBottom: 360,
    background: '#1C1B1A',
    color: '#DAD8CE',
    width: '100%',
    height: '100%',
    fontFamily: 'Galmuri',
    position: 'relative',
  };

  const node = {
    type: 'div',
    props: {
      children: [
        {
          type: 'p',
          props: {
            children: post.data.title,
            style: {
              fontWeight: 'bold',
              fontSize: 60,
              margin: 0,
            },
          },
        },
        {
          type: 'p',
          props: {
            children: new Intl.DateTimeFormat('ko').format(post.data.date),
            style: {
              fontSize: 24,
              margin: 0,
            },
          },
        },
        {
          type: 'p',
          props: {
            children: post.body?.replace(/\n/g, ' ').split('#').at(0)?.trim(),
            style: {
              fontSize: 36,
              display: 'block',
              margin: 0,
              whiteSpace: 'pre-line',
              lineClamp: 5,
              lineHeight: 1.4,
              backgroundImage: 'linear-gradient(180deg, #DAD8CE, #1C1B1A 75%)',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
              position: 'absolute',
              left: 120,
              right: 120,
              height: 315,
            },
          },
        },
      ],
      style: wrapperStyle,
    },
  };

  const svg = await satori(node, satoriOptions);

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
    },
  });
};

async function getSatoriOptions(): Promise<SatoriOptions> {
  const ogImageWidth = 1200;
  const ogImageHeight = 630;

  const regularFont = await fetch(
    'https://fastly.jsdelivr.net/npm/galmuri@latest/dist/Galmuri11.ttf',
  ).then((x) => x.arrayBuffer());
  const boldFont = await fetch(
    'https://fastly.jsdelivr.net/npm/galmuri@latest/dist/Galmuri11-Bold.ttf',
  ).then((x) => x.arrayBuffer());

  return {
    width: ogImageWidth,
    height: ogImageHeight,
    fonts: [
      {
        name: 'Galmuri',
        data: regularFont,
        weight: 400,
      },
      {
        name: 'Galmuri',
        data: boldFont,
        weight: 700,
      },
    ],
  };
}
