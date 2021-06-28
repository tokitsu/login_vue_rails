import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/router.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoBool: false,
    signedIn: '',
  },
  mutations: {
    fetchSignedIn(state) {
      state.signedIn = !!localStorage.signedIn
    },
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books').then((res) => {
        for(var i = 0; i < res.data.books.length; i++) {
          state.books.push(res.data.books[i]);
        }
      }, (error) => {
        console.log(error);
      });
    },
    setBookInfo(state, { id }){
      axios.get(`api/books/${id}.json`).then(res => {
        state.bookInfo = res.data;
        state.bookInfoBool = true;
      });
    },
    deleteBook(state, { id }){
      axios.delete(`api/books/${id}.json`).then(res => {
        state.bookInfo = '';
        state.bookInfoBool = false;
      })
    }
  },
  actions: {
    // ログイン時等において，[$store.dispatch('doFetchSignedIn')]で次のメソッドを呼び出し，[signedIn]を更新する。
    doFetchSignedIn({ commit }) {
      commit('fetchSignedIn')
    }
  }
})
