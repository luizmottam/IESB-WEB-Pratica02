import { createContext, useState, useContext, useEffect } from "react";
import { CadastroContext } from "./CadastroContext";

const AuthContext = createContext({});

function AuthContextProvider (props){

    const [user, setUser] = useState({email: null, logado: false});
    const { MeusCadastros, consultarEmail, consultarSenha } = useContext(CadastroContext);

    async function login(email,senha){

        const emailConsultado = await consultarEmail(email);
        const senhaConsultada = await consultarSenha(senha);

        if (emailConsultado ==  email && senhaConsultada == senha){

            setUser({email, logado: true});
            console.log("Deu certo!", user.logado);

        } else console.log("DEU ERRO!!", user.logado , emailConsultado, senhaConsultada )
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