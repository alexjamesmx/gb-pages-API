import fetch from "node-fetch";

const API = 'https://api.escueladjs.co/api/v1'

const fetchData = async (uriApi) => {
    const response = await fetch(uriApi);
    const data = await response.json();
    return data
}

const anotherFunction = async (uriApi) => {
    try {
        const products = await fetchData(`${uriApi}/products`);
        const product = await fetchData(`${uriApi}/products/${products[0].id}`)
        const category = await fetchData(`${uriApi}/categories/${product.category.id}`)

        // console.log(products);
        console.log(product.title)
        console.log(category.name)
    } catch(error) {
        console.log(error)
    }
}

anotherFunction(API);