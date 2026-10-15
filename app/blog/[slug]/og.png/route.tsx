import { ImageResponse } from 'next/og'
import { getBlogPosts } from 'app/blog/utils'

// Rendered once per post at build time (static export): /blog/<slug>/og.png
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export function GET(_request: Request, { params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  let title = post?.metadata.title ?? 'Valerie Kim'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
