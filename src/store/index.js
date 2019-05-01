import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


function loadLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('cats'));
  } catch(e) {
    localStorage.removeItem('cats');
    return [];
  }
}

export default new Vuex.Store({
	state: {
      name: '',
	  password:'',
	  cats: loadLocalStorage(),
    },
	getters:{
      getCats: state => state.cats,
    },
	actions: {
      addCat(context, data) {
        context.commit('ADD_CAT', data);
        context.commit('SAVE_CATS');
      },
      removeCat(context, data) {
        context.commit('REMOVE_CAT', data);
        context.commit('SAVE_CATS');
      },
    },

    mutations: {
	ADD_CAT(state, data) {
        state.cats.push(data);
        console.log(state.cats);
	},
	SAVE_CATS(state) {
	  localStorage.setItem('cats', JSON.stringify(state.cats));
      console.log(state.cats);
	},
	REMOVE_CAT(state, index) {
	  state.cats.splice(index, 1);
	},

	// persistName(state, payload) {
  //       state.name = payload;
  //       console.log(payload)
  //       localStorage.setItem('name', state.name);
	// },
	// persistPassword(state, payload) {
	//   state.password = payload;
	//   console.log(payload)
	//   localStorage.setItem('password', state.password);
  // },
},
});
