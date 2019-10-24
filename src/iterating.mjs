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

export function concurrent(){
    setText('D');
}

export function parallel(){
    setText('E');
}


