import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group'

import UsuarioService from '../app/services/usuarioService';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const service = new UsuarioService();

    const entrar = () => {

        service.autenticar({
            email: email,
            senha: senha
        }).then(response => {
            localStorage.setItem("_user", JSON.stringify(response.data))
            props.history.push('/home');
        }).catch(err => {
            setMensagemErro(err.response.data);
        })
    }

    const prepareCadastrar = () => props.history.push('/cadastro-usuarios')

    return (
        <div className="row">
            <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                <div className="bs-docs-section">
                    <div className="row">
                        <span>{mensagemErro}</span>
                    </div>
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <form>
                                        <FormGroup label="E-Mail" htmlFor="exampleInputEmail1">
                                            <input type="email" className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="exampleInputEmail1"
                                                placeholder="Digite o Email" />
                                        </FormGroup>
                                        <FormGroup label="Senha" htmlFor="exampleInputPassword1">
                                            <input type="password" className="form-control"
                                                value={senha}
                                                onChange={(e) => setSenha(e.target.value)}
                                                id="exampleInputPassword1"
                                                placeholder="Digite a Senha" />
                                        </FormGroup>
                                        <div style={{ paddingTop: '10px' }}>
                                            <button type="button" className="btn btn-sm btn-success" onClick={entrar} style={{ marginRight: '10px' }}>Entrar</button>
                                            <button type="button" className="btn btn-sm btn-danger" onClick={prepareCadastrar}>Cadastrar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);