import './Sidebar.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faScrewdriverWrench,faAngleDown,faFilePen,faBookmark } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  function tituloPaginas(titulo){
    document.getElementById("tituloPaginas").innerHTML = titulo;
  }
  return (
    <div id="layoutSidenav_nav">
      <nav className="sidenav shadow-right sidenav-dark">
        <div className="sidenav-menu">
          <div className="nav accordion" id="accordionSidenav">

            <div className="sidenav-menu-heading text-white-50">INICIO</div>
            <Link to="/" className="text-decoration-none">
              <div className="nav-link text-white" onClick={tituloPaginas('Inicio')}>
                <div className="nav-link-icon text-white"><FontAwesomeIcon className="fa-fw" icon={faGaugeHigh} /></div>
                Escritorio
              </div>
            </Link>

            <div className="sidenav-menu-heading text-white-50">RESTAURANTE</div>
            <Link to="/reservacion" className="text-decoration-none">
              <div className="nav-link text-white" href="reservacion">
                <div className="nav-link-icon text-white"><FontAwesomeIcon className="fa-fw" icon={faBookmark} /></div>
                Reservaciones
              </div>
            </Link>

            <Link to="/pedido" className="text-decoration-none">
              <div className="nav-link text-white" href="ordenes">
                <div className="nav-link-icon text-white"><FontAwesomeIcon className="fa-fw" icon={faFilePen} /></div>
                Pedidos
              </div>
            </Link>

            <div className="sidenav-menu-heading text-white-50">ADMINISTRACIÓN</div>
            <div className="nav-link collapsed text-white"  data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
              <div className="nav-link-icon text-white"><FontAwesomeIcon className="fa-fw" icon={faScrewdriverWrench} /></div> 
              Configurar
              <div className="sidenav-collapse-arrow text-white"><FontAwesomeIcon className="fa-fw" icon={faAngleDown} /></div>
            </div>
            <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
              <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                <Link to="/usuario" className="text-decoration-none">
                  <div className="nav-link text-white"> Usuarios</div>
                </Link>
                <Link to="/proveedor" className="text-decoration-none">
                  <div className="nav-link text-white"> Proveedores</div>
                </Link>
                <Link to="/mesa" className="text-decoration-none">
                  <div className="nav-link text-white"> Mesas</div>
                </Link>
                <Link to="/categoria" className="text-decoration-none">
                  <div className="nav-link text-white"> Categorías</div>
                </Link>
                <Link to="/producto" className="text-decoration-none">
                  <div className="nav-link text-white"> Productos</div>
                </Link>
                <Link to="/paquete" className="text-decoration-none">
                  <div className="nav-link text-white"> Paquetes</div>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="sidenav-footer">
          <div className="sidenav-footer-content">
            <div className="sidenav-footer-subtitle">Acceso con:</div>
            <div className="sidenav-footer-title">Nombre del Usuario</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar