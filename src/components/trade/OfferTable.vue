<template>
  <v-data-table
    :headers="headers"
    :items="offers"
    :items-per-page="10"
    @click:row="rowClick"
    :item-class="() => 'clickable'"
    >
    <template v-slot:item.user="{ item }">
      <n-link :to="`/profile/${item.user}`">
        {{user(item).name}} ({{user(item).trades | number}} | {{user(item).rating | percent}})
      </n-link>
    </template>
    <template v-slot:item.type="{ item }">
      {{types[item.type].title}}
    </template>
    <template v-slot:item.price="{ item }">
      {{item.price | dollars}}
    </template>
    <template v-slot:item.max="{ item }">
      {{item.min}} - {{item.max}} USD
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn small color="success">
        <v-icon left>mdi-cash</v-icon>
        Buy
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    headers: [
      { text: 'Seller', value: 'user' },
      { text: 'Payment Method', value: 'type' },
      { text: 'Price/ARRR', value: 'price' },
      { text: 'Limits', value: 'max' },
      { text: '', value: 'actions', sortable: false },
    ],
    types: process.env.types,
  }),
  computed: {
    ...mapGetters({
      users: 'data/accounts',
      offers: 'data/offers',
    }),
  },
  methods: {
    rowClick (item) {
      this.$router.push(`/trade/${item.tid}`)
    },
    user (item) {
      return this.users[item.user]
    },
  },
}
</script>
