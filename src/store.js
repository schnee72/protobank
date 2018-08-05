import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isAuthenticated: false
};

const mutations = {
  authenticate() {
    state.isAuthenticated = true;
  }
};

const actions = {

};

const getters = {

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
});

