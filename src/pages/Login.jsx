import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CadastroContext } from "../contexts/CadastroContext";
import { AuthContext } from "../contexts/AuthContext";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const {user, login} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  async function handleSubmit(event) {
    event.preventDefault();

    await login(email, senha);

    if (user.logado == true) {
      
      navigate("/");
      console.log("Navigated")

    } else console.log("Falha no Login!")
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
