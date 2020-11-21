<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left title">Seller</th>
          <th class="text-left title">Payment method</th>
          <th class="text-left title">Price/ARRR</th>
          <th class="text-left title">Limits</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="item in trades" 
          :key="item.key" 
          @click="$router.push('/offer/2')"
          style="cursor: pointer"
          >
          <td @click.stop="goosen"><n-link to="/profile/DudeWheresMyCoin">{{ item.seller }}</n-link></td>
          <td>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ item.method.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.method.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </td>
          <td class="title green--text">{{ item.price }}</td>
          <td>
            <v-row justify="end" align="center">
              <v-col class="subtitle-1">
                {{ item.limits }}
              </v-col>
              <v-col class="text-right">
                <v-btn color="primary">Buy</v-btn>
              </v-col>
            </v-row>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data: () => ({
      trade: {
        seller: 'dudewheresmycoin (67; 100%)',
        method: { title: 'Apple Pay', subtitle: 'Pay with Apple Pay!' },
        price: '0.12 USD',
        limits: '100-528.58 USD',
      },
      number: 3,
    }),
    computed: {
      trades () {
        let arr = []
        for (let ii = 0; ii < this.number; ii++) {
          let trade = this.trade
          trade.id = ii + 1
          arr.push(trade)
        }
        return arr
        // return [this.trade]
        // let arr = []
        // arr.push(trade)
        // return arr
      }
    },
    methods: {
      goosen () {
        // this.notify('Goosen')
      }
    }
  }
</script>
