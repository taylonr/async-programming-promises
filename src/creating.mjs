import setText, { appendText } from "./results.mjs";

export function timeout() {
  const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout");
    }, 15000);
  });
  console.log("timing out!");
  wait.then((text) => setText(text));
}

export function interval() {}

export function clearIntervalChain() {}

export function xhr() {}

export function allPromises() {}

export function allSettled() {}

export function race() {}
