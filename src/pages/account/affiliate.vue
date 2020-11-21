<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-card>
          <v-card-title class="text-h4">Affiliate Program</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <div class="mb-3">Your referral code is: <b>?rc=foo</b></div>
            <div>Your affiliate program is enabled, and you can earn commissions by adding your affiliate tag ?rc=gotz to any Parlay URL.</div>
            <div>Affiliation is registered when any user signs up after landing on the site from a link with your referral code.</div>
            <div class="mb-2 mt-3">You can use any of the Parlay links, for example:</div>
            <div class="mb-1">Regular:</div>
            <v-sheet class="mb-2 pa-2" width="100%" color="green">
              https://localmonero.co/buy-monero-with-usd-in-united-states-of-america?rc=gotz
            </v-sheet>
            <div class="mb-1">Tor:</div>
            <v-sheet class="mb-2 pa-2" width="100%" color="green darken-1">
              http://localmonerogt7be.onion/?rc=gotz              
            </v-sheet>
            <div class="mb-1">I2P:</div>
            <v-sheet class="mb-2 pa-2" width="100%" color="green darken-2">
              http://yeyar743vuwmm6fpgf3x6bzmj7fxb5uxhuoxx4ea76wqssdi4f3q.b32.i2p/?rc=gotz
              <br>
              http://lm.i2p/?rc=gotz
            </v-sheet>

            <div>Banner</div>
            <div>Banners promote Parlay with your affiliate. You can add HTML banners to your blogs and websites.</div>
            <div>banner for your advertisement (size 234 x 60 pixels, half-banner unit):</div>
            <div>
              <iframe allowtransparency="true" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="234" height="60" src="https://localmonero.co/affiliate/banner?rc=gotz"></iframe>
            </div>
            <div>Banner code:</div>
            <div>
              <pre><code>&lt;iframe allowtransparency="true" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="234" height="60" src="https://localmonero.co/affiliate/banner?rc=gotz">&lt;/iframe></code></pre>
            </div>
            <div style="overflow-x: auto; font-family: monospace; background-color: rgb(246, 248, 250); padding: 8px; color: #000;">&lt;iframe allowtransparency="true" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="234" height="60" src="https://localmonero.co/affiliate/banner?rc=gotz"&gt;&lt;/iframe&gt;</div>
            <h2><span><span>Monero</span> Street Price Widget (with your affiliate code)</span></h2>
            <div>
              <iframe allowtransparency="true" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="210" height="130" src="https://localmonero.co/priceWidget?currencyCode=USD&amp;fallback=convert" style="margin: 16px 30px;"></iframe>
            </div>
            <span>To get a <span>Monero</span> street price widget for your own web site select the desired currency below and simply paste the following code into your own web page:</span>
          </v-card-text>
          <v-card-title>Users</v-card-title>
          <v-card-text>You are currently registered as an affiliate for 0 users and will earn commissions from all trades done by these.</v-card-text>
          <v-card-title>Payouts</v-card-title>
          <v-card-text>No payouts yet</v-card-text>
        </v-card>
        <v-card class="mt-3">
          <v-card-title>Affiliate program terms</v-card-title>
          <v-card-text>
            <span>• You can link to any individual page, such as country listing or payment method listing, or anything else on Parlay. <br>• You will earn XMR from the users who arrive to the site through your affiliate link register and make trades. <br>• Payouts will be made daily to your Parlay wallet as XMR. <br>• Commissions will be paid for one year from the user's registration. Commission is based on the income the new user brings for Parlay (trading fees). <br>• If you have active coupons, your total coupon rebates for a given period will be subtracted from your affiliate earnings for the same given period. If your total rebate amount for a given period is greater than or equal to the affiliate earnings for the same given period, you will not receive any affiliate earnings for that given period. <br>• Any foul play, such as misleading advertising, is forbidden. <br>• Spamming is forbidden. Spamming includes sending unsubscribed private or public messages on forums/reddit, unsubscribed mass-mail, etc. <br>• Adding hidden iframes on a website in order to capture affiliates is forbidden. Only affiliate iframes or direct links to the webpage are allowed. <br>• Parlay has the right to disable any affiliate user at any given time. If you breach the terms, your affiliate program will be terminated.</span>
          </v-card-text>
          <v-card-title>Commission example</v-card-title>
          <v-card-text>
            You get two users, buyer and seller of the Monero registered on Parlay, and they do one trade valued 100 XMR. You earn 20% commission on the Parlay trading fees from both participants, in total 40% of the Parlay fee. Your earned sum is 0.4 XMR. Only finalized sales that go though our transaction process matter. Payouts are made daily.<br>
            Parlay support is more than willing to help you with any questions.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AccountAffiliate',
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  created() {
  },
  mounted () {
  },
  methods: {
    async onClick () {
      this.notify('Balance It!')
    }
  },
}
</script>

<style>
  code {
    background-color: #EEEEEE;
    font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
  }
  pre {
    white-space: pre-line;
    word-break: keep-all;
    background-color: #EEEEEE;
    font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
    margin-bottom: 10px;
    max-height: 600px;
    overflow: auto;
    padding: 5px;
    width: auto;
  }
</style>
