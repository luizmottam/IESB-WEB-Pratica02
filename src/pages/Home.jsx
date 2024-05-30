import { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

function Home() {
  const { myProducts, listProducts } = useContext(ProductContext);

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <h2>Welcome to Home</h2>
      <Link to="/new">New Item</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, key) => (
            <tr id={key}>
              <td><a href={product.product_url}>{product.name}</a></td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
