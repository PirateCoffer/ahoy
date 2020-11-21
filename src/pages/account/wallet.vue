<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-2 mb-4">Wallet</h1>
        <v-expansion-panels :value="0">
          <v-expansion-panel>
            <v-expansion-panel-header class="headline d-flex justify-start">
              <div class="d-flex align-center">
                <v-avatar color="black" size="36" class="mr-4">
                  <img :src="repopath + '/media/images/pirate-logo.png'">
                </v-avatar>
                <span class="mr-3">Pirate</span>
                <span class="grey--text font-weight-medium">{{$store.state.wallet.balance.pirate | number}}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="wallet-content">
              <v-divider></v-divider>
              <v-tabs fixed-tabs v-model="tab">
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#send">Send Pirate</v-tab>
                <v-tab href="#receive">Receive Pirate</v-tab>
                <v-tab href="#transactions">Transactions</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item value="send">
                  <div class="px-8 py-6">
                    <h2 class="display-1">Send Pirate</h2>
                    <h3 class="headline mt-3">You can send up to 0.493646668125 ARRR</h3>
                    <v-container class="pa-0">
                      <v-row no-gutters>
                        <v-col>
                          <v-checkbox v-model="altWithdraw" hide-details>
                            <template v-slot:label>
                              <span class="body-2">
                                I want to withdraw to a BTC, ETH, LTC, BCH or DASH wallet&nbsp;
                                (powered by <a @click.stop="" href="https://morphtoken.com" target="_blank">MorphToken</a>) [&nbsp;<a href="/faq" target="_blank" @click.stop="">How does this work?</a>&nbsp;]
                              </span>
                            </template>
                          </v-checkbox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Receiving Pirate Address"
                            hint="Only valid Pirate addresses accepted"
                            persistent-hint
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <div v-if="localTx">
                        <v-row no-gutters>
                          <v-col class="title success--text">
                            LocalCrypto Wallet Address
                          </v-col>
                        </v-row>
                        <v-row no-gutters>
                          <v-col sm="7">
                            <v-text-field
                              label="Receive amount in Pirate"
                              hint="This is the amount of Pirate to be transferred to the other LocalCrypto wallet."
                              persistent-hint
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>
                      <div v-else>
                        <v-row>
                          <v-col sm="7">
                            <v-text-field
                              label="Receive amount in Pirate"
                              hint="This is the amount of Pirate to be received on the receiving Pirate address."
                              persistent-hint
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col sm="7">
                            <v-text-field
                              label="Amount to be deducted in Pirate"
                              hint="This is the estimated amount of ARRR to be deducted from your LocalPirate Pirate wallet to cover the Pirate transaction network fee."
                              persistent-hint
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-radio-group v-model="feeType">
                              <v-radio color="green" :label="`Standard (fee: ${standardFee} ARRR)`"></v-radio>
                              <v-radio color="green" :label="`Low (fee: ${lowFee} ARRR)`"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                        <v-row class="grey--text text--lighten-2">
                          <v-col>
                            <div>Network transaction fee: 0.000161437500 ARRR</div>
                            <v-btn text color="primary" class="mt-2">All Available Balance</v-btn>
                          </v-col>
                        </v-row>
                      </div>
                      <v-row>
                        <v-col>
                          <v-dialog v-model="continueDialog" width="500">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn large color="primary" class="mt-2" v-on="on">
                                <v-icon size="24" left>mdi-wallet</v-icon>
                                Continue
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="headline">
                                Confirm withdrawal
                              </v-card-title>
                              <v-card-text>
                                Please verify that the following information is correct and enter your password to confirm
                                Receiving address: 4BSX2ParTcSAa95icibdw4UyAbyWGnKd7YoNeHTcKfW34FUxeufGjXFiQmvLce6TCw2PbCackJ2gQabQJnFGc6XvAnQd8MBWTwfJbd77Gw
                                Amount to send: 0.493646668125 ARRR
                                <v-text-field
                                  label="Password"
                                  hint="Please enter your current password to proceed. 8-72 characters."
                                  persistent-hint
                                ></v-text-field>
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="continueDialog = false">
                                  Back
                                </v-btn>
                                <v-btn color="primary" text @click="sendPirate">
                                  Send Pirate
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-tab-item>
                <v-tab-item value="receive">
                  <div class="px-8 py-6">
                    <h2 class="display-1">Receive Pirate</h2>
                    <v-checkbox v-model="altDeposit">
                      <template v-slot:label>
                        <span class="body-2">
                          I want to deposit from a BTC, ETH, LTC, BCH or DASH wallet&nbsp;
                          (powered by <a @click.stop="" href="https://morphtoken.com" target="_blank">MorphToken</a>) [&nbsp;<nuxt-link to="/faq">How does this work?</nuxt-link>&nbsp;]
                        </span>
                      </template>
                    </v-checkbox>
                    <div class="d-flex align-center">
                      <v-btn large text class="mr-2">
                        <v-icon size="28" left>mdi-qrcode-scan</v-icon>
                        <v-icon right>mdi-chevron-down</v-icon>
                      </v-btn>
                      <div style="overflow-wrap: break-word; word-break: break-word">
                        <span class="grey--text">Your&nbsp;deposit&nbsp;Pirate&nbsp;address:&nbsp;</span><span class="font-weight-medium" style="cursor: pointer" @click="copy">{{$store.state.wallet.address.pirate}}</span>&nbsp;
                        <v-btn @click="copy" text color="primary">
                          <v-icon left>mdi-checkbox-multiple-blank-outline</v-icon>
                          Copy Address
                        </v-btn>
                      </div>
                    </div>
                    <div class="mt-4">
                      Your pending deposits will be shown here
                    </div>
                  </div>
                </v-tab-item>
                <v-tab-item value="transactions">
                  <div class="px-8 py-6">
                    <h2 class="display-1">Wallet Transactions</h2>
                    <v-btn large color="primary" class="mt-2">
                      <v-icon size="24" left>mdi-format-list-bulleted</v-icon>
                      Download CSV
                      <!-- FILENAME: realSatoshi - LocalPirate ARRR Transactions - Mon Aug 17 2020 03_40_17 GMT-0700 (Pacific Daylight Time) -->
                    </v-btn>
                    <v-alert text type="info" border="left" class="mt-3">
                      <template v-slot:prepend>
                        <v-icon color="info" class="ml-2 mr-4">mdi-information-outline</v-icon>
                      </template>
                      <i>Tip: withdrew funds from LocalPirate and don't see them in your wallet?</i>
                      <div>If you can see a transaction ID with a link to the blockchain explorer in the description, it means that your transaction has successfully been broadcast. Please make sure that your wallet is fully synchronized and that you are using the latest version of the Pirate wallet</div>
                    </v-alert>
                    <v-data-table
                      id="transactions-table"
                      v-if="transactions.length"
                      :headers="headers"
                      :items="transactions"
                      :hide-default-footer="transactions.length <= 5"
                      :items-per-page="5"
                      flat
                      @click:row="clickRow"
                      >
                      <!-- <template v-slot:item="{ item }"></template> -->
                      <template v-slot:item.side="{ value }">
                        <v-icon v-if="value === 'buy'" color="success">mdi-plus</v-icon>
                        <v-icon v-else color="error">mdi-minus</v-icon>
                      </template>
                      <template v-slot:item.description="{ item }">
                        <span v-if="item.side === 'sell'">Pirate reserve for trade&nbsp;</span>
                        <span v-else>Pirate reserve return from trade&nbsp;</span>
                        {{ item.txid }}
                      </template>
                    </v-data-table>
                    <div v-else>You have not made any transactions yet</div>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="text-no-break">How Long Does a Pirate Transaction Take?</v-card-title>
          <v-card-text>
            Pirate transactions normally take about 30 to 60 minutes to send, on occasion it can take a few hours if the network is slow.<br>
            <nuxt-link to="/faq#havent-received-tx">See why sometimes it takes longer</nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="text-no-break">Pirate Refunds and Payouts</v-card-title>
          <v-card-text>
            LocalPirate wallet is a web wallet - outgoing Pirate addresses are not connected to your account. If you are asking for a refund from a merchant, please ask them to send the refund to your receiving address.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-no-break">Outgoing Pirate Fees</v-card-title>
          <v-card-text>
            When sending from the LocalPirate wallet, a Pirate network fee is reserved and deducted from your balance. Transactions to wallets of other LocalPirate users are free.
            <v-divider class="ml-3 my-2"></v-divider>
            Current outgoing Pirate network fee:
            <span class="font-weight-bold">0.000109762500 ARRR</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Wallet',
  components: {
  },
  data: () => ({
    tab: null,
    feeType: 0,
    altDeposit: false,
    altWithdraw: false,
    continueDialog: false,
    headers: [
      { text: '', align: 'start', value: 'side', width: '5%' },
      { text: 'Date', width: '20%', align: 'start', value: 'date' },
      { text: 'Received ARRR', width: '20%', align: 'start', value: 'received' },
      { text: 'Sent ARRR', width: '15%', align: 'start', value: 'sent' },
      { text: 'Description', width: '40%', align: 'start', value: 'description', sortable: false },
    ],
    transactions: [
      { side: 'sell', date: '2020-08-09 7:02', received: '', sent: '0.214339299110', txid: '11dbc844-a534-4995-9bc8-44a534d9958d' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
    ],
  }),
  computed: {
    localTx () {
      return false
    },
    standardFee () {
      return '0.000109925000'
    },
    lowFee () {
      return '0.000027481250'
    },
  },
  created() {
  },
  mounted () {
  },
  methods: {
    async clickRow (item, row) {
      this.$router.push(`/trade/${item.txid}`)
    },
    async copy () {
      this.notify('Address copied to clipboard')
    },
    async sendPirate () {
      this.continueDialog = false
      this.notify('Sending Pirate')
    }
  },
}
</script>

<style lang="stylus">
#transactions-table tr
  cursor pointer
.wallet-content .v-expansion-panel-content__wrap
  padding 0
</style>
