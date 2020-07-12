const mutations = {
  setHits(state, payload) {
    state.hits = payload;
  },
  setWounds(state, payload) {
    state.wounds = payload;
  },
  setMortalWounds(state, payload) {
    state.mortalWounds = payload;
  },
  setDamageAsWounds(state, payload) {
    state.weaponDamage = payload;
  },
};

export default mutations;
