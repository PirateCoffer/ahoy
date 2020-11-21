<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12" sm="6">
        <v-card tile>
          <v-card-title class="title grey darken-4">Buyer</v-card-title>
          <v-divider></v-divider>
          <step-buy :phase="phase" />
        </v-card>
      </v-col>
      <v-col xs="12" sm="6">
        <v-card tile>
          <v-card-title class="title grey darken-4">Seller</v-card-title>
          <v-divider></v-divider>
          <step-sell :phase="phase" />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex px-3">
      <v-btn @click="next">Next</v-btn>
      <div class="text-h6 ml-3">Phase {{phase}}</div>
    </v-row>
  </v-container>
</template>

<script>
import StepBuy from '~/components/trade/StepBuy'
import StepSell from '~/components/trade/StepSell'
export default {
  name: 'TradeFlow',
  components: {
    StepBuy,
    StepSell
  },
  data: () => ({
    phase: 1,
  }),
  computed: {
  },
  created() {
  },
  mounted () {
  },
  methods: {
    next () {
      this.phase = this.phase < 3 ? this.phase + 1 : 1
    },
    async xper () {
      // let action = 'ping'
      // let args = []
      // let res = await this.$axios.$post('trade/xper', { action, args })
      // log(res)
      // this.notify(res)
    }
  },
}
</script>
