import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        ispaid:'',
        isadmin: '',
        islogged: '',
        identity:'',
        firstName:''
    },
    mutations: {
      setispaid(state,pay)
      {
          state.ispaid = pay;
      },
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