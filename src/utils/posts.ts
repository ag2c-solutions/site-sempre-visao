import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const allPosts = await getCollection('blog');
  const now = new Date();
  
  const published = allPosts.filter(post => {
    if (!post.data.date) return true;
    return new Date(post.data.date) <= now;
  });

  return published.sort((a, b) => {
    return (b.data.date || '').localeCompare(a.data.date || '');
  });
}
