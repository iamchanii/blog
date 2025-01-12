import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
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

  const svg = await satori(
    {
      type: 'div',
      props: {
        children: [
          {
            type: 'p',
            props: {
              children: post.data.title,
              style: {
                fontWeight: 'bold',
                fontSize: 36,
                margin: 0,
              },
            },
          },
          post.data.description && {
            type: 'p',
            props: {
              children: post.data.description,
              style: {
                fontSize: 36,
                margin: 0,
              },
            },
          },
        ],
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 24,
          padding: 160,
          background: '#1C1B1A',
          color: '#DAD8CE',
          width: '100%',
          height: '100%',
          fontFamily: 'Galmuri',
        },
      },
    },
    satoriOptions,
  );

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
