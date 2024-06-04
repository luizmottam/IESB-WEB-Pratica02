import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product_url, setProductUrl] = useState("");
  const { alterProduct, consultProduct } = useContext(ProductContext);

  async function handleSubmit(event) {
    event.preventDefault();
    await alterProduct({ id, product_url, name, price });
    navigate("/");
  }

  useEffect(() => {
    async function carregaDados() {
      const result = await consultProduct(id);
      setProductUrl(result.product_url)
      setName(result.name);
      setPrice(result.price);
    }
    carregaDados();
  }, []);

  return (
    <>
      <h2>Editar Produto</h2>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            name="product_ur"
            placeholder="Url do Produto"
            value={product_url}
            onChange={(event) => setProduct_url(event.target.value)}
          />

          <input
            name="name"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required />

          <input
            name="price"
            placeholder="Preço"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required />

          <input type="submit" value="Salvar" />

        </form>
      </main>
    </>
  );
}

export default Editar;