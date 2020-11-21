<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-3">Notifications</div>
            <v-switch
              label="Enable web notifications"
              hint="You will get external notifications outside the browser window"
              persistent-hint
              color="green"
            ></v-switch>
            <div class="text-h5 mt-6">Email Notifications</div>
            <v-switch
              label="Disable sensitive information from email notifications"
              hint="The emails will just ask you to log in to the site, where the actual notifications will be"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send email notifications for new trade contacts"
              hint="Send email notifications for new contact requests"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send email notifications for new online payments"
              hint="Send email notifications for new online payments in your trades"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send email notifications for online escrow released"
              hint="Send email notifications from new online escrow releases"
              persistent-hint
              color="green"
            ></v-switch>

            <div class="text-h5 mt-6 mb-3">Telegram Notifications</div>
        
            <v-alert type="info" border="left" text icon="mdi-information-outline" class="pa-7">
              <n-link to="/guides/telegram">How do I turn on LocalCrypto Telegram mobile notifications?</n-link>
            </v-alert>
        
            <v-text-field
              label="Telegram Notifications ID"
              hint="Telegram Notifications ID given to you by the LocalMonero Notification Bot"
              persistent-hint
              append-outer-icon="mdi-content-save"
              @click:append-outer="saveTelegramId"
            ></v-text-field>

            <v-switch
              label="Send Telegram notifications for new trade requests"
              hint="Send Telegram notifications for new trade requests"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send Telegram notifications for new online payments"
              hint="Send Telegram notifications for new online payments in your trades"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send Telegram notifications for online escrow release"
              hint="Send Telegram notifications for online escrow release"
              persistent-hint
              color="green"
            ></v-switch>
            <v-switch
              label="Send Telegram notifications for new chat messages in trades"
              hint="Send Telegram notifications for new chat messages in trades"
              persistent-hint
              color="green"
            ></v-switch>
          </v-col>  
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountNotifications',
  data: () => ({
  }),
  methods: {
    async saveTelegramId () {
      this.notify('Telegram ID Saved')
    },
  },
}
</script>
