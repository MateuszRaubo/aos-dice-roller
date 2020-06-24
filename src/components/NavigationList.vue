<template>
  <v-list nav>
    <router-link v-for="(item, idx) in items"
                 :key="idx"
                 :to="item.path"
                 class="v-list-router">
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.text}}</v-list-item-title>
      </v-list-item>
    </router-link>
  </v-list>
</template>
<script>
export default {
  name: 'navigation-list',
  data: () => ({
    items: [
      {
        text: 'Roller',
        icon: 'mdi-dice-multiple',
        path: '/',
      },
      {
        text: 'Settings',
        icon: 'mdi-cogs',
        path: '/settings',
      },
      {
        text: 'About',
        icon: 'mdi-information-outline',
        path: '/about',
      },
    ],
  }),
};
</script>
<style scoped>
  .v-list-router {
    text-decoration: none;
  }
  .v-list-item__title {
    text-align: left;
  }
</style>
