<template>
  <v-container fluid class="">
    <v-row no-gutters>
      <v-col>
        <v-card>
          <v-tabs v-model="tab" icons-and-text show-arrows fixed-tabs>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#settings">User Settings<v-icon>mdi-cog</v-icon></v-tab>
            <v-tab href="#notifications">Notifications<v-icon>mdi-message-alert</v-icon></v-tab>
            <v-tab href="#change-email">Change Email<v-icon>mdi-email</v-icon></v-tab>
            <v-tab href="#change-password">Change Password<v-icon>mdi-lock</v-icon></v-tab>
            <v-tab href="#2fa">Two-Factor Authentication<v-icon>mdi-cellphone-lock</v-icon></v-tab>
            <v-tab href="#api-key">API Key<v-icon>mdi-api</v-icon></v-tab>
          </v-tabs>
          <v-divider></v-divider>
          <v-tabs-items v-model="tab">
            <v-tab-item value="settings"><account-settings /></v-tab-item>
            <v-tab-item value="notifications"><account-notifications /></v-tab-item>
            <v-tab-item value="change-email"><account-email /></v-tab-item>
            <v-tab-item value="change-password"><account-password /></v-tab-item>
            <v-tab-item value="2fa"><account-two-factor /></v-tab-item>
            <v-tab-item value="api-key"><account-api /></v-tab-item>
          </v-tabs-items>
          <!-- <v-tabs-slider></v-tabs-slider> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AccountSettings from '~/components/account/AccountSettings'
import AccountNotifications from '~/components/account/AccountNotifications'
import AccountEmail from '~/components/account/AccountEmail'
import AccountPassword from '~/components/account/AccountPassword'
import AccountTwoFactor from '~/components/account/AccountTwoFactor'
import AccountApi from '~/components/account/AccountApi'
export default {
  name: 'AccountSettingsPage',
  components: {
    AccountSettings,
    AccountNotifications,
    AccountEmail,
    AccountPassword,
    AccountTwoFactor,
    AccountApi,
  },
  data: () => ({
    tab: null,
  }),
  computed: {
  },
  created() {
  },
  mounted () {
  },
  methods: {
  },
}
</script>
