import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sidenav shadow-right sidenav-dark">
        <div className="sidenav-menu">
          <div className="nav accordion" id="accordionSidenav">

            <div className="sidenav-menu-heading text-white-50">INICIO</div>

            <div className="nav-link text-white" href="/">
              <div className="nav-link-icon text-white"><i className="fa-solid fa-gauge-high"></i></div>
              Escritorio
            </div>

            <div className="sidenav-menu-heading text-white-50">ADMINISTRACIÓN</div>

            <div className="nav-link collapsed text-white"  data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
              <div className="nav-link-icon text-white"><i className="fa-solid fa-screwdriver-wrench"></i></div> 
              Configurar
              <div className="sidenav-collapse-arrow text-white"><i className="fas fa-angle-down" /></div>
            </div>
            <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
              <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                <div className="nav-link text-white" href="./usuario"> Usuarios</div>
                <div className="nav-link text-white" href="proveedor"> Proveedores</div>
                <div className="nav-link text-white" href="mesa"> Mesas</div>
                <div className="nav-link text-white" href="categoria"> Categorías</div>
                <div className="nav-link text-white" href="producto"> Productos</div>
                <div className="nav-link text-white" href="paquete"> Paquetes</div>
              </nav>
            </div>

            <div className="sidenav-menu-heading text-white-50">RESTAURANTE</div>

            <div className="nav-link text-white" href="ordenes">
              <div className="nav-link-icon text-white"><i className="fa-solid fa-file-pen"></i></div>
              Pedidos
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