import setText, { appendText, showWaiting, hideWaiting } from "./results.mjs";

export function get() {
  axios
    .get("http://localhost:3000/orders/1")
    .then(({ data }) => data)
    .then((data) => setText(JSON.stringify(data)));
  console.log("test");
}

export function getCatch() {
  axios
    .get("http://localhost:3000/orders/123")
    .then(result => setText(JSON.stringify(result)))
    .catch(error => {
      setText(JSON.stringify(error));
      return error.message
    })
    .then(msg => console.log(msg))
}

export function chain() {
  axios
    .get("http://localhost:3000/orders/1")
    .then(result => {
      console.log(result);
      console.log(result.data.shippingAddress);
      return axios.get(`http://localhost:3000/addresses/${result.data.shippingAddress}`)
    })
    .then(address => setText(JSON.stringify(address)))
    .catch(error => setText(JSON.stringify(error)))
}

export function chainCatch() {
  axios
    .get("http://localhost:3000/orders/1")
    .then(({data}) => {
      console.log(data);
      console.log(data.shippingAddress);
      axios.get(`http://localhost:3000/addresses/${result.data.shippingAddress}`)
    })
    .then(address => setText(JSON.stringify(address)))
    .catch(error => setText(JSON.stringify(error)))
}
export function final() {
  showWaiting();
  axios
    .get("http://localhost:3000/orders/1")
    .then(({data}) => {
      setText(`Order Data: ${JSON.stringify(data)}`)
      console.log(data.shippingAddress);
      return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`)
    })
    .then(({data}) => {appendText('Address Data: ' + JSON.stringify(data));})
    .catch(err => appendText('Error: ' + JSON.stringify(err)))
    .finally(() => {
      setTimeout(() => {
        hideWaiting();
      }, 1500)
      console.log('===Done');
    });
}
 