import React from "react";
import {useContext} from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {AuthContext} from "./components/context/AuthContext";

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
  Navigate
} from "react-router-dom";

function App() {
  const {currentUser} = useContext( AuthContext );

  const RequireAuth = ( {children} ) => {
    return currentUser ? children : <Navigate to="/login" />;
  }

  return (
    <div className="app dark">
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={300}
          >
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login />}></Route>
                <Route index element={<RequireAuth><Inicio /></RequireAuth>} />
                <Route path="usuario">
                  <Route index element={<RequireAuth><Lista type="usuario" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":usuarioID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="categoria">
                  <Route index element={<RequireAuth><Lista type="categoria" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":categoriaID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="producto">
                  <Route index element={<RequireAuth><Lista type="producto" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":productoID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="paquete">
                  <Route index element={<RequireAuth><Lista type="paquete" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":paqueteID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="proveedor">
                  <Route index element={<RequireAuth><Lista type="proveedor" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":proveedorID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="mesa">
                  <Route index element={<RequireAuth><Lista type="mesa" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":mesaID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="reservacion">
                  <Route index element={<RequireAuth><Lista type="reservacion" /></RequireAuth>} />
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":reservacionID" element={<RequireAuth><Editar /></RequireAuth>} />
                </Route>
                <Route path="pedido" element={<RequireAuth><Pedidos /></RequireAuth>}>
                  <Route path="nuevo" element={<RequireAuth><Nuevo /></RequireAuth>} />
                  <Route path=":pedidoID" element={<RequireAuth><Editar /></RequireAuth>} />
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
