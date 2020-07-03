import Vue from 'vue';
import store from './store.js';
import App from './App.vue';

export default function (window, document, $) {

	new Vue({
		el: '#app',
		store,
		render: h => h(App)
	});

}