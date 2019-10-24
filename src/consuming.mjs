import setText from './results.mjs';

export function get(){
    setText('A');
}

export function getCatch(){
    setText('B');
}

export function chain(){
    setText('C');
}

export function chainCatch(){
    setText('C1')
}

export function final(){
    setText('D');
}