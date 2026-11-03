// Run after npm run build: node --test tests/static-site.test.mjs
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'

const read = (path) => readFileSync(new URL(`../out/${path}`, import.meta.url), 'utf8')

test('each page exports its own canonical URL and share preview', () => {
  for (const [path, title, image] of [
    ['', 'Valerie Kim', '/og.png'],
    ['portfolio/', 'Portfolio | Valerie Kim', '/og.png'],
    ['blog/', 'Blog | Valerie Kim', '/og.png'],
    ['blog/printing-accessible-cards/', 'Printing Accessible Playing Cards', '/blog/printing-accessible-cards/og.png'],
    ['blog/revolution-will-not-be-symbolized/', 'The Revolution Will Not Be Symbolized', '/blog/revolution-will-not-be-symbolized/og.png'],
  ]) {
    const html = read(`${path}index.html`)
    const canonical = `https://valeriekim.ca/${path}`
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), path)
    for (const [key, value] of [
      ['og:title', title], ['og:url', canonical],
      ['og:image', `https://valeriekim.ca${image}`],
    ]) {
      assert.ok(html.includes(`<meta property="${key}" content="${value}"`), `${path}: ${key}`)
    }
    assert.ok(html.includes('<meta name="twitter:card" content="summary_large_image"'), path)
    assert.ok(html.includes(`<meta name="twitter:image" content="https://valeriekim.ca${image}"`), path)
  }
})

test('RSS carries full posts with absolute images and stable identities', () => {
  const rss = read('rss.xml')
  const postCount = readdirSync(new URL('../app/blog/posts/', import.meta.url))
    .filter((file) => file.endsWith('.mdx')).length
  assert.equal((rss.match(/<item>/g) || []).length, postCount)
  assert.equal((rss.match(/<content:encoded>/g) || []).length, postCount)
  assert.ok(rss.includes('xmlns:content="http://purl.org/rss/1.0/modules/content/"'))
  assert.ok(rss.includes('https://valeriekim.ca/blog/opt/weyland__netrunner.webp'))
  assert.ok(rss.includes('https://valeriekim.ca/blog/opt/house-of-bao-1.webp'))
  assert.ok(rss.includes('https://valeriekim.ca/blog/revolution-will-not-be-symbolized/#org0de8787'))
  assert.ok(rss.includes('My girlfriend is legally blind'))
  assert.ok(rss.includes('Most of the numbers that matter in modern life are invisible.'))
  assert.ok(rss.includes('<guid isPermaLink="true">https://valeriekim.ca/blog/printing-accessible-cards/</guid>'))
  assert.ok(!rss.includes('My Portfolio'))
})

test('discovery files include the portfolio and identify the real author', () => {
  assert.ok(read('sitemap.xml').includes('<loc>https://valeriekim.ca/portfolio/</loc>'))
  assert.ok(read('robots.txt').includes('Sitemap: https://valeriekim.ca/sitemap.xml'))
  const html = read('blog/printing-accessible-cards/index.html')
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
  assert.equal(schemas.find((schema) => schema['@type'] === 'Person').name, 'Valerie Kim')
  assert.equal(schemas.find((schema) => schema['@type'] === 'BlogPosting').author.name, 'Valerie Kim')
})
