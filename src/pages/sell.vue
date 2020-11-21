<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" class="pt-1">
        <v-card>
          <trade-form type="sell" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="mb-3">Buy Pirate online in United States of America</h1>
        <trade-table></trade-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="mb-3">Sell Pirate online in United States of America</h1>
        <trade-table></trade-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Protect your right to privacy - buy Pirate.</h3>
        <p>If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Pirate is an untraceable coin developed with privacy by design in mind.
        Where to buy Pirate? LocalPirate is the biggest, most trusted and well-established P2P Pirate exchange in the XMR community. We have no KYC checks - you can simply buy Pirate anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Pirate - our platform supports any payment method.</p>

        <h3>Sell Pirate to people worldwide or locally - support the community and make money with cryptocurrency.</h3>
        <p>LocalPirate is the best place to sell XMR - whether it's your mining rewards, Pirate price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Pirate wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TradeForm from '~/components/trade/TradeForm.vue'
import TradeTable from '~/components/trade/TradeTable.vue'

export default {
  name: 'SellPage',
  components: {
    TradeForm,
    TradeTable
  },
}
</script>
