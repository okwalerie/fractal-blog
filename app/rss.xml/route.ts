import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'
import { compileMDX } from 'next-mdx-remote/rsc'

// Rendered once at build time for static export.
export const dynamic = 'force-static'

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (char) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
  }[char]!))
}

export async function GET() {
  let allBlogs = getBlogPosts()
  const { renderToStaticMarkup } = await import('react-dom/server')

  const itemsXml = (await Promise.all(allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(async (post) => {
      const url = `${baseUrl}/blog/${post.slug}/`
      const { content } = await compileMDX({ source: post.content })
      const html = renderToStaticMarkup(content).replace(
        /\b(href|src)="([^"]+)"/g,
        (_, attribute, value) => `${attribute}="${new URL(value, url).href}"`
      )
      return `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <description>${escapeXml(post.metadata.summary || '')}</description>
          <content:encoded>${escapeXml(html)}</content:encoded>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
    }))).join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
        <title>Valerie Kim</title>
        <link>${baseUrl}</link>
        <description>Tools, games, and self-evident systems — writing by Valerie Kim.</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
