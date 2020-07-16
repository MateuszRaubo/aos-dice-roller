<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center">
      <hits
        :toHitOptionsProp="toHitOptions"
        :hitModOptionsProp="hitModOptions"
        :hitOn6Prop="hitOn6"
        :rerollsOptionsProp="rerollsOptions"
        ref="hits"/>
        <v-col
          cols="10">
          <v-btn
            block
            @click="roll">
            Roll Dices
          </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Hits from '@/components/Hits.vue';

export default {
  name: 'Roller',
  components: { Hits },
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
    roll() {
      this.$refs.hits.rollDices();
    },
  },
  created() {
    this.initData();
  },
};
</script>
