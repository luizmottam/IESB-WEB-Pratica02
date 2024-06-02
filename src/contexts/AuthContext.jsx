import { createContext, useState, useContext, useEffect } from "react";
import { CadastroContext } from "./CadastroContext";

const AuthContext = createContext({});

function AuthContextProvider (props){

    const [user, setUser] = useState({email: null, logado: false});
    const { meusCadastros, consultarUsuario } = useContext(CadastroContext);

    useEffect(() => {
        consultarUsuario();
      }, []);
    

    function login(email,senha){
        if ( consultarUsuario(id.email) === email && consultarUsuario(id.senha) === senha ){
            setUser({email, logado: true});
            console.log("Deu certo!");
        } else console.log("Usuario não existente");
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