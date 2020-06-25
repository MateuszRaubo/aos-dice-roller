<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center">
      <attacks/>
    </v-row>
  </v-container>
</template>
<script>
import Attacks from '@/components/Attacks.vue';

export default {
  name: 'Roller',
  components: { Attacks },
};
</script>
