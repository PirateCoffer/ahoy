import Crypto from 'iron-crypto'

export const state = () => ({
  channels: {
    alice: {
      recent: {},
      unread: 0,
      members: {
        davy: {},
        alice: {},
      },
      messages: [],
    },
    bob: {
      recent: {},
      unread: 0,
      members: {
        davy: {},
        bob: {},
      },
      messages: [],
    },
  },
  users: {
    alice: { username: 'alice', name: 'Alice', avatar: 'A', color: 'pink' },
    bob: { username: 'bob', name: 'Bob', avatar: 'B', color: 'teal' },
  },
})

export const getters = {
  channels (state) {
    return state.channels
  },
}

export const mutations = {
  INIT_USER () {},
  SET_CHANNELS(state, channels) {
    state.channels = channels
  },
}

export const actions = {
  // async boilerplate ({ commit, dispatch, getters, rootGetters, rootState, state }, payload) {
  //   dispatch('notify', `${user.shade ? 'Dark' : 'Light'} Theme Enabled`, { root: true })
  // },
  setChannels ({ commit }, channels) {
    commit('SET_CHANNELS', channels)
  }
}
