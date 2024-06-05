import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CadastroContext } from "../contexts/CadastroContext";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { inserirUsuario } = useContext(CadastroContext);


  async function handleSubmit(event) {
    try {
      event.preventDefault();

      await inserirUsuario({ nome, email, senha });
      navigate("/login");
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

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

        <input type="submit" value="Cadastrar" />

      </form>
    </div>
  );
}
