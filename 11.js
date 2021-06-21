let interacao = require('readline-sync');
let total = interacao.questionInt('Informe o valor total da compra: ');
let pago = interacao.questionInt('Informe o valor pago: ');
let saldo = total - pago;
let duzentos = 0;
let cem = 0;
let cinquenta = 0;
let vinte = 0;
let dez = 0;
let cinco = 0;
let dois = 0;

while (saldo > 200) {
    duzentos++;
    saldo = saldo - 200;
}
while (saldo > 100) {
    cem++;
    saldo = saldo - 100;
}
while (saldo > 50) {
    cinquenta++;
    saldo = saldo - 50;
}
while (saldo > 20) {
    vinte++;
    saldo = saldo - 20;
}
while (saldo > 10) {
    dez++;
    saldo = saldo - 10;
}
while (saldo > 5) {
    cinco++;
    saldo = saldo - 5;
}
while (saldo > 2) {
    dois++;
    saldo = saldo - 2;
}

saldo = total - pago;
console.log(`Voce recebera ${saldo} reais de troco, sendo: `);
console.log(`${duzentos} notas de duzentos`);
console.log(`${cem} notas de cem`);
console.log(`${cinquenta} notas de cinquenta`);
console.log(`${vinte} notas de vinte`);
console.log(`${dez} notas de dez`);
console.log(`${cinco} notas de cinco`);
console.log(`${dois} notas de dois`);