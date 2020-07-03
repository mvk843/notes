import Vue from 'vue';
import Vuex from  'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		notes: [],
	},
	mutations: {
		set: (state, {key, value}) => {
			state[key] = value;
		},
		addNote: (state, note) => {
			state.notes.push(note);
		},
		deleteNote: (state, id) => {
			state.notes = state.notes.filter(el => el.id !== id);
		}
	},
	actions: {
		getNotes({commit}) {
			axios.get('/api/notes')
				.then(function(resp) {
					commit('set', {key: 'notes', value: resp.data});
				});
		},
		addNote({commit, dispatch}, fd) {
			return axios.post('/api/add-note', fd, {
				headers: { 'Content-Type': 'multipart/form-data' }
			})
				.then(function(response) {
					console.log(response);
				})
				.then(() => {
					return dispatch('getNotes');
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		deleteNote({commit}, note) {
			return axios.post('api/delete-note', note)
				.then(function(response) {
					console.log(response);
					commit('deleteNote', note.id);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}

});