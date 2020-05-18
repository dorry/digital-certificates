import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        islogged: '',
        isadmin: '',
        identity:'',
        firstName:'',
        fullName : ''
    },
    mutations: {
        setislogged(state,logged)
        {
            state.islogged = logged;
        },
        setadmin(state,admin)
        {
            state.isadmin = admin;
        },
        saveUserLogged (state, loggedUser) {
        state.identity = loggedUser
      },
      saveUsername (state, Name) {
        state.firstName = Name
     },
      savename (state, Name) {
      state.fullName = Name
  }
},
    actions: {
      saveUserLogged (context, loggedUser) {
        context.commit('saveUserLogged', loggedUser)
      },
      saveUsername (context, Name) {
        context.commit('saveUsername', Name)
      }
    },
    plugins: [createPersistedState()]

});
