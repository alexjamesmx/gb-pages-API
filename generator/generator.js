import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(uriApi) {
  const response = await fetch(uriApi);
  const data = await response.json();
  return data;
}

async function* iterData(uriApi) {
  try {
    const products = await fetchData(`${uriApi}/products`);
    yield console.log(products[12]);

    const product = await fetchData(`${uriApi}/products/${products[0].id}`);
    yield console.log(product.title);

    const category = await fetchData(
      `${uriApi}/categories/${product.category.id}`
    );
    yield console.log(category.name);
  } catch (error) {
    console.log(error);
  }
}

const res = iterData(API);
res.next();
// res.next();
// res.next();
// res.next();
