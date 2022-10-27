import setText, { appendText, showWaiting, hideWaiting } from "./results.mjs";

export function get() {
  axios.get("http://localhost:3000/orders/1").then((data) => {
    setText(JSON.stringify(data));
  });
}

export function getCatch() {
  axios
    .get("http://localhost:3000/orders/123")
    .then((data) => {
      setText(JSON.stringify(data));
    })
    .catch((err) => {
      setText(err);
    });
}

export function chain() {
  axios
    .get("http://localhost:3000/orders/1")
    .then((result) => {
      const data = result.data;
      console.log(data);
      return axios.get(
        `http://localhost:3000/addresses/${data.shippingAddress}`
      );
    })
    .then((result) => {
      const data = result.data;
      console.log(data);
      setText(data.city);
    });
}

export function chainCatch() {
  axios
    .get("http://localhost:3000/orders/1")
    .then((result) => {
      const data = result.data;
      return axios.get(
        `http://localhost:3000/addresses/${data.shippingAddress}`
      );
    })
    .then((result) => {
      const data = result.data;
      setText(data.my.city);
    })
    .catch((err) => {
      setText(err);
    });
}

export function final() {}
