import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'


function postData(uriApi, data){
    const response = fetch(uriApi,{
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return response;
}

const deletePost = (uriApi, id) => {
    const response = fetch(`${uriApi}/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json'
        },
    })
return response
}


const data = {
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    'categoryId': 1,
    "images": ["https://placeimg.com/640/480/any"],
  };


// postData(`${API}/products`, data)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  deletePost(`${API}/products`, 205)  
  .then(response=>response.json())
  .then(console.log)
  .catch(console.log)