import ApiService from "../apiservice";

class UsuarioService extends ApiService {

    autenticar(credenciais) {
        return this.post('/api/usuarios/autenticar', credenciais)
    }

}

export default UsuarioService;