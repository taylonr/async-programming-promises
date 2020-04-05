import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
  axios.get("http://localhost:3000/orders/1")
  .then(({data}) => {
    setText(JSON.stringify(data))
  })
}

export function getCatch() {
}

export function chain() {
}

export function chainCatch() {
}

export function final() {
}