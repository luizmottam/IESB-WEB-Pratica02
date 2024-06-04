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

    async function buscarEmail(email) {
        return await service.consultarEmail(email);
    }

    async function buscarSenha(senha) {
        return await service.consultarSenha(senha);
    }

    async function inserir(usuario) {
        if (!usuario.email) {
            throw new Error("Email não fornecido")
        }

        const usersFound = await buscarEmail(usuario.email)
        
        if (usersFound.length > 0) {
            throw new Error("Usuário já existente")
        }

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
        consultarEmail: buscarEmail,
        consultarSenha: buscarSenha,
        excluirUsuario: excluir,
    };

    return (
        <CadastroContext.Provider value={contexto}>
            {props.children}
        </CadastroContext.Provider>
    );
}

export {CadastroContext, CadastroContextProvider};