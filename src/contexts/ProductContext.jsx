import { createContext, useState, useContext, useEffect } from "react";
import service from "../services/ProductService";
import { AuthContext } from "./AuthContext";

const ProductContext = createContext({});

function ProductContextProvider(props) {
  const { user } = useContext(AuthContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user?.logado) {
      setProducts([])
    }
  }, [user?.logado])

  async function findAll() {
    const result = await service.list({ user_id: user?.id });
    setProducts(result);
  }

  async function searchOne(id) {
    return await service.consult(id);
  }

  async function insert(product) {
    return await service.create({product, user_id: user?.id});
  }

  async function alterById(product) {
    return await service.edit(product);
  }

  async function deleteById(id) {
    return await service.remove(id);
  }

  async function loadProducts(products) {
    setProducts(products)
  }

  const context = {
    myProducts: products,
    insertProduct: insert,
    alterProduct: alterById,
    listProducts: findAll,
    consultProduct: searchOne,
    removeProduct: deleteById,
    loadProducts
  };

  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
