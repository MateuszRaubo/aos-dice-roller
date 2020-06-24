<template>
  <v-col cols="10">
    <v-switch
      v-model="darkTheme"
      label="Dark theme"></v-switch>
  </v-col>
</template>
<script>
export default {
  name: 'Settings',
  data: () => ({
    darkTheme: true,
  }),
};
</script>
<style scoped>
</style>
