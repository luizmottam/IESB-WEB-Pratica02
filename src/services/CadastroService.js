const url = "http://localhost:3000/usuarios"

async function criar(usuario) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
  
  async function listar() {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  }
  
  async function consultar(id) {
    const response = await fetch(`${url}/${id}`, {
      method: "GET",
    });
    return await response.json();
  }

  async function consultarEmail(email) {
    const response = await fetch(`${url}/?email=${email}`, {
      method: "GET",
    });
    return await response.json();
  }

  async function consultarSenha(senha) {
    const response = await fetch(`${url}/?senha=${senha}`, {
      method: "GET",
    });
    return await response.json();
  }
  
  async function editar(usuario) {
    const { id, nome, email, senha, produtos } = usuario;
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ nome, email, senha}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
  
  async function remover(id) {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }
  
  export default { criar, listar, consultar,consultarSenha,consultarEmail, editar, remover };