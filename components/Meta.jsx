import Head from 'next/head'

import { siteUrl } from '@/lib/env'
import { url } from '@/lib/url'

/**
 * Generates JSON-LD structured data for SEO.
 *
 * @param {object} options - The options object
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.thisUrl - Current page URL
 * @param {string} options.image - Page image URL
 * @returns {object} JSON-LD structured data object
 */
function generateStructuredData({ title, description, thisUrl, image }) {
  const hostname = thisUrl ? new URL(thisUrl).hostname : 'mcpshim.dev'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mcpshim.dev/#organization',
        name: 'mcpshim',
        url: 'https://mcpshim.dev',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mcpshim.dev/icon.svg',
        },
        sameAs: ['https://github.com/mcpshim/mcpshim'],
      },
      {
        '@type': 'WebSite',
        '@id': `https://${hostname}/#website`,
        url: `https://${hostname}`,
        name: 'mcpshim',
        publisher: {
          '@id': 'https://mcpshim.dev/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': thisUrl,
        url: thisUrl,
        name: title,
        description: description,
        isPartOf: {
          '@id': `https://${hostname}/#website`,
        },
        image: image,
      },
    ],
  }
}

export default function Meta({
  title,
  description,
  keywords,

  icon,
  image,

  appManifest,

  baseUrl = siteUrl,
  thisUrl = '',
}) {
  thisUrl = url(thisUrl || '/', baseUrl, { noQuery: true, noFragment: true })

  if (Array.isArray(keywords)) {
    keywords = keywords.join(',')
  }

  icon = url(icon || `favicon.ico`, baseUrl)
  image = url(image || `banner.png`, baseUrl)

  const structuredData = generateStructuredData({
    title,
    description,
    thisUrl,
    image,
  })

  return (
    <Head>
      {appManifest ? (
        <link rel="manifest" href={appManifest || '/app.webmanifest'} />
      ) : null}
      <link rel="icon" href={icon} />
      <link rel="canonical" href={thisUrl} />
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <meta property="image" content={image} />
      <meta itemProp="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={new URL(thisUrl).hostname} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={thisUrl} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:image" content={image} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon-dark.ico"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon-light.ico"
        media="(prefers-color-scheme: light)"
      />
    </Head>
  )
}
