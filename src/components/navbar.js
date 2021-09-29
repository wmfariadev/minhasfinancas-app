import NavBarItem from "./navbar-item";

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="https:localhost:3000/#" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/" title="Home" />
                        <NavBarItem href="#/cadastro-usuarios" title="Usuários" />
                        <NavBarItem href="#/" title="Lançamentos" />
                        <NavBarItem href="#/login" title="Login" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;