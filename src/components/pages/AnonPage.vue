<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card height="230" color="black">
          <v-card-text class="fill-height d-flex flex-column justify-center align-center">
            <div class="text-h1 mb-5 white--text">Ahoy!</div>
            <div class="text-h4">Chat for Pirates & Scallywags</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="230" color="teal darken-4" hover to="/user/sign-up">
          <v-card-text class="fill-height d-flex justify-center align-center">
            <div class="text-h3">Register</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="230" color="grey darken-4" hover to="/user/sign-in">
          <v-card-text class="fill-height d-flex justify-center align-center">
            <div class="text-h3">Login</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
