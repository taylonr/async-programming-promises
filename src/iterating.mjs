import setText, { appendText } from "./results.mjs";

export async function get() {
  const { data } = await axios.get("http://localhost:3000/orders/1");
  setText(JSON.stringify(data));
}

export async function getCatch() {
  try {
    const { data } = await axios.get("http://localhost:3000/orders/200");
  } catch (error) {
    setText(error);
  }
}

export async function chain() {
  const { data: order } = await axios.get("http://localhost:3000/orders/1");
  const { data } = await axios.get(
    `http://localhost:3000/addresses/${order.shippingAddress}`
  );

  setText(JSON.stringify(data));
}

export async function concurrent() {
  const orderStatuses = axios.get("http://localhost:3000/orderStatuses");
  const orders = axios.get("http://localhost:3000/orders");

  setText("");

  const { data: statuses } = await orderStatuses;

  appendText(JSON.stringify(statuses));

  const { data: order } = await orders;
  appendText(JSON.stringify(order[0]));
}

export async function parallel() {
  setText("");
  await Promise.all([
    (async () => {
        const { data } = await axios.get("http://localhost:3000/orderStatuses");
        appendText(JSON.stringify(data));
      })(),
    (async () => {
      const { data } = await axios.get("http://localhost:3000/orders");
      appendText(JSON.stringify(data[0]));
    })()
  ]);
}
