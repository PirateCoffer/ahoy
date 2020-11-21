import Crypto from 'iron-crypto'

export const state = () => ({
  auth: null,
  shade: true,
  notif: {
    unread: 4,
    items: [
      { title: 'Message 1', subtitle: 'New order pending', icon: 'plus' },
      { title: 'Message 2', subtitle: 'New order pending', icon: 'plus' },
      { title: 'Message 3', subtitle: 'New order pending', icon: 'plus' },
      { title: 'Message 4', subtitle: 'New order pending', icon: 'plus' },
    ],
  },
})

export const getters = {
  shade (state) {
    return state.shade
  },
  auth (state) {
    return state.auth
  },
  obj (state) {
    return {
      auth: state.auth,
      shade: state.shade,
    }
  },
}

export const mutations = {
  INIT_USER () {},
  SET_USER(state, user) {
    state.auth = user.auth
    state.shade = user.shade
  },
}

export const actions = {
  // async boilerplate ({ commit, dispatch, getters, rootGetters, rootState, state }, payload) {
  //   dispatch('notify', `${user.shade ? 'Dark' : 'Light'} Theme Enabled`, { root: true })
  // },
  async toggleShade ({ commit, dispatch, rootGetters }) {
    const user = rootGetters.user
    user.shade = !user.shade
    commit('SET_USER', user)
    return user.shade
  },
  login ({ commit, dispatch, getters, rootGetters, rootState, state }, payload) {
    if (!payload)
      throw new Error('missing login payload')
    const { username, password } = payload
    if (!username || !password)
      throw new Error('missing arguments')
    const user = rootState.data.users[Crypto.hash(username)]
    if (!user)
      throw new Error(`User '${username}' not found`)
    const hashPw = Crypto.hash(password)
    if (hashPw !== user.password)
      throw new Error(`Invalid password`)
    const userObj = rootGetters.user
    userObj.auth = true
    commit('SET_USER', userObj)
  },
  async logout ({ commit, dispatch, rootGetters }) {
    const user = rootGetters.user
    user.auth = false
    commit('SET_USER', user)
  },
}
