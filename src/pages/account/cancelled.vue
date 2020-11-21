<template>
  <v-container fluid class="px-6">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Cancelled Trades</v-card-title>
          <v-divider></v-divider>
          <offer-table></offer-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OfferTable from '~/components/trade/OfferTable'
export default {
  name: 'AccountCancelledTradesPage',
  components: {
    OfferTable,
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  asyncData ({ env }) {
  }
}
</script>
