import './Navbar.scss';

const Navbar = () => {
  if ( localStorage.getItem( 'sb|sidebar-toggle' ) === 'true' ) {
    document.body.classList.toggle( 'sidenav-toggled' );
  }
  const sidebarToggle = () => {
    document.body.classList.toggle( 'sidenav-toggled' );
    localStorage.setItem( 'sb|sidebar-toggle', document.body.classList.contains( 'sidenav-toggled' ) );
  };
  return (
    <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start bg-gray-800" id="sidenavAccordion">
      {/* Sidenav Toggle Button*/}
      <button className="btn btn-icon btn-transparent-light order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" onClick={sidebarToggle}><i className="fa-solid fa-bars"></i></button>

      <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">
        <img src="LogoTerrazaSidebar.svg" alt="La Terraza del Country" className="logoPrincipal" />
      </a>

      <ul className="navbar-nav align-items-center ms-auto">
        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <button className="btn btn-icon btn-transparent-light dropdown-toggle" id="navbarDropdownAlerts" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa-solid fa-bell"></i></button>
          <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
            <h6 className="dropdown-header dropdown-notifications-header bg-dark">
              <i className="fa-solid fa-bell"></i> &nbsp;Alertas y Mensajes
            </h6>

            <div className="dropdown-item dropdown-notifications-item">
              <div className="dropdown-notifications-item-icon bg-warning"><i className="fa-solid fa-list-ul"></i></div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
              </div>
            </div>

            <div className="dropdown-item dropdown-notifications-item">
              <div className="dropdown-notifications-item-icon bg-info"><i className="fa-solid fa-chart-bar"></i></div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
              </div>
            </div>

            <div className="dropdown-item dropdown-notifications-item">
              <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle" /></div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
              </div>
            </div>

            <div className="dropdown-item dropdown-notifications-item">
              <div className="dropdown-notifications-item-icon bg-success"><i className="fa-solid fa-user-plus"></i></div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
              </div>
            </div>
            <div className="dropdown-item dropdown-notifications-footer">Ver todos los mensajes.</div>
          </div>
        </li>

        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <button className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" alt="profile" src="img/illustrations/profiles/profile-1.png" /></button>
          <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
            <h6 className="dropdown-header d-flex align-items-center">
              <img className="dropdown-user-img" alt="profile" src="img/illustrations/profiles/profile-1.png" />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name">Nombre del Usuario</div>
                <div className="dropdown-user-details-email">email@delusuario.com</div>
              </div>
            </h6>
            <div className="dropdown-divider" />
            <div className="dropdown-item">
              <div className="dropdown-item-icon"><i className="fa-solid fa-gear"></i></div>
              Modificar Cuenta
            </div>
            <div className="dropdown-item">
              <div className="dropdown-item-icon"><i className="fa-solid fa-right-from-bracket"></i></div>
              Cerrar Sesión
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar