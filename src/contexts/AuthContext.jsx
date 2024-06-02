import { createContext, useState, useContext, useEffect } from "react";
import { CadastroContext } from "./CadastroContext";

const AuthContext = createContext({});

function AuthContextProvider (props) {
    const [user, setUser] = useState({email: null, logado: false});
    const { MeusCadastros, consultarEmail, consultarSenha } = useContext(CadastroContext);

    async function login(email, senha) {
        const emailConsultado = await consultarEmail(email);
        const senhaConsultada = await consultarSenha(senha);

        // Supondo que consultarEmail e consultarSenha retornem arrays
        if (emailConsultado.length > 0 && senhaConsultada.length > 0) {
            const usuario = emailConsultado[0]; // Acessar o primeiro objeto do array
            const senhaUsuario = senhaConsultada[0].senha; // Acessar a senha dentro do primeiro objeto do array

            if (usuario.email === email && senhaUsuario === senha) {
                setUser({email, logado: true});
                console.log("Deu certo!", user.logado);
                
            } else {
                console.log("DEU ERRO!!", user.logado, usuario, senhaUsuario);
            }
        } else {
            console.log("Usuário ou senha não encontrados");
        }
    }

    function logout() {
        setUser({email: null, logado: false});
    }

    const contexto = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contexto}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };