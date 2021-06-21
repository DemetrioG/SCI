let interacao = require('readline-sync');
let custo = interacao.questionFloat('Informe o custo do veiculo: ');
let distribuidor = (custo * (28/100));
let impostos = (custo * (45/100));
let resultado = custo + distribuidor + impostos;

console.log(`O valor final do veículo será: ${resultado}`);