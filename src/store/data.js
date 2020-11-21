export const state = () => ({
  users: {
    '2Hr1vt1x4ALcUaRvWcVbC8rJwisnmxPF': {
      avatar: '',
      name: 'Alice',
      username: 'alice',
      password: '4pHoLJjbaGzYjyD4yV6ovnkZXSAUUTmw',
    },
  },
  accounts: {
    DudeWheresMyCoin: { name: 'Dude where\'s my coin', rating: 1, trades: 24 },
    realSatoshi: { name: 'realSatoshi', rating: 1, trades: 17 },
    BuyCoinsFast: { name: 'Buy Coins Fast', rating: 0.95, trades: 3420 },
    mvins: { name: 'Mid Valley Ins', rating: 1, trades: 420 },
    CryptoQueen: { name: 'Crypto Queen', rating: 1, trades: 25 },
    CryptMe: { name: 'Crypt Me', rating: 1, trades: 35 },
    MuhCoins: { name: 'Muh Coins', rating: 1, trades: 252 },
    CryptoNow: { name: 'Crypto Now', rating: 1, trades: 55 },
    SumCoins: { name: 'Sum Coins', rating: 1, trades: 33 },
    PirateCoiner: { name: 'Pirate Coiner', rating: 0.88, trades: 421 },
  },
  offers: [
    {
      tid: 1000,
      user: 'DudeWheresMyCoin',
      type: 'zelle',
      price: 0.11,
      min: 20,
      max: 200,
    },
    {
      tid: 1001,
      user: 'realSatoshi',
      type: 'zelle',
      price: 0.12,
      min: 50,
      max: 500,
    },
    {
      tid: 1002,
      user: 'BuyCoinsFast',
      type: 'zelle',
      price: 0.15,
      min: 100,
      max: 3000,
    },
    {
      tid: 1003,
      user: 'mvins',
      type: 'zelle',
      price: 0.13,
      min: 50,
      max: 1000,
    },
    {
      tid: 1004,
      user: 'CryptoQueen',
      type: 'cashapp',
      price: 0.12,
      min: 20,
      max: 200,
    },
    {
      tid: 1005,
      user: 'CryptMe',
      type: 'cashapp',
      price: 0.10,
      min: 10,
      max: 200,
    },
    {
      tid: 1006,
      user: 'MuhCoins',
      type: 'cashapp',
      price: 0.14,
      min: 10,
      max: 200,
    },
    {
      tid: 1007,
      user: 'CryptoNow',
      type: 'paypal',
      price: 0.11,
      min: 10,
      max: 200,
    },
    {
      tid: 1008,
      user: 'SumCoins',
      type: 'paypal',
      price: 0.09,
      min: 50,
      max: 200,
    },
    {
      tid: 1009,
      user: 'PirateCoiner',
      type: 'btc',
      price: 0.10,
      min: 200,
      max: 2000,
    },
  ],
  trades: [],
})

export const getters = {
  users (state) {
    return state.users
  },
  accounts (state) {
    return state.accounts
  },
  offers (state) {
    return state.offers
  },
  trades (state) {
    return state.trades
  },
}

export const mutations = {
  ADD_OFFER (state, offer) {
    state.offers.push(offer)
  },
  ADD_TRADE (state, trade) {
    state.trades.push(trade)
  },
}
