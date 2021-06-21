let interacao = require('readline-sync');
let valor;
let Q = [];
let contador = 0;
let maior = 0;
let posicao;

while (contador < 20) {
    valor = interacao.questionFloat('Informe um numero positivo: ');
    if (valor < 0 ) {
        valor = interacao.questionFloat('Por gentileza, informe um numero POSITIVO: ');
    }else {
        Q.push(valor);
    }
    contador++;
}

contador = 0;
while (contador < Q.length) {
    if (Q[contador] > maior) {
        maior = Q[contador];
        posicao = contador;
    }
    contador++;
}

console.log(`O maior valor do vetor e ${maior} e sua posicao e ${posicao}`);
