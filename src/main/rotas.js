import React from 'react'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

const Rotas = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;