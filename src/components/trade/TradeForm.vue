<template>
  <v-form v-model="valid">
    <v-container class="px-6">
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn x-large depressed block v-bind="buyAttr" @click="side = 'buy'">
            <v-icon left>mdi-cart-arrow-down</v-icon>Buy
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn x-large depressed block v-bind="sellAttr" @click="side = 'sell'">
            <v-icon left>mdi-cart-arrow-up</v-icon>Sell
          </v-btn>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            label="Amount"
            outlined
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            :items="fiats"
            v-model="fiat"
            outlined
            hide-details
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6">
          <v-select
            :items="countries"
            v-model="country"
            outlined
            hide-details
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            :items="paymentMethods"
            v-model="paymentMethod"
            outlined
            hide-details
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-btn x-large depressed block color="primary" @click="onSearch">
            <v-icon left>mdi-magnify</v-icon>Search
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'TradeForm',
  props: {
    type: {
      type: String,
      default: 'buy',
    },
  },
  data: () => ({
    valid: false,
    side: 'buy',
    fiats: ['AED','AEON','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BCH','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYN','BZD','CAD','CDF','CHF','CLF','CLP','CNH','CNY','COP','CRC','CUC','CUP','CVE','CZK','DASH','DJF','DKK','DOGE','DOP','DZD','EGP','ERN','ETB','ETH','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTC','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SC','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VES','VND','VUV','WST','XAF','XAG','XAU','XCD','XDR','XOF','XPD','XPF','XPT','XRP','YER','ZAR','ZEC','ZMW','ZWL'],
    fiat: 'USD',
    paymentMethods: ["advcash","Apple Pay","Cash (locally)","Cash App (Square Cash)","Cash at ATM","Cash by mail","Cash deposit","Cashier's check","CashU","Chase Quickpay","Credit card","Cryptocurrency","Dwolla","Gift Card Code (Global)","Google Wallet","International Wire (SWIFT)","Mobile top up","Moneybookers / Skrill","Moneygram","National bank transfer","Neteller","NetSpend Reload Pack","OneCard","Other online payment","Paxum","Payeer","Payoneer","Paypal","PayPal My Cash","PaySafeCard","Perfect Money","Postal order","Reloadit","RIA Money Transfer","Serve2Serve","Transfers with specific bank","Transferwise","Vanilla","Venmo","Walmart 2 Walmart","WebMoney","Wechat","Western Union","Worldremit","Xoom","Zelle"],
    paymentMethod: "Cash App (Square Cash)",
    countries: ["United States of America"],
    country: "United States of America",
  }),
  computed: {
    btnActive () {
      return `primary`
    },
    btnInactive () {
      return `grey darken-2`
    },
    buyAttr () {
      return {
        outlined: this.side !== 'buy',
        color: this.side === 'buy' ? this.btnActive : this.btnInactive
      }
    },
    sellAttr () {
      return {
        outlined: this.side !== 'sell',
        color: this.side === 'sell' ? this.btnActive : this.btnInactive
      }
    },
  },
  created () {
    this.side = this.type
  },
  methods: {
    onSearch () {
      this.$router.push({ path: '/search', query: { quote: 'USD', type: 'cashapp', locale: 'USA', amount: 100 }})
    },
  },
}
</script>
