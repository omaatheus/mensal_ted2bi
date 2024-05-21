export interface Aluno { // Cada aluno é desse tipo
    nome: string;
    numero?: number,
}
export interface Fileira { // Cada fileira tem um nome/número na sala e tem os alunos que estão nela
    numero: number,
    alunos: Aluno[],
}
