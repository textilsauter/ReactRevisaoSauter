import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Adicionar} from './Adicionar' ;
import {Deletar} from './Deletar';
import {Usuarios} from './Usuarios';
import {UserDataDisplay} from './UserDataDisplay';

import {BrowserRouter,Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
    
      <header class="bg-purple text-white py-4">
    <div class="container">
      <h4 class="display-8">Controle de produção</h4>
      <p class="lead">Ordens de Urdideira</p>
    </div>
     </header>
        <div className="App container">
    

     <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        <div className="d-flex">
          <li className="nav-item m-1 d-flex">
            <NavLink className="btn btn-light btn-online-primary" to ="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item m-1 d-flex">
            <NavLink className="btn btn-light btn-online-primary" to ="/usuario">
              Lista de Ordens
            </NavLink>
          </li>
          <li className="nav-item m-1 d-flex">
            <NavLink className="btn btn-light btn-online-primary" to ="/adicionar">
              Adicionar Ordem
            </NavLink>
          </li>
          <li className="nav-item m-1 d-flex">
            <NavLink className="btn btn-light btn-online-primary" to ="/deletar">
              Deletar Ordem
            </NavLink>
          </li>
          {/* <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-online-primary" to ="/UserDataDisplay">
            UserDataDisplay
            </NavLink>
          </li> */}
          </div>
        </ul> 
      </nav> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usuario" element={<Usuarios />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="/deletar" element={<Deletar />} />
        {/* <Route path="/UserDataDisplay" element={<UserDataDisplay />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
