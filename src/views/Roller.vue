<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center">
      <attacks
        :toHitOptionsProp="toHitOptions"
        :hitModOptionsProp="hitModOptions"
        :hitOn6Prop="hitOn6"
        :rerollsOptionsProp="rerollsOptions"/>
    </v-row>
  </v-container>
</template>
<script>
import Attacks from '@/components/Attacks.vue';

export default {
  name: 'Roller',
  components: { Attacks },
  data: () => ({
    toHitOptions: [],
    hitModOptions: [],
    hitOn6: [],
    rerollsOptions: [],
  }),
  methods: {
    initData() {
      this.toHitOptions = this.$store.state.toHitOptions;
      this.hitModOptions = this.$store.state.hitModOptions;
      this.hitOn6 = this.$store.state.hitOn6;
      this.rerollsOptions = this.$store.state.rerollsOptions;
    },
  },
  created() {
    this.initData();
  },
};
</script>
