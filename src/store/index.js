export const state = () => ({
  leftNav: null,
  rightNav: false,
  title: process.env.siteTitle,
})

export const getters = {
  user (state, getters, rootState, rootGetters) {
    return rootGetters['user/obj']
  },
  leftNav (state) {
    return state.leftNav
  },
  rightNav (state) {
    return state.rightNav
  },
}

export const mutations = {
  SET_RIGHT_NAV (state, payload = true) {
    state.rightNav = payload
  },
  SET_LEFT_NAV (state, payload = true) {
    state.leftNav = payload
  },
}

export const actions = {
  notify ({ state, commit, dispatch }, payload) {
    dispatch('notify/notify', payload)
  },
}
