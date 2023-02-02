<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
	<input type="text" placeholder="digite uma frase com espaços" v-model="message">
	<p>{{ transformedMessage }}</p>
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
	<input type="text" placeholder="digite aqui uma palavra" v-model="conter">
	<p>{{ contadorLength }}</p>
    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import Mixin from '../mixins/exerMixin';

export default {
  data: function () {
    return {
      message: '',
	  conter: '',
    }
  },
  mixins: [Mixin],
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
