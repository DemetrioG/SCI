let interacao = require('readline-sync');
let contador = 1;
let media;
let total = [];
let acima = 0;
let nota;
let soma = 0;

while (contador <= 20) {
    nota = interacao.questionFloat(`Ola aluno ${contador}, informe sua nota: `);
    total.push(nota);
    contador++;
}

contador = 0;
while (contador < total.length) {
    soma += total[contador];
    contador++;
}

media = (soma/20);

contador = 0;
while (contador < total.length) {
    if (total[contador] > media) {
        acima++;
        
    }
    contador++;
}

console.log(`A media da turma foi ${media}`);
console.log(`${acima} alunos tiveram a nota acima da media`);

