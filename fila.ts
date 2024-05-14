import { Fileira } from "./types";


export function create(size = 5) {
  return [...new Array(size)];
}

export function enqueue(queue: any[], value: any) {
  const emptyIndex = queue.indexOf(undefined);
  if (emptyIndex === -1) {
    console.log("Fila cheia");
    return queue;
  }

  queue[emptyIndex] = value;
  return queue;
}


//Anda com a fila e limpa se ela esta vazia
export function dequeue(queue: any[]) {
  if (queue[0] === undefined) {
    console.log("Fila vazia");
    return queue;
  }

  const firstValue = queue[0];

  for (let i = 0; i < queue.length - 1; i++) {
    queue[i] = queue[i + 1];
  }

  return firstValue;
}





// Retorna a fila
export function peek(queue: any[]) {
  return queue[0];
}

// Verifica se a fila está vazia
export function isEmpty(queue: any[]) {
  return queue[0] === undefined;
}
// Verifica se a fila está cheia
export function isFull(queue: any[]) {
  return queue[queue.length - 1] !== undefined;
}
// Limpa a fila 
export function clear(queue: any[]) {
  return create();
}
// Retorna o tamanho da fila
export function size(queue: any[]) {
  return queue.filter((value) => value !== undefined).length;
}