const url = "http://localhost:3000/products";

async function create({product , user_id}){
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({...product, user_id}),
        headers:{
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

async function list({ user_id }) {
    const response = await fetch(`${url}?user_id=${user_id}`, {
        method: "GET",
    });
    return await response.json();
}

async function consult (id){
    const response = await fetch(`${url}/${id}`,{
        method: "GET",
    });
    return await response.json();
}

async function edit(products) {
    const {id,product_url, name,price} = products;
    const response = await fetch(`${url}/${products.id}`, {
        method: "PATCH",
        body: JSON.stringify({product_url, name, price}),
        headers:{
            "Content-Type": "application/json"
        },
    });
    return await response.json();
}

async function remove (id){
    const response = await fetch(`${url}/${id}`,{
        method: "DELETE",
    });
    return await response.json();
}

export default {create, list, consult, edit, remove}