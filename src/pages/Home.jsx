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
      <h2>Welcome to Home</h2>
      <Link to="/new">New Item</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th><img src="src/assets/add.svg" alt="" /></th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, key) => (
            <tr id={key}>
              <td><a href={product.product_url} target="_blank" >{product.name}</a></td>
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
