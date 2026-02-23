const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcpshim.dev'

const additionalPaths = []

const additionalSitemaps = []

module.exports = {
  siteUrl: siteUrl,

  generateRobotsTxt: true,
  generateIndexSitemap: true,

  sitemapSize: 10000,

  exclude: [
    // sitemaps

    ...additionalSitemaps,
  ],

  additionalPaths() {
    return additionalPaths.map((loc) => {
      return {
        loc: loc,
      }
    })
  },

  robotsTxtOptions: {
    additionalSitemaps: additionalSitemaps.map((sitemap) => {
      return new URL(sitemap, siteUrl).toString()
    }),
  },
}
