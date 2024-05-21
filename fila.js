"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = exports.clear = exports.isFull = exports.isEmpty = exports.peek = exports.dequeue = exports.enqueue = exports.create = void 0;
function create(size) {
    if (size === void 0) { size = 5; }
    return __spreadArray([], new Array(size), true);
}
exports.create = create;
function enqueue(queue, value) {
    var emptyIndex = queue.indexOf(undefined);
    if (emptyIndex === -1) {
        console.log("Fila cheia");
        return queue;
    }
    queue[emptyIndex] = value;
    return queue;
}
exports.enqueue = enqueue;
//Anda com a fila e limpa se ela esta vazia
function dequeue(queue) {
    if (queue[0] === undefined) {
        console.log("Fila vazia");
        return queue;
    }
    var firstValue = queue[0];
    for (var i = 0; i < queue.length - 1; i++) {
        queue[i] = queue[i + 1];
    }
    return firstValue;
}
exports.dequeue = dequeue;
// Retorna a fila
function peek(queue) {
    return queue[0];
}
exports.peek = peek;
// Verifica se a fila está vazia
function isEmpty(queue) {
    return queue[0] === undefined;
}
exports.isEmpty = isEmpty;
// Verifica se a fila está cheia
function isFull(queue) {
    return queue[queue.length - 1] !== undefined;
}
exports.isFull = isFull;
// Limpa a fila 
function clear(queue) {
    return create();
}
exports.clear = clear;
// Retorna o tamanho da fila
function size(queue) {
    return queue.filter(function (value) { return value !== undefined; }).length;
}
exports.size = size;
