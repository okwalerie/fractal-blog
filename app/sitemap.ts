import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://valeriekim.ca'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['/', '/blog/', '/portfolio/'].map((route) => ({
    url: `${baseUrl}${route}`,
  }))

  return [...routes, ...blogs]
}
