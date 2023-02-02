new Vue({
    el: '#desafio',
    data: {
        nome: 'Ana',
        idade: 23,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        gerarValor(){
            return parseInt(Math.random()*100)
        }
    }
})