<template>
  <v-app>
    <v-navigation-drawer
      v-model="sideMenuShow"
      temporary
      app>
      <navigation-list/>
    </v-navigation-drawer>
    <v-app-bar
      app>
      <v-app-bar-nav-icon
        @click.stop="sideMenuShow = !sideMenuShow"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>AoS Dice Roller</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>
      <span class="px-4">&copy; {{ new Date().getFullYear() }} Mateusz Raubo</span>
    </v-footer>
  </v-app>
</template>
<script>
import NavigationList from '@/components/NavigationList.vue';

export default {
  name: 'App',
  components: { NavigationList },
  data: () => ({
    sideMenuShow: false,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
