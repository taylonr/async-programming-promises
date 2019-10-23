export default function setText(text){
    const results = document.getElementsByClassName("results")[0].children[0];
    results.innerHTML = text;
}