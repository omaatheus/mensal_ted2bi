"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fila = require("./fila");
var queue = require("./fila");
var alunos = [
    { nome: "João" },
    { nome: "Felipe" },
    { nome: "Maria" },
    { nome: "José" },
    { nome: "Ana" },
    { nome: "Carlos" },
    { nome: "Pedro" },
    { nome: "Paulo" },
    { nome: "Lucas" },
    { nome: "Mariana" },
    { nome: "Juliana" },
    { nome: "Fernanda" },
    { nome: "Rafael" },
    { nome: "Ricardo" },
    { nome: "Jorge" },
    { nome: "Miguel" },
];
console.log(alunos); //printa o conteúdo da array no terminal
console.log("\n"); // quebra linha
// Cada fileira pode ter NO MÁXIMO 5 alunos
var fileiras = [
    {
        numero: 0,
        alunos: fila.create(5) //criando filas com capacidade MÁXIMA de 5 por fileira
    },
    {
        numero: 1,
        alunos: fila.create(5)
    },
    {
        numero: 2,
        alunos: fila.create(5)
    },
];
function inserirFileira(aluno) {
    var assentos = ['0', '1', '2', '3', '4']; // define um array com as posições disponíveis nas fileiras
    var posicao = assentos[Math.floor(Math.random() * assentos.length)]; // Gera uma posição aleatória
    aluno.nome = posicao;
    return aluno;
}
// Inserindo/populando 5 alunos por fileira
function DistribucaoAlunos(aluno) {
    for (var i = 0; i < aluno.length; i++) {
        //coloca o aluno na fileira e recebe outra fileira
        var alunoFileira = inserirFileira(aluno[i]);
        if (alunoFileira.numero === 0) {
            queue.enqueue(aluno, fileiras[0].numero); //inserindo na fileira
            queue.dequeue(aluno); // dequeue retira da fileira
            return;
        }
        if (alunoFileira.numero === 1) {
            queue.enqueue(aluno, fileiras[1].numero); //inserindo na fileira
            queue.dequeue(aluno); // dequeue retira da fileira
            return;
        }
        if (alunoFileira.numero === 2) {
            queue.enqueue(aluno, fileiras[2].numero); //inserindo na fileira
            queue.dequeue(aluno); // dequeue retira da fileira
            return;
        }
    }
}
DistribucaoAlunos(alunos);
// Função main
function main() {
    // Função que chama retira todos alunos da fileira e "da tchau" para eles
    for (var i = 0; i < fileiras.length; i++) {
        var salaEscola = {
            numero: i,
            alunos: queue.peek(fileiras)
        };
        console.log("fileira ".concat(salaEscola.numero + 1));
        for (var j = 0; j < fileiras.length; j++) {
            if (queue.isEmpty(salaEscola.alunos)) {
                return;
            }
            var kid = queue.dequeue(salaEscola.alunos); //retira o próximo aluno da fila
            console.log("".concat(kid.nome, " se levantou ").concat(j + 1));
            console.log("Ate a Proxima Aula, ".concat(kid.nome, " "));
            console.log("____________________________");
        }
        console.log("\n");
    }
}
main();
