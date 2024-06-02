import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductContextProvider } from "./contexts/ProductContext.jsx";
import { CadastroContextProvider } from "./contexts/CadastroContext.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CadastroContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </AuthContextProvider>
    </CadastroContextProvider>
  </React.StrictMode>
);
