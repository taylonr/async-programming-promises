import setText from './results.mjs';

export function timeout(){
    setText('A');
}

export function interval(){
    setText('B');
}

export function clearInterval(){
    setText('C');
}

export function xhr(){
    setText('D');
}

export function allPromises(){
    setText('E');
}

export function allSettled(){
    setText('F');
}

export function race(){
    setText('G');
}