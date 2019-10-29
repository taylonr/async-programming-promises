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

  wait.then(setText).finally(() => appendText(` -- Done ${counter}`));
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
              xhr.open("GET", "http://localhost:3000/accounts");
              xhr.onload = () => resolve(xhr.responseText);
              xhr.onerror = () => reject(xhr.statusText);
              xhr.send();
  })

  request.then(setText).catch(setText);
}

export function allPromises() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 1500);
  });

  const promise2 = Promise.resolve("Promise 2");

  const promise3 = Promise.reject("Promise 3");

  Promise.all([promise1, promise2, promise3])
    .then(values => setText(`Success: ${values}`))
    .catch(values => setText(`Errors: ${values}`));
}

export function allSettled() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 1500);
  });

  const promise2 = Promise.resolve("Promise 2");

  const promise3 = Promise.reject("Promise 3");

  Promise.allSettled([promise1, promise2, promise3])
    .then(values => {
      const results = values.map(v => {
        return `${v.value || v.reason}: ${v.status}`;
      });

      setText(results);
    })
    .catch(values => setText(`Errors: ${values}`));
}

export function race() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 1500);
  });

  const promise2 = Promise.resolve("Promise 2");

  const promise3 = Promise.reject("Promise 3");

  Promise.race([promise1, promise2, promise3])
    .then(values => setText(`Success: ${values}`))
    .catch(values => setText(`Errors: ${values}`));
}
