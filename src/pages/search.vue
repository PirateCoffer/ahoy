<template>
  <v-container fluid class="px-6 pt-1">
    <v-row justify="center" dense>
      <v-col cols="4">
        <v-card>
          <!-- <v-card-text> -->
            <v-list dense class="py-1">
              <v-list-item v-for="item in items" :key="item.id">
                <v-list-item-title class="text-right pr-3 grey--text">{{item.text}}:</v-list-item-title>
                <v-list-item-title>{{item.value}}</v-list-item-title>
              </v-list-item>
            </v-list>
          <!-- </v-card-text> -->
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Results</v-card-title>
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
  name: 'SearchPage',
  components: {
    OfferTable,
  },
  data: () => ({
    items: [
      { key: 'quote', text: 'Quote', value: 'MXN' },
      { key: 'type', text: 'Type', value: 'Zelle' },
      { key: 'locale', text: 'Location', value: 'USA' },
      { key: 'amount', text: 'Amount', value: 100 },
    ],
  }),
  created () {
    const items = this.items
    const query = this.$route.query
    for (const key in query) {
      const index = items.findIndex(item => item.key === key)
      if (index > -1)
        items[index].value = query[key] 
    }
  },
}
</script>
