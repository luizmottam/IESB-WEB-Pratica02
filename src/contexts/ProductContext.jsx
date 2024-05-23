import { createContext, useState } from "react";
import service from "../services/ProductService";

const ProductContext = createContext({});

function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);

  async function findAll() {
    const result = await service.list();
    setProducts(result);
  }

  async function searchOne(id) {
    return await service.consult(id);
  }

  async function insert(product) {
    return await service.create(product);
  }

  async function alterById(product) {
    return await service.edit(product);
  }

  async function deleteById(id) {
    return await service.remove(id);
  }

  const context = {
    myProducts: products,
    insertProduct: insert,
    alterProduct: alterById,
    listProducts: findAll,
    consultProduct: searchOne,
    removeProduct: deleteById,
  };

  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
