import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  const { myProducts, listProducts, removeProduct } = useContext(ProductContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    listProducts();
  }, []);

  async function handleSubmit(event, id) {
    event.preventDefault();
    await removeProduct(id);
    listProducts()
    navigate("/"); // Navigate back to the home page
  }

  return (
    <main>
      <h2>Welcome to Home</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th><img src="src/assets/add.svg" alt="" /><Link to="/new">New Item</Link></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product) => (
            <tr key={product.id}>
              <td><a href={product.product_url} target="_blank" >{product.name}</a></td>
              <td>{product.price}</td>
              <td><img src="src/assets/edit.svg" alt="Edit"></img></td>
              <td>
                <button onClick={(event) => handleSubmit(event, product.id)}>
                  <img src="src/assets/delete.svg" alt="Delete"></img>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home;