<template>
  <v-container fluid>
    <v-row>
      <v-breadcrumbs :items="crumbs" divider=">">
        <!--<template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>-->
      </v-breadcrumbs>
    </v-row>
    <v-row>
      <v-col>
        <v-alert type="info" border="left" class="" width="70%">
          This ad's visibility has been set to hidden. You can change that at Edit ad page.
        </v-alert>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col>
              <v-card>
                <v-card-text>
                  <v-row class="subtitle-1">
                    <v-col cols="5">
                      <v-list dense>
                        <v-list-item>Price:</v-list-item>
                        <v-list-item>User:</v-list-item>
                        <v-list-item>Payment method:</v-list-item>
                        <v-list-item>Trade limits:</v-list-item>
                        <v-list-item>Location:</v-list-item>
                      </v-list>
                    </v-col>
                    <v-col cols="7">
                      <v-list dense>
                        <v-list-item><span class="title green--text">0.12 USD</span></v-list-item>
                        <v-list-item>
                          <n-link to="/profile/realSatoshi">realSatoshi (13; 0%)</n-link>
                          <v-icon right color="green" size="20">mdi-circle</v-icon>
                        </v-list-item>
                        <v-list-item>
                          <v-avatar size="24" class="mr-1">
                            <v-icon size="20" color="green">mdi-cash-usd-outline</v-icon>
                          </v-avatar>
                          <n-link to="/buy">Cash App (Square Cash)</n-link>
                        </v-list-item>
                        <v-list-item>10.00 - 20.00 USD</v-list-item>
                        <v-list-item><n-link to="/buy">United States of America</n-link></v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-btn x-large block class="mt-3 primary"><v-icon left>mdi-pencil</v-icon>Edit Ad</v-btn>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title>
                  <v-icon left color="primary">mdi-seal-variant</v-icon>
                  Terms of trade with realSatoshi
                </v-card-title>
                <v-card-text>
                  <v-alert outlined class="pa-6">
                    Buy XMR through Cash App. This trade is for smaller amounts of XMR.
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>
<script>
export default {
  name: 'OfferDetail',
  data: () => ({
    crumbs: [
      {
        text: 'Buy XMR for USD',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'United States of America',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Cash App (Square Cash)',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Buy Monero using Cash App (Square Cash) with US Dollar (USD)',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
  methods: {
  }
};
</script>

<style lang="stylus">
.v-breadcrumbs li
  a
    color #ffffff80
    text-decoration underline
  .v-breadcrumbs__item--disabled
    text-decoration none
</style>
