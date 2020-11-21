<template>
  <div>
    <template v-if="phase < 3">
      <v-stepper v-model="phase" vertical>

        <v-stepper-step :complete="phase > 1" step="1">Waiting for the buyer to pay</v-stepper-step>
        <v-stepper-content step="1">
          <v-card>
            <v-card-text>
              <ul>
                <li class="subtitle-1">Amount the buyer needs to pay: <b>10.00 USD</b></li>
                <li>The buyer has not yet marked the payment complete and has 59 minutes to make the payment before you are able to cancel the trade. When you receive the payment, release the escrow.</li>
                <li>Never release your coins until you are 100% sure you have received the money. Scammers will try to <b>trick you into releasing coins early.</b></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="" color="primary"><v-icon left>mdi-check</v-icon>Release XMR</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="phase > 2" step="2">Confirm payment</v-stepper-step>
        <v-stepper-content step="2">
          <v-card>
            <v-card-text>
              <ul>
                <li>The buyer has marked the payment complete. Make sure you've received the money and release the coins to the buyer.</li>
                <li>Never release your coins until you are 100% sure you have received the money. Scammers will try to <b>trick you into releasing coins early.</b></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="" color="green"><v-icon left>mdi-check</v-icon>Release XMR</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card>
            <v-card-text>
              <v-container fluid class="text-center">
                <v-row>
                  <v-col>
                    <div class="text-h5">Escrowed</div>
                    <div class="body-2">Only the buyer and LocalCrypto staff can</div>
                    <div class="body-2">cancel the transaction.</div>
                  </v-col>
                  <v-col>
                    <v-icon color="green" size="70">mdi-lock</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              If there is a disagreement regarding the trade, you can start a dispute. After that, LocalCrypto support will contact you through this trade's chat.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="" color="primary" outlined><v-icon left>mdi-gavel</v-icon>Start a Dispute</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>

        </v-stepper-content>

        <v-stepper-step :complete="phase > 3" step="3">Trade completed</v-stepper-step>
      </v-stepper>
    </template>
    <template v-else>
      <v-card>
        <v-card-text>
          <v-container fluid class="text-center">
            <v-row>
              <v-col>
                <div class="text-h5">Completed</div>
                <div class="body-2">This trade has been completed</div>
                <div class="body-2">at 2020-08-29 13:27</div>
              </v-col>
              <v-col>
                <v-icon color="green" size="70">mdi-check-circle</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: 'StepSell',
  props: {
    phase: {
      type: Number,
      default: 1
    },
  },
  data: () => ({
  }),
}
</script>
