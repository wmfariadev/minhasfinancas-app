import ApiService from "../apiservice";

class UsuarioService extends ApiService {

    autenticar(credenciais) {
        return this.post('/api/usuarios/autenticar', credenciais)
    }

    obterSaldoPorId(id) {
        return this.get(`/api/usuarios/${id}/saldo`)
    }

    cadastrarUsuario(usuario) {
        return this.post(`/api/usuarios`, usuario)
    }

}

export default UsuarioService;