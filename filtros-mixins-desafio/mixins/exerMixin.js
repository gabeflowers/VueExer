export default {
    computed: {
        transformedMessage() {
          return this.message.replace(/ /g, ',');
        },
        contadorLength() {
          let palavra = this.conter.split(' ');
          let result = '';
    
          for (let i = 0; i < palavra.length; i++) {
            result += palavra[i] + '(' + palavra[i].length + ')';
          }
    
          return result.trim();
        },
    }
}