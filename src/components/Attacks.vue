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
        :items="rerolls"
        label="Rerolls"
        v-model="rerollsValue"
        dense/>
      <v-btn
        class="mt-4"
        block
        @click="rollToHit">
        Roll
      </v-btn>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: 'Attacks',
  data: () => ({
    toHitOptions: [
      {
        text: '+2',
        value: '2',
      },
      {
        text: '+3',
        value: '3',
      },
      {
        text: '+4',
        value: '4',
      },
      {
        text: '+5',
        value: '5',
      },
      {
        text: '+6',
        value: '6',
      },
      {
        text: '+7',
        value: '7',
      },
    ],
    hitModOptions: [
      {
        text: '-3',
        value: ['+', '3'],
      },
      {
        text: '-2',
        value: ['+', '2'],
      },
      {
        text: '-1',
        value: ['+', '1'],
      },
      {
        text: '0',
        value: ['+', '0'],
      },
      {
        text: '+1',
        value: ['-', '1'],
      },
      {
        text: '+2',
        value: ['-', '2'],
      },
      {
        text: '+3',
        value: ['-', '3'],
      },
    ],
    hitOn6: [
      {
        text: 'Do nothing',
        value: '0',
      },
      {
        text: '1 extra hit roll',
        value: '1r',
      },
      {
        text: '1 extra hit',
        value: '1e',
      },
      {
        text: '2 extra hits',
        value: '2e',
      },
      {
        text: 'Auto wound',
        value: 'auto',
      },
      {
        text: 'Deal 1 mortal wound instead of normal wound',
        value: '1m',
      },
      {
        text: 'Deal their damage as mortal wound',
        value: 'am',
      },
    ],
    rerolls: [
      {
        text: 'No',
        value: '0',
      },
      {
        text: 'Hit rolls of 1',
        value: '1',
      }, {
        text: 'Failed hit rolls',
        value: 'miss',
      },
    ],
    attacksNumber: null,
    toHitValue: null,
    hitModValue: null,
    toHitAfterMod: null,
    rerollsValue: null,
  }),
  methods: {
    rollToHit() {
      this.setToHitAfterMod();
      for (let i = 1; i <= this.attacksNumber; i += 1) {
        const result = this.rollDice();

        console.log('roll', result);
      }
    },
    setToHitAfterMod() {
      let toHit = 0;
      if (this.hitModValue === null) {
        this.toHitAfterMod = this.hitModValue;
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
    // D6 dice
    rollDice() {
      return Math.ceil(Math.random() * 6);
    },
  },
};
</script>
<style scoped>
</style>
