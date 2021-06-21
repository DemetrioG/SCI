let interacao = require('readline-sync');
let macas = interacao.questionInt('Quantas macas voce comprou? ');
let total;

if (macas < 12) {
    total = macas * 1.30;
}else {
    total = macas * 1;
}

console.log(`Valor total da compra: ${total}`);