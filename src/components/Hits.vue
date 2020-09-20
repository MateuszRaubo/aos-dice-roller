<template>
  <v-col cols="10">
    <h3
      class="subtitle-1 mb-4">
      Attack
    </h3>
    <v-text-field
      label="Number of attacks"
      type="number"
      v-model="attacksNumber"
      dense/>
    <v-select
      :items="toHitOptionsProp"
      label="To hit"
      v-model="toHitValue"
      dense/>
    <v-select
      :items="hitModOptionsProp"
      label="To hit modifier"
      v-model="hitModValue"
      dense/>
    <v-select
      class="wrap"
      :items="hitOn6Prop"
      label="On hit rolls of 6"
      v-model="hitOn6Value"
      dense/>
    <v-select
      :items="rerollsOptionsProp"
      label="To hit rerolls"
      v-model="rerollsValue"
      dense/>
  </v-col>
</template>
<script>
export default {
  name: 'Hits',
  props: {
    toHitOptionsProp: Array,
    hitModOptionsProp: Array,
    hitOn6Prop: Array,
    rerollsOptionsProp: Array,
  },
  data: () => ({
    attacksNumber: null,
    toHitValue: null,
    hitModValue: null,
    toHitAfterMod: null,
    hitOn6Value: null,
    rerollsValue: null,
    hitsQuantity: 0,
    woundsQuantity: 0,
    mortalWoundsQuantity: 0,
    damageAsWoundsQuantity: 0,
  }),
  methods: {
    rollDices() {
      this.hitsQuantity = 0;
      this.woundsQuantity = 0;
      this.mortalWoundsQuantity = 0;
      this.damageAsWoundsQuantity = 0;
      this.setToHitAfterMod();
      this.rollToHit();
      this.commitData();
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
        let hit = false;
        // todo: if toHitMod 7
        // todo: check if rerolls are made before hit mods
        // reroll missed or 1
        if ((result < this.toHitAfterMod && this.rerollsValue === 'miss')
            || (result === 1 && this.rerollsValue === '1')) {
          result = this.rollDice();
        }
        if (result >= this.toHitAfterMod) {
          hit = true;
          this.hitsQuantity += 1;
        }
        // hit on 6 function starter based on action chose
        if (result === 6 && hit && this.hitOn6Value != null
          && this.hitOn6Value !== 'nothing') {
          this[this.hitOn6Value]();
        }
      }
    },
    // D6 dice
    rollDice() {
      return Math.ceil(Math.random() * 6);
    },
    commitData() {
      this.$store.commit('setHits', this.hitsQuantity);
      this.$store.commit('setWounds', this.woundsQuantity);
      this.$store.commit('setMortalWounds', this.mortalWoundsQuantity);
      this.$store.commit('setDamageAsWounds', this.damageAsWoundsQuantity);
    },
    // hit on 6 actions
    extraRoll() {
      if (this.rollDice() >= this.toHitAfterMod) {
        this.hitsQuantity += 1;
      }
    },
    extraOneHit() {
      this.hitsQuantity += 1;
    },
    extraTwoHits() {
      this.hitsQuantity += 2;
    },
    autoWound() {
      this.woundsQuantity += 1;
    },
    oneMortal() {
      this.mortalWoundsQuantity += 1;
    },
    damageAsMortal() {
      this.damageAsWoundsQuantity += 1;
    },
  },

};
</script>
