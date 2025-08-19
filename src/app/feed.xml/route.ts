import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://about.violetcarterphotography.com'
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Violet Carter Photography Blog</title>
    <description>Wedding photography tips, inspiration, and stories from a New York documentary photographer</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>hello@violetcarterphotography.com (Violet Carter)</managingEditor>
    <webMaster>hello@violetcarterphotography.com (Violet Carter)</webMaster>
    <category>Photography</category>
    <category>Wedding</category>
    <category>New York</category>
    <image>
      <url>${baseUrl}/og-image.jpg</url>
      <title>Violet Carter Photography</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    
    <!-- Sample blog post - replace with actual posts -->
    <item>
      <title>10 Best Wedding Venues in New York City for Documentary Photography</title>
      <description>Discover the most photogenic NYC wedding venues that perfectly complement a documentary photography style, from intimate rooftops to grand ballrooms.</description>
      <link>${baseUrl}/blog/best-nyc-wedding-venues-documentary-photography</link>
      <guid>${baseUrl}/blog/best-nyc-wedding-venues-documentary-photography</guid>
      <pubDate>Mon, 15 Jan 2024 10:00:00 GMT</pubDate>
      <author>hello@violetcarterphotography.com (Violet Carter)</author>
      <category>Venues</category>
      <category>NYC Wedding Photography</category>
    </item>
    
    <item>
      <title>Why Choose Film-Inspired Wedding Photography in 2024</title>
      <description>The timeless appeal of film-inspired wedding photography and why it's perfect for modern couples seeking authentic, emotional imagery.</description>
      <link>${baseUrl}/blog/film-inspired-wedding-photography-2024</link>
      <guid>${baseUrl}/blog/film-inspired-wedding-photography-2024</guid>
      <pubDate>Wed, 10 Jan 2024 14:00:00 GMT</pubDate>
      <author>hello@violetcarterphotography.com (Violet Carter)</author>
      <category>Photography Style</category>
      <category>Film Photography</category>
    </item>
    
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  })
}
