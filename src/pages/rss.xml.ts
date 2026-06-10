import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../lib/utils';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blogs = await getCollection('blogs', ({ data }) => !data.draft);
  const sorted = blogs.sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );

  return rss({
    title: `${SITE_CONFIG.name} Blog`,
    description: SITE_CONFIG.description,
    site: context.site!.toString(),
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishDate),
      description: post.data.description,
      link: `/blogs/${post.id}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>en-in</language>`,
  });
}
