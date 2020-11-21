<template>
    <!-- show-arrows-on-hover -->
  <v-carousel 
    :show-arrows="false"
    hide-delimiter-background
    height="300"
    :dark="$shade"
    :light="!$shade"
    cycle
    continuous
    interval="5000"
    >
    <v-carousel-item v-for="(slide, ii) in slides" :key="ii">
      <v-sheet height="100%" width="100%">
        <v-row class="fill-height">
          <v-card width="100%">
            <v-card-title style="font-size: 1.7em">{{slide.title}}</v-card-title>
            <v-card-subtitle>{{slide.date}}</v-card-subtitle>
            <v-card-text v-html="slide.body"></v-card-text>
          </v-card>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'NewsGallery',
  data: () => ({
    slides: [
      { title: 'Parlay API Released!', date: '2019-12-20 12:00 UTC',
        body: `We're pleased to announce that we now offer a fully functional API. The API was developed to be very similar to the LocalBitcoins API, and we have very detailed <a href="/about">API docs</a> which clearly outline all the minor differences between our API and the LocalBitcoins API to ensure a quick and easy adaptation of your trading bots. You can get your API key from the new "API key" tab on your <a href="/account/settings">user settings page</a>.` },
      { title: 'We Launched!', date: '2019-12-20 12:00 UTC', body: `More news...` },
      { title: 'We Make Millions!', date: '2019-12-20 12:00 UTC', body: `More news...` },
    ],
  }),
}
</script>
