import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group';

const CadastroUsuario = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passRepet, setPassRepet] = useState('');

    const cadastrar = () => {
        console.log(name, email, password, passRepet);
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