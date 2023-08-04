import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    joke: null
  },

  mutations: {
    setCategories: (state, payload) => state.categories = payload,
    setJoke: (state, payload) => state.joke = payload
  },

  getters: {
    categories: (s) => s.categories,
    joke: (s) => s.joke
  },

  actions: {
    async getCategories({ commit }) {
      try {
        const { data } = await this.$axios.get('/jokes/categories')
        commit('setCategories', data)
      } catch (e) {
        console.log(e)
      }
    },

    async getJoke({ commit }, params = {}) {
      try {
        const { data } = await this.$axios.get('/jokes/random', { params })
        commit('setJoke', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
