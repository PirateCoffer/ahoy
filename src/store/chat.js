export const state = () => ({
  channel: 'alice',
  channels: {
    alice: {
      recent: {},
      unread: 0,
      // members: {
      //   davy: {},
      //   alice: {},
      // },
      messages: [],
    },
    bob: {
      recent: {},
      unread: 0,
      // members: {
      //   davy: {},
      //   bob: {},
      // },
      messages: [],
    },
  },
  users: {
    alice: { username: 'alice', name: 'Alice', avatar: 'A', color: 'pink' },
    bob: { username: 'bob', name: 'Bob', avatar: 'B', color: 'teal' },
  },
  account: {
    username: 'davy',
    name: 'Davy Jones',
    avatar: 'DJ',
    color: 'green',
  },
})

export const getters = {
  channels (state) {
    return state.channels
  },
}

export const mutations = {
  SET_ACCOUNT(state, account) {
    state.account = _.clone(account)
  },
  SET_RECENT(state, { channel, recent }) {
    const chan = state.channels[channel]
    if (!chan)
      return
    chan.recent = recent
  },
  SET_CHANNELS(state, { channels }) {
    state.channels = channels
  },
  SET_CHANNEL(state, { channel }) {
    state.channel = channel
  },
  ADD_CHANNEL(state, { name, opts }) {
    state.channels[name] = opts || {
      unread: 0,
      recent: {},
      // members: {
      //   davy: {},
      //   alice: {},
      // },
      messages: [],
    }
  },
  REMOVE_CHANNEL(state, { name }) {
    delete state.channels[name]
  },
  ADD_USER(state, user) {
    state.users[user.username] = user
  },
  REMOVE_USER(state, { name }) {
    delete state.users[name]
  },
  ADD_MESSAGE(state, { channel, message }) {
    const chan = state.channels[channel]
    if (!chan)
      return
    chan.messages.push(message)
  },
  INCREMENT_UNREAD(state, { channel }) {
    const chan = state.channels[channel]
    if (!chan)
      return
    chan.unread++
  },
}

export const actions = {
  // async boilerplate ({ commit, dispatch, getters, rootGetters, rootState, state }, payload) {
  //   dispatch('notify', `${user.shade ? 'Dark' : 'Light'} Theme Enabled`, { root: true })
  // },
  setChannels ({ commit }, { channels }) {
    commit('SET_CHANNELS', channels)
  },
  setChannel ({ commit }, { channel }) {
    commit('SET_CHANNEL', { channel })
  },
  addChannel ({ commit }, { name, opts }) {
    commit('ADD_CHANNEL', { name, opts })
  },
  removeChannel ({ commit }, { name }) {
    commit('REMOVE_CHANNEL', { name })
  },
  addMessage ({ commit }, { channel, message }) {
    commit('ADD_MESSAGE', { channel, message })
  },
  setRecent ({ commit }, { channel, recent }) {
    commit('SET_RECENT', { channel, recent })
  },
  setAccount ({ commit }, account) {
    commit('SET_ACCOUNT', account)
  },
  addUser ({ commit }, user) {
    commit('ADD_USER', user)
    commit('ADD_CHANNEL', { name: user.username })
  },
  incrementUnread ({ commit }, { channel }) {
    commit('INCREMENT_UNREAD', { channel })
  },
}
