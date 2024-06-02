import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CadastroContext } from "../contexts/CadastroContext";
import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  async function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <input type="submit" value="Entrar" />
      </form>

      <p>Não possui cadastro?</p>
      <Link to="/cadastro">Cadastre-se</Link>
    </>
  );
}
