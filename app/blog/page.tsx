import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Notes by Valerie Kim on iconic arithmetic, accessibility, and making complicated things feel self-evident.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Blog | Valerie Kim',
    description: 'Notes on iconic arithmetic, accessibility, and making complicated things feel self-evident.',
    url: '/blog/',
    images: ['/og.png'],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
