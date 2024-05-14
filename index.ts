// Array de alunos nas fileiras

import { Aluno, Fileira } from "./types"
import * as fila from "./fila"

const alunos: Aluno[] = [
    {nome: "João"},
    {nome: "Felipe"},
    {nome: "Maria"},
    {nome: "José"},
    {nome: "Ana"},
    {nome: "Carlos"},
    {nome: "Pedro"},
    {nome: "Paulo"},
    {nome: "Lucas"},
    {nome: "Mariana"},
    {nome: "Juliana"},
    {nome: "Fernanda"},
    {nome: "Rafael"},
    {nome: "Ricardo"},
    {nome: "Jorge"},
    {nome: "Miguel"},
  ];

// Cada fileira pode ter NO MÁXIMO 5 alunos

const fileira: Fileira[] = [
    {
      numero: 0, 
      alunos: fila.create(5)
    },
    {
      numero: 1, 
      alunos: fila.create(5)
    },
    {
      numero: 2, 
      alunos: fila.create(5)
    },
] 

// Inserindo/populando 5 alunos por fileira

const mesasOcupadas = [
    {
        nome: alunos[0],
        fileira: fileira[0],
    },
]

console.log(mesasOcupadas)

// Função main
function main() {
    // Função que chama retira todos alunos da fileira e "da tchau" para eles
    
    // Função que chama a fileira
  }