import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'
import Vuex from 'vuex'

Vuex.use(Vuex)

const store = new Vuex.store({
  state: {
    users: []
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
      .then((response) => {
        commit('SET_USERS_TO_VUEX', response.data)
      })
    },
    mutations: {
      SET_USERS_TO_VUEX: (state, users) => {
        state.users = users
      }
    },
    getters: {
USERS(state) {
  return state.users;
}
    }
  }
})