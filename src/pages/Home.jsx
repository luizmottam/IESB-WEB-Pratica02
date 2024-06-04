import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { myProducts, listProducts, removeProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    listProducts();
  }, []);

  async function handleSubmit(event, id) {
    event.preventDefault();
    await removeProduct(id);
    listProducts();
    navigate("/"); // Navegar de volta para a página inicial
  }

  return (
    <>
      <h2>Welcome to Home</h2>

      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="price">Price</th>
            <th className="new">
              <img src="src/assets/add.svg" alt="Add" />
              <Link to="/new">New Item</Link>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myProducts?.map((product) => (
            <tr key={product.id}>
              <td className="name">
                <a href={product.product_url} target="_blank" rel="noopener noreferrer">
                  {product.name}
                </a>
              </td>
              <td className="price">{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`}>
                  <img src="src/assets/edit.svg" alt="Edit" />
                </Link>
              </td>
              <td>
                <button onClick={(event) => handleSubmit(event, product.id)}>
                  <img src="src/assets/delete.svg" alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;