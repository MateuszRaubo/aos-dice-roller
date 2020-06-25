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
        dense/>
      <v-select
        :items="toHit"
        label="To hit"
        dense/>
      <v-select
        :items="hitMod"
        label="To hit modifier"
        dense/>
      <v-select
        class="wrap"
        :items="hitOn6"
        label="On rolls of 6"
        dense/>
      <v-select
        :items="rerolls"
        label="Rerolls"
        dense/>
      <v-btn
        class="mt-4"
        block>
        Roll
      </v-btn>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: 'Attacks',
  data: () => ({
    toHit: [
      '+2',
      '+3',
      '+4',
      '+5',
      '+6',
      '+7',
    ],
    hitMod: [
      '-3',
      '-2',
      '-1',
      '0',
      '1',
      '2',
      '3',
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
      'No',
      'Hit rolls of 1',
      'Failed hit rolls',
    ],
  }),
};
</script>
<style scoped>
</style>
