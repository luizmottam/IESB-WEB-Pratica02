import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import './New.css'

function New() {

  const navigate = useNavigate();
  const [product_url, setProduct_url] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { insertProduct } = useContext(ProductContext);

  async function handleSubmit(event){
    event.preventDefault();
    await insertProduct({product_url, name, price});
    navigate("/");
  }

  return (
    <>
      <h2>Welcome to New</h2>
      <h3>New Item</h3>
      <form onSubmit={handleSubmit}>
        <input
        name = "product_ur"
        placeholder="Url do Produto"
        value={product_url}
        onChange={(event) => setProduct_url(event.target.value)}
        />

      <input
        name = "name"
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />

        <input
        name = "price"
        placeholder="Preço"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        />

        <input type="submit" value="Salvar" />

      </form>
    </>
  );
}

export default New;