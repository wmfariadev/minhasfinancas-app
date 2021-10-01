import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

import './home.css'
import UsuarioService from '../app/services/usuarioService';

const Home = (props) => {

    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        let userAccess = JSON.parse(localStorage.getItem("_user"));
        const service = new UsuarioService();

        service.obterSaldoPorId(userAccess.id).then(res => {
            setSaldo(res.data);
        }).catch(err => console.error(err))
    }, [])

    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu sistema de finanças.</p>
            <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
            <hr className="my-4" />
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button" style={{ marginRight: '10px' }}><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                <a className="btn btn-danger btn-lg" href="#/cadastro-lancamento" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
            </p>
        </div>
    );
}

export default withRouter(Home);