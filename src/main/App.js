import 'bootswatch/dist/flatly/bootstrap.css'

import Rotas from './rotas'
import NavBar from '../components/navbar'

import '../custom.css'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Rotas />
      </div>
    </>
  );
}

export default App;
