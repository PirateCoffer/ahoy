<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-3">Change/verify email</div>
            <div class="text-h5 mb-3 mt-4">
              <span>Current email: {{currentEmail}}</span>
              <v-chip class="ma-2" label color="green">Verified</v-chip>
            </div>
            <v-text-field
              label="New email"
              hint="A verification letter will be sent to verify your email"
              persistent-hint
            ></v-text-field>
            <v-text-field
              label="Password"
              hint="8-72 characters"
              persistent-hint
              :type="showPw ? 'text' : 'password'"
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
            ></v-text-field>
            <v-btn @click="changeEmail" color="primary" class="mt-5">Change Email</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountEmail',
  data: () => ({
    currentEmail: 'info@example.com',
    showPw: false,
  }),
  methods: {
    async changeEmail () {
      this.notify('Email Changed')
    },
  },
}
</script>
