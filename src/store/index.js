import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: ['asdsadsa'],
    buy: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    BUY(state) {
      return state.buy;
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      }).then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
    GET_BUY({ commit }, products) {
      commit('SET_BUY', products);
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_BUY: (state, cart) => {
      state.buy = cart;
      state.cart = [];
    },
  },
  modules: {},
});
