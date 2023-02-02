import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contador', function (value) {
	return value.length;
})

new Vue({
	render: h => h(App),
}).$mount('#app')
