<?xml version="1.0" encoding="UTF-8"?>
<!-- Terminal-styled XSL for yun.ng's sitemap.xml — renders the raw XML
     sitemap as a styled HTML page when viewed in a browser. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — 云</title>
        <style>
          :root { color-scheme: dark; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 3rem 1rem;
            background: #0d1117;
            color: #c9d1d9;
            font-family: 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace;
            font-size: 14px;
            line-height: 1.6;
          }
          .wrap { max-width: 860px; margin: 0 auto; }
          h1 { font-size: 1.4rem; margin: 0 0 0.25rem; color: #f0f6fc; }
          h1::before { content: "> "; color: #58a6ff; }
          .meta { color: #8b949e; font-size: 0.8rem; margin: 0 0 2rem; }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #30363d;
          }
          th {
            text-align: left;
            color: #58a6ff;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 0.5rem 0.75rem;
            border-bottom: 2px solid #58a6ff;
            background: #161b22;
          }
          td {
            padding: 0.4rem 0.75rem;
            border-bottom: 1px solid #21262d;
            font-size: 0.8rem;
            vertical-align: top;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #161b22; }
          td.loc { word-break: break-all; }
          a { color: #58a6ff; text-decoration: none; }
          a:hover { text-decoration: underline; }
          td.lastmod, td.changefreq, td.priority {
            color: #8b949e;
            white-space: nowrap;
            font-size: 0.75rem;
          }
          .foot { margin-top: 2rem; color: #8b949e; font-size: 0.75rem; }
          .foot a { color: #58a6ff; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Sitemap</h1>
          <p class="meta">
            <xsl:value-of select="count(s:urlset/s:url)"/> pages · yun.ng
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:apply-templates select="s:urlset/s:url"/>
            </tbody>
          </table>
          <p class="foot">
            also available as
            <a href="/rss.xml">rss.xml</a> · <a href="/atom.xml">atom.xml</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="s:url">
    <tr>
      <td class="loc">
        <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
      </td>
      <td class="lastmod">
        <xsl:value-of select="s:lastmod"/>
      </td>
      <td class="changefreq">
        <xsl:value-of select="s:changefreq"/>
      </td>
      <td class="priority">
        <xsl:value-of select="s:priority"/>
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
