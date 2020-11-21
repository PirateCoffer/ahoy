export const state = () => ({
  balance: {
    pirate: 3456
  },
  address: {
    pirate: '4BSX2ParTcSAa95icibdw4UyAbyWGnKd7YoNeHTcKfW34FUxeufGjXFiQmvLce6TCw2PbCackJ2gQabQJnFGc6XvAnQd8MBWTwfJbd77Gw'
  },
})

export const mutations = {
  setUsers(state, users) {
    state.list = users;
  }
}
