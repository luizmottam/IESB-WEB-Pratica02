import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CadastroContext } from "../contexts/CadastroContext";
import { AuthContext } from "../contexts/AuthContext";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const { user, login } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  async function handleSubmit(event) {
    event.preventDefault();

    const isLogged = await login(email, senha);

    if (isLogged) {
      navigate("/");

    } else console.log("Falha no Login!")
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

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
    </div>
  );
}
