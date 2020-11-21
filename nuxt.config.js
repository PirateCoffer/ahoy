import colors from 'vuetify/es5/util/colors'
import taxonomy from './src/fixtures/taxonomy'

const repo = process.env.npm_package_name || ''
const isDev = process.env.NODE_ENV !== 'production'
const repopath = isDev ? '' : `/${repo}`
const siteTitle = process.env.npm_package_config_title || ''
const siteSubtitle = process.env.npm_package_config_subtitle || ''
const siteDescription = process.env.npm_package_description || ''
const siteUrl = process.env.npm_package_config_url || ''

export default {
  ssr: false,
  target: 'static',
  router: {
    base: isDev ? undefined : `/${repo}/`,
  },
  srcDir: 'src',
  dev: isDev,
  env: {
    repo,
    isDev,
    siteUrl,
    repopath,
    siteTitle,
    siteSubtitle,
    siteDescription,
    ...taxonomy
  },
  head: {
    titleTemplate: '%s - ' + siteSubtitle,
    title: siteTitle || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { name: 'robots', content: 'noindex, nofollow' },
      { hid: 'description', name: 'description', content: siteDescription || '' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'msapplication-config', content: `${repopath}/media/favicon/browserconfig.xml` },
      { name: 'theme-color', content: '#000000' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: siteUrl },
      { property: 'twitter:title', content: siteTitle },
      { property: 'twitter:description', content: siteDescription },
      { property: 'twitter:image', content: `${siteUrl}/media/favicon/og-image.jpg` },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:image:width', content: '279' },
      { property: 'og:image:height', content: '279' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:url', content: siteUrl },
      { property: 'og:image', content: `${siteUrl}/media/favicon/og-image.jpg` },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${repopath}/media/favicon/apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${repopath}/media/favicon/favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${repopath}/media/favicon/favicon-16x16.png` },
      { rel: 'manifest', href: `${repopath}/media/favicon/site.webmanifest` },
      { rel: 'mask-icon', href: `${repopath}/media/favicon/safari-pinned-tab.svg`, color: '#5bbad5' },
      { rel: "shortcut icon", href: `${repopath}/media/favicon/favicon.ico` },
    ],
  },
  plugins: [ '~/plugins/plugins.client' ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],
  // Axios module configuration - See https://axios.nuxtjs.org/options
  axios: {},
  // Content module configuration - See https://content.nuxtjs.org/configuration
  content: {},
  // vuetify module configuration - https://github.com/nuxt-community/vuetify-module
  vuetify: {},
}
