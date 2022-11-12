import setText, { appendText } from "./results.mjs";

export async function get() {
  const { data } = await axios.get("http://localhost:3000/orders/1");
  setText(JSON.stringify(data));
}

export async function getCatch() {
  try {
    const { data } = await axios.get("http://localhost:3000/orders/123");
    setText(JSON.stringify(data));
  } catch (e) {
    setText(e);
  }
}

export async function chain() {
  try {
    const { data } = await axios.get("http://localhost:3000/orders/1");
    const { data: address } = await axios.get(
      `http://localhost:3000/addresses/${data.shippingAddress}`
    );
    setText(JSON.stringify(address.city));
  } catch (e) {
    setText(e);
  }
}

export async function concurrent() {
  const orderStatus = axios.get("http://localhost:3000/orderStatuses");
  const orders = axios.get("http://localhost:3000/orders");

  setText("");

  const { data: statuses } = await orderStatus;
  const { data: order } = await orders;

  appendText(JSON.stringify(statuses));
  appendText(JSON.stringify(order[0]));
}

export async function parallel2() {
  setText("");

  await Promise.all(
    [
      (async () => {
        const { data } = await axios.get("http://localhost:3000/orderStatuses");
        appendText(JSON.stringify(data));
      })(),
      (async () => {
        const { data } = await axios.get("http://localhost:3000/orders");
        appendText(JSON.stringify(data));
      })(),
    ]()
  );
}
