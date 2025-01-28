import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { indexBy } from 'remeda';
import satori, { type SatoriOptions } from 'satori';
import sharp from 'sharp';
import { OgImage } from '../../../components/OgImage';

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

  const node = OgImage({
    title: post.data.title.replace(/ /g, '  '),
    formattedDate: new Intl.DateTimeFormat('ko').format(post.data.date),
  });

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
  const regularFontUrl =
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff';
  const boldFontUrl =
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff';

  const regularFont = await fetchFont(regularFontUrl);
  const boldFont = await fetchFont(boldFontUrl);

  return {
    width: ogImageWidth,
    height: ogImageHeight,
    embedFont: false,
    fonts: [
      { name: 'Pretendard', data: regularFont, weight: 400, lang: 'ko-KR' },
      { name: 'Pretendard', data: boldFont, weight: 700, lang: 'ko-KR' },
    ],
  };

  function fetchFont(url: string) {
    return fetch(url).then((response) => response.arrayBuffer());
  }
}
