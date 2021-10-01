import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group';
import UsuarioService from '../app/services/usuarioService';

import { mensagemAlerta, mensagemSucesso, mensagemErro } from '../components/toastr'

const CadastroUsuario = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepet, setPassRepet] = useState('');

    const cadastrar = () => {
        let validacao = validarCampos();

        if (validacao.length > 0) {            
            validacao.map(e => {
                return mensagemErro(e);
            });

            return;
        }

        const service = new UsuarioService();
        let usuario = {
            "nome": name,
            "email": email,
            "senha": password
        }
        service.cadastrarUsuario(usuario).then(response => {
            mensagemSucesso("Usuario cadastrado com sucesso");
            limpaCampo();

            props.history.push('/login');

        }).catch(err => mensagemErro(err.response.data))

    }

    const validarCampos = () => {
        let msgs = [];

        if (name.trim() === '') {
            msgs.push('Nome obrigatório')
        }

        if (email.trim() === '') {
            msgs.push('E-Mail obrigatório')
        } else if (!email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push('E-Mail informado inválido')
        }

        if (password.trim() === '') {
            msgs.push('Senha obrigatória!')
        }

        if (password !== passRepet) {
            msgs.push("Senhas são divergentes!")
        }

        return msgs;
    }

    const limpaCampo = () => {
        setName('');
        setEmail('');
        setPassword('');
        setPassRepet('');
    }

    const cancelar = () => props.history.push('/login');

    return (
        <Card title="Cadastro de usuário">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <FormGroup label="Nome" htmlFor="inputName">
                            <input type="text" className="form-control"
                                id="inputName" 
                                name="name" 
                                onChange={e => setName(e.target.value)} 
                                value={name} />
                        </FormGroup>
                        <FormGroup label="E-Mail" htmlFor="inputMail">
                            <input type="email" className="form-control"
                                id="inputMail" 
                                name="email" 
                                onChange={e => setEmail(e.target.value)} 
                                value={email} />
                        </FormGroup>
                        <FormGroup label="Senha" htmlFor="inputPassword">
                            <input type="password" className="form-control"
                                id="inputPassword" 
                                name="password" 
                                onChange={e => setPassword(e.target.value)} 
                                value={password} />
                        </FormGroup>
                        <FormGroup label="Repita Senha" htmlFor="inputPasswordRepet">
                            <input type="password" className="form-control"
                                id="inputPasswordRepet" 
                                name="passRepet" 
                                onChange={e => setPassRepet(e.target.value)} 
                                value={passRepet} />
                        </FormGroup>
                        <div style={{paddingTop: '10px'}}>
                            <button type="button" className="btn btn-sm btn-success" onClick={cadastrar} style={{marginRight: '10px'}}>Salvar</button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={cancelar}>Voltar</button>                                                    
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default withRouter(CadastroUsuario);