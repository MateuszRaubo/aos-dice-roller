<template>
  <v-col cols="10">
    <h3 class="subtitle-1">Attacks</h3>
    <v-col cols="12"
           sm="6"
           md="3"
           class="px-0">
      <v-text-field
        label="Number of attacks"
        type="number"
        v-model="attacksNumber"
        dense/>
      <v-select
        :items="toHitOptions"
        label="To hit"
        v-model="toHitValue"
        dense/>
      <v-select
        :items="hitModOptions"
        label="To hit modifier"
        v-model="hitModValue"
        dense/>
      <v-select
        class="wrap"
        :items="hitOn6"
        label="On rolls of 6"
        dense/>
      <v-select
        :items="rerollsOptions"
        label="Rerolls"
        v-model="rerollsValue"
        dense/>
      <v-btn
        class="mt-4"
        block
        @click="rollDices">
        Roll
      </v-btn>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: 'Attacks',
  data: () => ({
    toHitOptions: [],
    hitModOptions: [],
    hitOn6: [],
    rerollsOptions: [],
    attacksNumber: null,
    toHitValue: null,
    hitModValue: null,
    toHitAfterMod: null,
    rerollsValue: null,
  }),
  methods: {
    rollDices() {
      this.setToHitAfterMod();
      this.rollToHit();
    },
    setToHitAfterMod() {
      let toHit = 0;
      if (this.hitModValue === null) {
        this.toHitAfterMod = this.toHitValue;
        return;
      }
      // eslint-disable-next-line no-eval
      toHit = eval(this.toHitValue + this.hitModValue[0] + this.hitModValue[1]);
      if (toHit <= 1) {
        this.toHitAfterMod = 2;
        return;
      }
      if (toHit >= 7) {
        this.toHitAfterMod = 7;
        return;
      }
      this.toHitAfterMod = toHit;
    },
    rollToHit() {
      for (let i = 1; i <= this.attacksNumber; i += 1) {
        let result = this.rollDice();
        // reroll missed or 1
        if ((result < this.toHitAfterMod && this.rerollsValue === 'miss')
            || (result === 1 && this.rerollsValue === '1')) {
          result = this.rollDice();
        }
      }
    },
    // D6 dice
    rollDice() {
      return Math.ceil(Math.random() * 6);
    },
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
<style scoped>
</style>
