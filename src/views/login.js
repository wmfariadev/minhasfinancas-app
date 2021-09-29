import React, { useState } from 'react';

import Card from '../components/card'
import FormGroup from '../components/form-group'

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        console.log('Email ', email);
        console.log('Senha', senha);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
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
                                                <div style={{paddingTop: '10px'}}>
                                                    <button onClick={entrar} className="btn btn-sm btn-success" style={{marginRight: '10px'}}>Entrar</button>
                                                    <button className="btn btn-sm btn-danger">Cadastrar</button>                                                    
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;