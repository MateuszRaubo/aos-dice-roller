<template>
  <v-container fluid>
    <v-row
        align="center"
        justify="center">
      <Hits
          :toHitOptionsProp="toHitOptions"
          :hitModOptionsProp="hitModOptions"
          :hitOn6Prop="hitOn6"
          :rerollsOptionsProp="hitRerollsOptions"
          ref="hits"/>
      <Wounds
          :toWoundOptionsProp="toWoundOptions"
          :woundModOptionsProp="woundModOptions"
          :woundOn6OptionsProp="woundOn6Options"
          :woundRerollOptionsProp="woundRerollOptions"
          :rendOptionsProp="rendOptions"
          :weaponDamageProp="weaponDamageOptions"
          ref="wounds"/>
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
import { mapState } from 'vuex';
import Hits from '@/components/Hits.vue';
import Wounds from '@/components/Wounds.vue';

export default {
  name: 'Roller',
  components: {
    Hits,
    Wounds,
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'toHitOptions',
      'hitModOptions',
      'hitOn6',
      'hitRerollsOptions',
      'toWoundOptions',
      'woundModOptions',
      'woundOn6Options',
      'woundRerollOptions',
      'rendOptions',
      'weaponDamageOptions',
    ]),
  },
  methods: {
    roll() {
      console.log('roll start');
      this.$refs.hits.rollDices();
      console.log('roll end');
    },
  },
};
</script>
