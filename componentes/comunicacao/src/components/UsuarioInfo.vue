<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">reinicializar nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            typeof: 'string',
            required: true,
            default: 'anonimo'
            // default: function() {
            //     return Array(10).fill(0).join(',');
            // }
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            this.nome = "pedro"
            this.$emit('nomeMudou', this.nome);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
