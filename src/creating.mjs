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

export function interval() {
  let counter = 0;
  const wait = new Promise((resolve) => {
    setInterval(() => {
      console.log("interval");
      resolve(`Timeout! ${++counter})`);
    }, 2000);
  });

  wait
    .then((text) => setText(text))
    .finally(() => appendText(` -- done ${counter}`));
}

export function clearIntervalChain() {
  let counter = 0;
  let interval;
  const wait = new Promise((resolve) => {
    interval = setInterval(() => {
      console.log("interval");
      resolve(`Timeout! ${++counter})`);
    }, 2000);
  });

  wait.then((text) => setText(text)).finally(() => clearInterval(interval));
}

export function xhr() {
  let wait = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users/7");
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject("Request FAILED"); // this gets executed when there's an error or the url is incorrect
    xhr.send();
  });

  wait.then((result) => setText(result)).catch((reason) => setText(reason));
}

export function allPromises() {}

export function allSettled() {}

export function race() {}
