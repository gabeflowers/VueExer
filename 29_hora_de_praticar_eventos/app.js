new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("estou alertando voce")
        },
        alterarValor(e){
            this.valor = e.target.value;
        }
    }
})