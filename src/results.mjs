export default function setText(text){
    const results = document.getElementsByClassName("results")[0].children[0];
    results.innerHTML = text.replace(/([{},:])/g, ' $1 ');
}

export function appendText(text){
    const results = document.getElementsByClassName("results")[0].children[0];
    results.innerHTML += text.replace(/([{},:])/g, ' $1 ');
}

export function showWaiting(){
    const waiting = document.getElementsByClassName("waiting")[0];
    waiting.classList.remove("hidden");
}

export function hideWaiting(){
    const waiting = document.getElementsByClassName("waiting")[0];
    waiting.classList.add("hidden");
}