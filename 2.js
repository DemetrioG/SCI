let interacao = require('readline-sync');
let anos = interacao.questionInt('Digite sua idade expressa em anos: ');
let meses = interacao.questionInt('Digite sua idade expressa em meses: ');
let dias = interacao.questionInt('Digite sua idade expressa em dias: ');
let resultado = dias + (meses*30) + (anos*365);

console.log(`Sua idade expressa em dias totaliza:  ${resultado} dias`);
