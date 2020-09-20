<template>
  <v-col cols="10">
    <h3
        class="subtitle-1 mb-4">
      Wound
    </h3>
    <v-select
        :items="toWoundOptionsProp"
        label="To wound"
        v-model="toWoundValue"
        dense/>
    <v-select
        :items="woundModOptionsProp"
        label="To wound modifier"
        v-model="toWoundValue"
        dense/>
    <v-select
        :items="woundOn6OptionsProp"
        label="On wound roll of 6"
        v-model="woundOn6Value"
        dense/>
    <v-select
        :items="woundRerollOptionsProp"
        label="To wound rerolls"
        v-model="woundRerollValue"
        dense/>
    <v-select
        :items="rendOptionsProp"
        label="Rend"
        v-model="rendValue"
        dense/>
    <v-select
        :items="weaponDamageProp"
        label="Weapon Damage"
        v-model="rendValue"
        dense/>
  </v-col>
</template>
<script>
export default {
  name: 'Wounds',
  props: {
    toWoundOptionsProp: Array,
    woundModOptionsProp: Array,
    woundOn6OptionsProp: Array,
    woundRerollOptionsProp: Array,
    rendOptionsProp: Array,
    weaponDamageProp: Array,
  },
  data: () => ({
    toWoundValue: null,
    woundModValue: null,
    woundOn6Value: null,
    woundRerollValue: null,
    rendValue: null,
    weaponDamage: null,
  }),
  computed: {
    property() {
      return true;
    },
  },
};
</script>
