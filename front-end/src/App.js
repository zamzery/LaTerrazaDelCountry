import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import Lista from './pages/lista/Lista';
import Nuevo from './pages/nuevo/Nuevo';
import Editar from './pages/editar/Editar';
import Pedidos from './pages/pedido/Pedidos';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={300}
          >
            <Routes>
              <Route path="/">
                <Route index element={<Inicio />} />
                <Route path="login" element={<Login />}></Route>
                <Route path="usuario">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":usuarioID" element={<Editar />} />
                </Route>
                <Route path="categoria">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":categoriaID" element={<Editar />} />
                </Route>
                <Route path="producto">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":productoID" element={<Editar />} />
                </Route>
                <Route path="paquete">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":paqueteID" element={<Editar />} />
                </Route>
                <Route path="proveedor">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":proveedorID" element={<Editar />} />
                </Route>
                <Route path="mesa">
                  <Route index element={<Lista />} />
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":mesaID" element={<Editar />} />
                </Route>
                <Route path="pedido" element={<Pedidos />}>
                  <Route path="nuevo" element={<Nuevo />} />
                  <Route path=":pedidoID" element={<Editar />} />
                </Route>
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;
