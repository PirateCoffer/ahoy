<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ username }}
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-on="on" v-if="active" right color="green">mdi-checkbox-blank-circle</v-icon>
              <v-icon v-on="on" v-else right color="grey">mdi-checkbox-blank-circle-outline</v-icon>
            </template>
            <span>Last seen {{lastSeen}}</span>
          </v-tooltip>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <v-list-item>
              <v-list-item-icon><v-icon v-text="'mdi-information'"/></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="title">Information</v-list-item-title>
                <v-list-item-subtitle>Updated once an hour</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="7">
                <v-list dense>
                  <v-list-item>Number of trades:</v-list-item>
                  <v-list-item>Number of trading partners:</v-list-item>
                  <v-list-item>Feedback score:</v-list-item>
                  <v-list-item>Account created:</v-list-item>
                  <v-list-item>Number Typical escrow release time:</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="5">
                <v-list dense>
                  <v-list-item>87</v-list-item>
                  <v-list-item>20</v-list-item>
                  <v-list-item>100%</v-list-item>
                  <v-list-item>4 months ago</v-list-item>
                  <v-list-item>39</v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <div class="title">You have traded with this partner</div>
                <div v-if="trusted" class="success--text title">
                  You are trusting {{username}}
                </div>
                <div v-else class="warning--text title">
                  You do not trust {{username}}
                </div>
                <div class="green--text body-2">
                  They will be able to respond to ads you have made for trusted users only
                </div>
                <v-btn v-if="trusted" class="mt-3" color="warning" outlined @click="trusted = !trusted">
                  <v-icon left>mdi-star-outline</v-icon>Untrust {{username}}
                </v-btn>
                <v-btn v-else class="mt-3" color="success" @click="trusted = !trusted">
                  <v-icon left>mdi-star</v-icon>Trust {{username}}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-expansion-panels class="mb-4">
          <v-expansion-panel>
            <v-expansion-panel-header class="title">
              Update feedback on {{username}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="d-flex">
                <v-icon class="mr-4">mdi-thumbs-up-down</v-icon>
                <div>
                  Feedback will be visible only if the total trade volume between you and your trading partner is over a 100 USD equivalent.
                </div>
              </div>
              <v-form>
                <v-radio-group v-model="rating">
                  <v-radio label="Trustworthy" class="fb-radio-trustworthy"></v-radio>
                  <v-radio label="Positive" class="fb-radio-positive"></v-radio>
                  <v-radio label="Neutral" class="fb-radio-neutral" color="grey"></v-radio>
                  <v-radio label="Negative" class="fb-radio-negative"></v-radio>
                  <v-radio label="Block user" class="fb-radio-blocked"></v-radio>
                </v-radio-group>
                <v-textarea
                  label="Your feedback message"
                  v-model="feedbackMessage"
                  rows="1"
                  auto-grow
                  :counter="feedbackMaxChar"
                  :maxlength="feedbackMaxChar"
                  persistent-hint
                  :hint="`Optional. Leave a message about ${username} to be displayed alongside feedback on the receiver's profile page. Maximum ${feedbackMaxChar} characters.`"
                ></v-textarea>
              </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card>
          <v-card-title>
            <v-list-item>
              <v-list-item-icon><v-icon v-text="'mdi-thumbs-up-down'"/></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="headline">Feedback</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
          <v-card-text>
            <v-list-item v-for="(item, ii) in feedback" :key="ii">
              <v-list-item-icon>
                <v-icon v-if="item.rating === 'positive'" color="success" v-text="'mdi-thumb-up'"/>
                <v-icon v-else-if="item.rating === 'negative'" color="warning" v-text="'mdi-thumb-down'"/>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{item.review}}</v-list-item-title>
                <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="">
              See more feedback on {{username}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'UserProfile',
  validate ({ params }) {
    // Must be a number
    // return /^\d+$/.test(params.user)
    return true
  },
  data: () => ({
    rating: 1,
    feedback: [
      {
        rating: 'positive', // trustworthy, positive, neutral, negative, block user
        review: 'very fast and easy transaction. start to finish took about 15 minutes. 10/10 rating',
        date: '2020-08-02 19:16'
      },
      { rating: 'positive', review: 'Excellent transaction. Very responsive.', date: '2020-08-02 19:16' },
      { rating: 'negative', review: 'Slow.', date: '2020-08-02 19:16' },
    ],
    feedbackMaxChar: 256,
  }),
  computed: {
    feedbackHint () {
      return `Optional. Leave a message about ${this.username} to be displayed alongside feedback on the receiver's profile page. Maximum ${this.feedbackMaxChar} characters.`
    }
  },
  async asyncData({ params, store, app, error }) {
    // let quote
    // try {
    //   let res = await app.$axios.$post('/quote/get')
    //   if (!res.ok)
    //     throw new Error(res.msg)
    //   quote = res.msg
    // } catch (err) { throw err }
    
    let username = params.user
    let active = true
    let trusted = true
    let lastSeen = 'just now'
    let feedbackMessage = ''
    return { username, active, trusted, lastSeen, feedbackMessage }
  },
}
</script>

<style lang="stylus">
$primary = #0075d9
$success = #00b340
$grey = #9e9e9e
$warning = #ff8600
$error = #ff5252
.fb-radio-trustworthy
  i.v-icon
  .v-label
    color $primary !important
.fb-radio-positive
  i.v-icon
  .v-label
    color $success !important
.fb-radio-neutral
  i.v-icon
  .v-label
    color $grey !important
.fb-radio-negative
  i.v-icon
  .v-label
    color $warning !important
.fb-radio-blocked
  i.v-icon
  .v-label
    color $error !important
</style>
