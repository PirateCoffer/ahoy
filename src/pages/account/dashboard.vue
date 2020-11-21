<template>
  <v-container fluid class="px-6">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Title</v-card-title>
          <v-card-text>
            Stuff
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Title</v-card-title>
          <v-card-text>
            Stuff
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Title</v-card-title>
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
  name: 'DashboardPage',
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
