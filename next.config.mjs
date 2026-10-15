/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site for GitHub Pages.
  output: 'export',
  // Emit /path/index.html. Needed because /blog/<slug>/ is also a directory
  // (it holds og.png); GitHub Pages redirects /blog/<slug> -> /blog/<slug>/.
  trailingSlash: true,
  // No image optimization server on Pages.
  images: { unoptimized: true },
}

export default nextConfig
