let interacao = require('readline-sync');
let valor1 = interacao.questionFloat('Informe o primeiro valor: ');
let valor2 = interacao.questionFloat('Informe o segundo valor: ');
let valor3 = interacao.questionFloat('Informe o ultimo valor: ');
let primeiro;
let segundo;

primeiro = 0;
segundo = 0;

if (valor1 > primeiro) {
    primeiro = valor1;
}
if (valor2 > primeiro) {
    primeiro = valor2;
}
if (valor3 > primeiro) {
    primeiro = valor3;
}
if (valor1 > segundo && valor1 != primeiro) {
    segundo = valor1;
}
if (valor2 > segundo && valor2 != primeiro) {
    segundo = valor2;
}
if (valor3 > segundo && valor3 != primeiro) {
    segundo = valor3;
}

console.log(`A soma dos dois maiores numeros e de ${primeiro + segundo}`);

