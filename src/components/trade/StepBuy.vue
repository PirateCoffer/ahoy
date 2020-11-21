<template>
  <div>
    <template v-if="phase < 3">
      <v-stepper v-model="phase" vertical>

        <v-stepper-step :complete="phase > 1" step="1">Pay the seller</v-stepper-step>
        <v-stepper-content step="1">
          <v-card color="" class="">
            <v-card-text>
              <ul>
                <li class="subtitle-1">Amount that you need to pay: <b>10.00 USD</b></li>
                <li>Pay according to the payment details shown below. If you have any questions, ask the seller in the chat.</li>
                <li>When you have paid, press the 'I have paid' button. This will prevent the seller from being able to cancel the trade. Don't press this button unless you have actually paid.</li>
                <li>The seller won't be able to cancel the trade for 60 minutes, during which it is safe to pay.</li>
                <li>Made a mistake or want to try another trader? If you have transferred the funds already and want to cancel now, you need to negotiate the return of your payment with your trading partner by yourself. <b>Never cancel unless you are sure you have received your money back.</b></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="" outlined color="primary">
                <v-icon left>mdi-card-bulleted-settings-outline</v-icon>
                Payment Details
                <v-icon right>mdi-chevron-down</v-icon></v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="" color="primary"><v-icon left>mdi-check</v-icon>I Have Paid</v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="" color="error"><v-icon left>mdi-close-circle</v-icon>Cancel Trade</v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="phase > 2" step="2">Waiting for the seller to confirm your payment</v-stepper-step>
        <v-stepper-content step="2">
          <v-card>
            <v-card-text>
              <ul>
                <li>You have market the payment complete at 2020-08-29 13:25</li>
                <li>Once mvinscrypto confirms the payment, the XMR will be released to you.</li>
                <li>Made a mistake or want to try another trader? If you have transferred the funds already and want to cancel now, you need to negotiate the return of your payment with your trading partner by yourself. <b>Never cancel unless you are sure you have received your money back.</b></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="" color="error"><v-icon left>mdi-close-circle</v-icon>Cancel Trade</v-btn>
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
  name: 'StepBuy',
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
