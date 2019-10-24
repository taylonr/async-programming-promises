export default function setText(text){
    const results = document.getElementsByClassName("results")[0].children[0];
    results.innerHTML = text;
}

export function appendText(text){
    const results = document.getElementsByClassName("results")[0].children[0];
    results.innerHTML += text;
}