import setText from "./results.mjs";

export function raceCondition() {
  let xhr = new XMLHttpRequest();
  let statuses = [];
  xhr.open("GET", "http://localhost:3000/orderStatuses");
  xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);
  };

  xhr.send();

  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "http://localhost:3000/orders/1");
  xhr2.onload = () => {
    const order = JSON.parse(xhr2.responseText);
    const description = statuses.map(t => {
      if (t.id === order.orderStatusId) {
        return t.description;
      }
    })[0];

    setText(description);
  };

  xhr2.send();
}

export function callbacks() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/orders");
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    const itemId = data[0].itemIds[0];

    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `http://localhost:3000/items/${itemId}`);
    xhr2.onload = () => {
      const data = JSON.parse(xhr2.responseText);
      const categoryId = data.itemCategoryId;

      const xhr3 = new XMLHttpRequest();
      xhr3.open("GET", `http://localhost:3000/itemCategories/${categoryId}`);

      xhr3.onload = () => {
        const {description} = JSON.parse(xhr3.responseText);

        setText(description);
      }
      xhr3.onerror = () => setText(xhr3.statusText);
      xhr3.send();
    };

    xhr2.onerror = () => setText(xhr2.statusText);
    xhr2.send();
  };
  xhr.onerror = () => setText(xhr.statusText);
  xhr.send();
}
