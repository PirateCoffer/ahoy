<template>
  <v-app-bar app id="app-bar" height="56">
    <v-app-bar-nav-icon @click.stop="$store.commit('SET_LEFT_NAV')" class="hidden-sm-and-up" />
    <v-toolbar-items>
      <v-btn 
        text 
        to="/" 
        class="home-btn title font-weight-regular mr-0 pl-1" 
        :ripple="false" 
        >
        <v-avatar size="40" class="mr-2" v-if="$mobile">
          <v-img :src="repopath + '/media/images/logo.png'">
          </v-img>
        </v-avatar>
        {{$store.state.title}}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <!-- auth -->
    <notify-menu></notify-menu>
    <v-toolbar-items class="ml-2 mr-0" v-if="$auth">
      <v-btn x-large text tile class="balance-amount px-2" to="/account/wallet" active-class="no-bg">
        <v-avatar color="black" size="30" class="mr-3">
          <img :src="repopath + '/media/images/pirate-logo.png'">
        </v-avatar>
        <span>{{$store.state.wallet.balance.pirate | number}}</span><span v-if="!$mobile">&nbsp;ARRR</span>
      </v-btn>
    </v-toolbar-items>
    <v-btn large icon class="mx-1" @click="$store.commit('SET_RIGHT_NAV')" v-if="$auth">
      <v-avatar size="36">
        <img :src="repopath + '/media/images/avatar.png'" alt="Davy Jones">
      </v-avatar>
    </v-btn>
    <!-- anon -->
    <v-toolbar-items v-if="!$auth">
      <v-btn color="primary" text to="/user/sign-in">Sign In</v-btn>
      <v-btn color="success" text to="/user/sign-up">Sign Up</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import userMixins from '~/mixins/userMixins'
import NotifyMenu from '~/components/trade/NotifyMenu'
export default {
  name: 'AppBar',
  components: {
    NotifyMenu,
  },
  mixins: [ userMixins ],
}
</script>
