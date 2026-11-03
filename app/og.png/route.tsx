import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', padding: 80, background: '#f5f5f5', color: '#171717' }}>
        <div style={{ fontSize: 80, fontWeight: 700 }}>Valerie Kim</div>
        <div style={{ fontSize: 36, marginTop: 32 }}>Tools, games, and self-evident systems.</div>
        <div style={{ fontSize: 28, marginTop: 64, color: '#525252' }}>valeriekim.ca</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
