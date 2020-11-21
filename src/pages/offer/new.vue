<template>
  <v-container>
    <v-row justify="center" class="pa-0">
      <v-container fluid>
        <v-row>
          <v-col>
            <h1>Create an advertisement</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Advertisement rules and requirements
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <h3>
                    Before creating an advertisement please read through our <n-link to="/terms">Terms of Service</n-link> and <n-link to="/guides">guides</n-link>
                  </h3>
                  <ul>
                    <li>
                      Each completed trade costs advertisers 1% of the total trade amount.
                    </li>
                    <li>
                      You must have at least 0.35 XMR in your LocalMonero wallet for a posted XMR sell ad to be visible.
                    <li>
                      Each user is allowed to create up to 800 ads.
                    </li>
                    <li>
                      Once a trade is opened the price is final, except when there is a clear mistake in the pricing.
                    </li>
                    <li>
                      You are not allowed to buy or sell Monero on behalf of someone else (brokering).
                    </li>
                    <li>
                      You may only use payment accounts that are registered in your own name (no third party payments!).
                    <li>
                      You must provide your payment details in the advertisement or in the trade chat.
                    </li>
                    <li>
                      All communication must happen on LocalMonero.
                    </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn><v-icon left>mdi-file-document-edit-outline</v-icon>Show Full Form</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-stepper v-model="step">
              <v-stepper-header>
                <v-stepper-step :complete="step > 1" step="1">Step 1</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="step > 2" step="2">Step 2</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="step > 3" step="3">Step 3</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="step > 4" step="4">Step 4</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="step > 5" step="5">Step 5</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="6">Step 6</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <div class="text-h4 mb-2">Step 1</div>
                      <div class="text-h5 mb-2">Type of trade</div>
                      <p class="primary--text">I want to...</p>
                      <v-radio-group
                        v-model="tradeType"
                        hint="What kind of trade advertisement do you wish to create? If you wish to sell Monero make sure you have Monero in your LocalCrypto wallet."
                        persistent-hint
                        >
                        <v-radio color="success" label="Sell Monero online"></v-radio>
                        <!-- <v-radio label="Sell Monero online Insufficient balance. Required: 0.35 XMR."></v-radio> -->
                        <v-radio color="success" label="Sell Monero for cash (locally)"></v-radio>
                        <v-radio color="success" label="Buy Monero online"></v-radio>
                        <v-radio color="success" label="Buy Monero for cash (locally)"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="step = 2">Next</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="2" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <div class="text-h4 mb-2">Step 2</div>
                      <v-container fluid>
                        <v-row>
                          <v-col xs="6" sm="5">
                            <div class="text-h5 mb-2">Country</div>
                            <v-select
                              :items="countries"
                              v-model="country"
                              outlined
                              hide-details
                              class="mb-4"
                              >
                              <template v-slot:item="{ item }">
                                <template v-if="item.src">
                                  <v-avatar size="24" class="mr-2">
                                    <img :src="`/media/icons/${item.src}.png`">
                                  </v-avatar>
                                </template>
                                <template v-else>
                                  <v-icon left>{{ item.icon }}</v-icon>
                                </template>
                                <span class="">{{ item.text }}</span>
                              </template>
                              <template v-slot:selection="{ item }">
                                <template v-if="item.src">
                                  <v-avatar size="24" class="mr-2">
                                    <img :src="`/media/icons/${item.src}.png`">
                                  </v-avatar>
                                </template>
                                <template v-else>
                                  <v-icon left>{{ item.icon }}</v-icon>
                                </template>
                                <span class="">{{ item.text }}</span>
                              </template>
                            </v-select>
                            <div class="text-h5 mb-2">Currency</div>
                            <v-select
                              :items="currencies"
                              return-object
                              v-model="currency"
                              outlined
                              hide-details
                              class="mb-4"
                            ></v-select>
                            <div class="text-h5 mb-2">Payment Method</div>
                            <v-select
                              :items="paymentMethods"
                              v-model="paymentMethod"
                              outlined
                              hide-details
                              class="mb-4"
                              >
                              <template v-slot:item="{ item }">
                                <v-icon left>{{ item.icon }}</v-icon> {{ item.text }}
                              </template>
                              <template v-slot:selection="{ item }">
                                <v-icon left>{{ item.icon }}</v-icon> {{ item.text }}
                              </template>
                            </v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn text @click="step = 1">Back</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="step = 3">Next</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="3" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <v-container fluid class="pa-0">
                        <v-row>
                          <v-col sm="6">
                            <div class="text-h4 mb-2">Step 3</div>
                            <div class="text-h5 mb-2">Price</div>
                            <v-radio-group
                              v-model="priceType"
                              label="Price input type"
                              hint="Market price means price on your ad will change as the market price changes. Fixed price means that despite market fluctuations your price will stay the same until you manually change it. Use price formula (advanced) to create more complicated pricing mechanisms."
                              persistent-hint
                              >
                              <v-radio color="success" label="Market price"></v-radio>
                              <v-radio color="success" label="Fixed price"></v-radio>
                              <v-radio color="success" label="Price formula (advanced)"></v-radio>
                            </v-radio-group>
                            <template v-if="priceType === 0">
                              <v-text-field
                                v-model="marginPct"
                                label="Margin in %"
                                hint="Margin is the difference between your price and market price. 0% is the market price. Use positive value to go above market price and negative value to go below market price."
                                persistent-hint
                              ></v-text-field>
                              <div class="text-h4 success--text mt-3">{{markedUpPrice}} {{currency}}</div>
                            </template>
                            <template v-else-if="priceType === 1">
                              <v-text-field
                                class="mt-4"
                                v-model="fixedPrice"
                                label="Fixed price in USD"
                                :hint="`Price for 1 XMR in ${currency}. This price will not change unless you manually change it.`"
                                persistent-hint
                              ></v-text-field>
                            </template>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn text @click="step = 2">Back</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="step = 4">Next</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="4" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <v-container fluid class="pa-0">
                        <v-row>
                          <v-col sm="8">
                            <div class="text-h4 mb-2">Step 4</div>
                            <div class="text-h5 mb-2">Amount</div>
                            <v-text-field
                              v-model="minAmount"
                              :label="`Minimum amount (${currency})`"
                              hint="Optional. Minimum transaction limit in one trade."
                              persistent-hint
                            ></v-text-field>
                            <v-text-field
                              v-model="maxAmount"
                              :label="`Maximum amount (${currency})`"
                              hint="Optional. Maximum transaction limit in one trade."
                              persistent-hint
                            ></v-text-field>
                            <v-text-field
                              v-model="limitAmounts"
                              label="Limit amounts to"
                              hint="Optional. Restrict trading amounts to specific comma-separated integers, for example 20,50,100. In fiat currency (USD/EUR/etc). Handy for coupons, gift cards, etc."
                              persistent-hint
                            ></v-text-field>
                            <v-switch
                              label="Track maximum amount liquidity"
                              hint="This option limits the liquidity of this advertisement to the max. transaction limit. Buyers cannot open and complete trades for more than this amount. Example: With track liquidity turned on and max. transaction limit set to 100 USD when a buyer opens a trade for 20 USD the max. transaction limit is automatically decreased to 80 USD. It returns to 100 USD if the buyer cancels the trade, and stays at 80 USD if the trade is completed."
                              persistent-hint
                            ></v-switch>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn text @click="step = 3">Back</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="step = 5">Next</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="5" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <v-container fluid class="pa-0">
                        <v-row>
                          <v-col sm="8">
                            <div class="text-h4 mb-2">Step 5</div>
                            <div class="text-h5 mb-2">Details</div>
                            <v-text-field
                              v-model="paymentMethodDetail"
                              label="Payment method detail"
                              hint="Optional. Specify some brief detail about the payment method to be shown in the ad list, such as the name of the bank in case the payment method is bank transfer. Maximum 64 characters."
                              persistent-hint
                              counter="64"
                              maxLength="64"
                            ></v-text-field>
                            <v-text-field
                              v-model="tradeTerms"
                              label="Terms of trade"
                              hint="Terms of trade of the advertisement, maximum 4096 characters. You can use markdown to style your ad's terms (images not allowed). How to use markdown?"
                              persistent-hint
                              counter="4096"
                              maxLength="4096"
                            ></v-text-field>
                            <v-text-field
                              v-model="paymentMethodInfo"
                              label="Payment Method Info"
                              counter="4096"
                              maxLength="4096"
                              >
                              <template v-slot:message>
                                Specify payment method info to be shown during trade. Maximum 4096 characters. You can use markdown to style your payment method info (images not allowed). How to use markdown?
                              </template>
                            </v-text-field>
                            <div class="text-h5 mt-5">Restrictions</div>
                            <v-switch
                              label="For trusted users only"
                              hint="Makes this ad accessible only for the users you have marked as trusted"
                              persistent-hint
                            ></v-switch>
                            <v-switch
                              label="For users with verified email only"
                              hint="Useful if you're experiencing problems with ''coinlockers''"
                              persistent-hint
                            ></v-switch>
                            <v-text-field
                              class="mt-5"
                              v-model="minFeedbackScore"
                              label="Minimum feedback score"
                              hint="Optional. Minimum user feedback score required to request a trade from 0 to 100."
                              persistent-hint
                              :rules="[isNum]"
                            ></v-text-field>
                            <v-text-field
                              v-model="firstTimeLimit"
                              label="First time limit (XMR)"
                              hint="Optional. Limit minimum transaction amount for users you don't have previous trades with. Minimum 0."
                              persistent-hint
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn text @click="step = 5">Back</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="step = 6">Next</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="6" class="pa-0">
                  <v-card>
                    <v-card-text>
                      <v-container fluid class="pa-0">
                        <v-row>
                          <v-col sm="8">
                            <div class="text-h4 mb-2">Step 6</div>
                            <div class="text-h5 mb-2">Review your advertisement</div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="4">
                            <div class="font-weight-bold body-1">Ad type:</div>
                            <div class="font-weight-bold body-1">Country:</div>
                            <div class="font-weight-bold body-1">Currency:</div>
                            <div class="font-weight-bold body-1">Payment method:</div>
                            <div class="font-weight-bold body-1">Price input type:</div>
                            <div class="font-weight-bold body-1">Margin:</div>
                            <div class="font-weight-bold body-1">Track maximum amount liquidity:</div>
                            <div class="font-weight-bold body-1">For trusted users only:</div>
                            <div class="font-weight-bold body-1">For users with verified email only:</div>
                            <div class="font-weight-bold body-1">Payment method detail:</div>
                            <div class="font-weight-bold body-1">Terms of trade:</div>
                            <div class="font-weight-bold body-1">Payment method info:</div>
                          </v-col>
                          <v-col cols="8">
                            <div class="body-1">Sell Monero online</div>
                            <div class="body-1">United States of America</div>
                            <div class="body-1">{{currency}}</div>
                            <div class="body-1">National Bank Transfer</div>
                            <div class="body-1">Market Price</div>
                            <div class="body-1">{{marginPct || 0}}%</div>
                            <div class="body-1">no</div>
                            <div class="body-1">no</div>
                            <div class="body-1">no</div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn text @click="step = 5">Back</v-btn>
                      <!-- <v-spacer></v-spacer> -->
                      <!-- <v-btn color="primary" @click="step = 1">Next</v-btn> -->
                    </v-card-actions>
                  </v-card>
                  <v-btn block color="success" class="mt-1" @click="publishAd">
                    <v-icon left>mdi-plus</v-icon>Publish Advertisement
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewAd',
  middleware: 'authenticated',
  components: {
  },
  data: () => ({
    firstTimeLimit: null,
    minFeedbackScore: null,
    paymentMethodDetail: null,
    tradeTerms: null,
    paymentMethodInfo: null,
    minAmount: null,
    maxAmount: null,
    limitAmounts: null,
    tradeType: 0,
    priceType: 0,
    marginPct: null,
    marketPrice: null,
    fixedPrice: null,
    step: 1,
    country: 'USA',
    countries: [
      { text: 'United States of America', value: 'USA', src: 'USA' },
      { text: 'Mexico', value: 'MEX', src: 'MEX' },
    ],
    currency: 'USD',
    currencies: [
      { text: 'USD', value: 'USD' },
    ],
    paymentMethod: 'BANK',
    paymentMethods: [
      { text: 'National Bank Transfer', value: 'BANK', icon: 'mdi-bank' },
      { text: 'Cash by Mail', value: 'MAIL', icon: 'mdi-email-outline' },
    ],
  }),
  computed: {
    markedUpPrice () {
      return (this.marketPrice * (1 + (this.marginPct / 100))).toFixed(2)
    },
  },
  created() {
  },
  async mounted () {
    let price = await this.getPrice(this.currency)
    this.marketPrice = price
    this.fixedPrice = price
  },
  methods: {
    isNum (v) {
      const isNum = num => isFinite(String(num).trim() || NaN)
      if (!v)
        return true
      if (!isNum(v))
        return 'Must be a number'
      if (v < 0)
        return 'Must be a positive number'
      if (v > 100)
        return 'Must be less than 100'
      return true
    },
    async getPrice(currency) {
      return 0.08
    },
    async publishAd() {
      const adId = '11dbc844-a534-4995-9bc8-44a534d9958d'
      this.$router.push(`/offer/${adId}`)
      this.notify('Ad Published!')
    }
  },
}
</script>
