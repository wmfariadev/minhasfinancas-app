import ApiService from "../apiservice";

class UsuarioService extends ApiService {

    autenticar(credenciais) {
        return this.post('/api/usuarios/autenticar', credenciais)
    }

    obterSaldoPorId(id) {
        return this.get(`/api/usuarios/${id}/saldo`)
    }

}

export default UsuarioService;