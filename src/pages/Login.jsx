import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CadastroContext } from "../contexts/CadastroContext";
import "./Login.css"

export default function Login() {
  const { meusCadastros, listarUsuario } = useContext(CadastroContext);

  useEffect(() => {
    listarUsuario();
  }, []);

  return (
    <>
      <h1>Login</h1>
      <Link to="/cadastro">cadastro</Link>
      <ul>
        {meusCadastros.map((usuarios, key) => (
          <li key={usuarios.id}>
            {usuarios.nome} - {usuarios.email} - {usuarios.senha} -{" "}
            {usuarios.produtos.map((produto, key) => (
                <li key={produto.id}>
                  {produto.url} - {produto.nome} -
                </li>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
}
