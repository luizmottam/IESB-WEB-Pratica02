import { createContext, useState, useContext, useEffect } from "react";
import { CadastroContext } from "./CadastroContext";
import { ProductContext } from "./ProductContext";

const AuthContext = createContext({});

function AuthContextProvider(props) {
  const [user, setUser] = useState({ email: null, logado: false });

  const { MeusCadastros, consultarEmail, consultarSenha } =
    useContext(CadastroContext);

  async function login(email, senha) {
    try {
      const foundUsers = await consultarEmail(email);
        
      if (!foundUsers.length > 1) {
        throw new Error("Erro na base de dados! Usuário Duplicado")
      }

      const foundUser = foundUsers[0]

      if (!foundUser || foundUser?.senha !== senha) {
        throw new Error("Credenciais incorretas")
      }

      delete foundUser.senha

      setUser({ logado: true, ...foundUser});

      return true
    } catch (err) {
        console.error("DEU ERRO ", err.message)
        return false
    }
  }

  function logout() {
    setUser({ email: null, logado: false });
  }

  const contexto = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
