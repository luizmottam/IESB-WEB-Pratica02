import { createContext, useState } from "react";
import service from "../services/CadastroService"

const CadastroContext = createContext({});

function CadastroContextProvider (props){
    const [usuarios, setUsuarios] = useState([]);

    async function buscarTodos() {
        const result = await service.listar();
        setUsuarios(result);
    }

    async function buscarUm(id) {
        return await service.consultar(id);
    }

    async function inserir(usuario) {
        return await service.criar(usuario);
    }

    async function alterar(usuario) {
        return await service.editar(usuario);
    }

    async function excluir(id) {
        return await service.remover(id);
    }

    const contexto = {
        meusCadastros: usuarios,
        inserirUsuario: inserir,
        alterarUsuario: alterar,
        listarUsuario: buscarTodos,
        consultarUsuario: buscarUm, 
        excluirUsuario: excluir,
    };

    return (
        <CadastroContext.Provider value={contexto}>
            {props.children}
        </CadastroContext.Provider>
    );
}

export {CadastroContext, CadastroContextProvider};