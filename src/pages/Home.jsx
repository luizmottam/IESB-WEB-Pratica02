import { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  const { myProducts, listProducts } = useContext(ProductContext);

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
    <main>
      <p>Welcome to Home</p>
      <Link to="/new">New Item</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th>Adicionar</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, key) => (
            <tr id={key}>
              <td><a href={product.product_url}>{product.name}</a></td>
              <td>{product.price}</td>
              <td><img src="src/assets/delete.svg"></img></td>
              <td><img src="src/assets/edit.svg"></img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    </>
  );
}

export default Home;
