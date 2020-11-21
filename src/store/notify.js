const def = {
  msg: 'Success!',
  active: false,
  color: 'green darken-2',
  timeout: 4000,
  top: null,
  bottom: null,
  left: null,
  right: null,
}

export const state = () => ({
  msg: def.msg,
  active: def.active,
  color: def.color,
  timeout: def.timeout,
  top: def.top,
  bottom: def.bottom,
  left: def.left,
  right: def.right,
})

export const mutations = {
  active (state, payload) {
    state.active = payload
  },
  notify (state, payload) {
    if (typeof payload === 'object') {
      state.msg = payload.msg || payload.message || def.msg
      state.color = payload.color || (payload.ok ? def.color : 'error')
      state.timeout = payload.timeout || def.timeout
      state.top = payload.top || def.top,
      state.left = payload.left || def.left
      state.right = payload.right || def.right
      state.bottom = payload.bottom || def.bottom
    } else if (typeof payload === 'string') {
      state.color = def.color
      state.msg = payload
    }
  }
}

export const actions = {
  addNotify ({commit}, payload) {
    commit('active', true)
    commit('notify', payload)
  },
  notify ({state, commit, dispatch}, payload) {
    if (state.active) {
      setTimeout(() => {
        commit('active', false)
        setTimeout(() => {
          dispatch('addNotify', payload)
          commit('active', true)
        }, 300)
      }, 300)
    } else {
      dispatch('addNotify', payload)
    }
  }
}

