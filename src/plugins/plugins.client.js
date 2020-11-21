import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import utilMixins from '~/mixins/utilMixins'

require('iron-core').explode()

Vue.use(function (Vue, options) {
  Vue.mixin({ mixins: [ utilMixins ] })
}, {})
Vue.use(VueClipboard)

export default async ({ store }, inject) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'user/SET_USER')
      localStorage.setItem('user', JSON.stringify(store.getters.user))
  })

  let record = false
  try {
    record = localStorage.getItem('user') || false
    if (record)
      record = JSON.parse(record)
  } catch (err) {
    log({ err })
  }
  if (record)
    store.commit('user/SET_USER', record)

  // ctx.$cookie = process.browser 
  //   ? require('~/services/cookie/client-cookie').default
  //   : require('~/services/cookie/server-cookie')
  // inject('cookie', ctx.$cookie)
  // let csrf = _.get(ctx, 'req.xsrf')
  // if (process.server) {
    // ctx.beforeNuxtRender(({ nuxtState, Components }) => {
    //   let error = _.get(ctx, 'req.error')
    //   if (error) {
    //     return ctx.error({ statusCode: 403, message: error })
    //   }
    //   nuxtState.token = csrf
    // })
    // ctx.app.$axios.defaults.headers.post['xsrf-token'] = ctx.req.xsrf
    // if (ctx.req.user) {
    //   ctx.store.commit('user/SET_USER', ctx.req.user, { root: true })
    // }
  // } else if (process.browser) {
    // const storage = require('~/services/storage').default
    // ctx.$storage = storage
    // inject('storage', storage)
    // // Auth:
    // ctx.app.$axios.defaults.headers.post['xsrf-token'] = ctx.nuxtState.token
  // }
}
