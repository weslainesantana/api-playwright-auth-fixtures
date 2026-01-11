class UsuariosApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://serverest.dev';
  }

  listarUsuarios() {
    return this.request.get(`${this.baseUrl}/usuarios`);
  }

  criarUsuario(payload) {
    return this.request.post(`${this.baseUrl}/usuarios`, {
      data: payload,
    });
  }

  buscarUsuariosPorId(id) {
    return this.request.get(`${this.baseUrl}/usuarios/${id}`);
  }

  deleteUsers(id) {
    return this.request.delete(`${this.baseUrl}/usuarios/${id}`);
  }
}

export default UsuariosApi;
