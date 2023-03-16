<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button class="mb-2" variant="primary" @click="exibir = !exibir"> Mostrar Mensagem </b-button>
		<!-- <transition name="fade" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->
		<hr>
		<b-select v-model="tipoAnimacao">
			<option value="fade">fade</option>
			<option value="slide">slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

		<hr>

		<button @click="exibir2= !exibir2">Mostrar</button>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibir2"></div>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem legal',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
		}
	},
	methods: {
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to  {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active  {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); opacity: 0;}
	to { transform: translateY(0); }
}
@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); opacity: 0;}
}

.slide-enter-active {
	animation: slide-in 2s ease;
}
.slide-leave-active {
	animation: slide-out 2s ease;
}
.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: red;
}
</style>
