/**
 * @param {string} url
 * @returns {boolean}
 */
export function isURL(url) {
  try {
    new URL(url)

    return true
  } catch {
    return false
  }
}

/**
 * @typedef {{isDir?: boolean, noQuery?: boolean, noFragment?: boolean}} UrlTransformationOptions
 *
 * @param {string} url
 * @param {string} [base]
 * @param {UrlTransformationOptions} [options]
 * @returns {string}
 */
export function url(
  url,
  base = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost',
  options = {}
) {
  const u = new URL(url, base)

  u.pathname = u.pathname.replace(/\/+/g, '/')

  if (options.isDir && !u.pathname.endsWith('/')) {
    u.pathname += '/'
  }

  if (options.noQuery) {
    u.search = ''
  }

  if (options.noFragment) {
    u.hash = ''
  }

  return u.toString()
}

/**
 * @param {...string} paths
 * @returns {string}
 */
export function pathname(...paths) {
  const url = paths.filter((p) => !!p).join('/')

  return new URL(
    url,
    process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost'
  ).pathname.replace(/\/+/g, '/')
}

/**
 * @param {string} url
 * @returns {string}
 */
export function pathquery(url) {
  const u = new URL(
    url,
    process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost'
  )

  return u.pathname + u.search
}

/**
 * @param {string} url
 * @returns {string|null}
 */
export function extname(url) {
  const u = new URL(
    url,
    process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost'
  )

  const e = u.pathname
    .split('/')
    .pop()
    ?.match(/(\.[^.]+)$/)

  if (e) {
    return e[1]
  } else {
    return null
  }
}

/**
 * @param  {...string} paths
 * @returns {string}
 * @deprecated
 */
export function joinPaths(...paths) {
  return paths
    .filter((p) => !!p)
    .join('/')
    .replace(/\/+/g, '/')
}
