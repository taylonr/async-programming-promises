import setText, { appendText } from "./results.mjs";

export function timeout() {
  let wait = new Promise(resolve => {
    setTimeout(() => {
      resolve("Timeout!");
    }, 1500);
  });

  wait.then(setText);
}

export function interval() {
  let counter = 0;
  let wait = new Promise(resolve => {
    setInterval(() => {
      console.log("INTERVAL");
      resolve(`Timeout! ${++counter}`);
    }, 1500);
  });

  wait.then(setText).finally(() => appendText(" -- Done"));
}

export function clearIntervalChain() {
  let counter = 0;
  let interval;
  let wait = new Promise(resolve => {
    interval = setInterval(() => {
      console.log("INTERVAL");
      resolve(`Timeout! ${++counter}`);
    }, 1500);
  });

  wait
    .then(setText)
    .finally(() => {
        clearInterval(interval)
    });
}

export function xhr() {
  let request = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
              xhr.open("GET", "http://localhost:3000/users");
              xhr.onload = () => resolve(xhr.responseText);
              xhr.onerror = () => reject(xhr.statusText);
              xhr.send();
  })

  request.then(setText).catch(setText);
}

export function allPromises() {}

export function allSettled() {}

export function race() {}
