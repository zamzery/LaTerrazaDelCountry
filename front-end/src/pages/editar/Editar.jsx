import "./Editar.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const Editar = (type) => {
	let data;
	switch (type) {
		case "escritorio":
			data = {
				title: "ESCRITORIO",
				resumen: "Resumen informativo de La Terraza del Country.",
				imagen: true,
			};
			break;

		case "usuario":
			data = {
				title: "USUARIOS",
				resumen: "Listado y configuración de Usuarios.",
				imagen: false,
			};
			break;

		case "proveedor":
			data = {
				title: "PROVEEDORES",
				resumen: "Listado de Proveedores.",
				imagen: false,
			};
			break;

		case "mesa":
			data = {
				title: "MESAS",
				resumen: "Listado y configuración de Mesas.",
				imagen: false,
			};
			break;

		case "categoria":
			data = {
				title: "CATEGORÍAS",
				resumen: "Listado de Categorías.",
				imagen: false,
			};
			break;

		case "producto":
			data = {
				title: "PRODUCTOS",
				resumen: "Listado de Productos.",
				imagen: false,
			};
			break;

		case "paquete":
			data = {
				title: "PAQUETES",
				resumen: "Listado de Paquetes.",
				imagen: false,
			};
			break;

		case "reservacion":
			data = {
				title: "RESERVACIONES",
				resumen: "Listado de Reservaciones.",
				imagen: true,
			};
			break;

		default:
			data = {
				title: "Usuario",
				resumen: "Listado de Reservaciones.",
				imagen: true,
			};
			break;
	}

	return (
		<div className="editar bg-gradient-info-to-primary">
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<div className="arriba row">
						<div className="col-sm-12">
							{/* Account details card*/}
							<div className="card mb-4">
								<div className="card-header">
									Editar {data.title}
								</div>
								<div className="card-body">
									<form>
										<div className="row gx-3 mb-3">
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputUsuario">
													<text className="importante">
														*
													</text>
													Usuario
												</label>
												<input
													className="form-control"
													id="inputUsuario"
													type="text"
													placeholder="Escribe el nombre de usuario"
													defaultValue="usuario"
													required
												/>
											</div>
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputContrasena">
													<text className="importante">
														*
													</text>
													Contraseña
												</label>
												<input
													className="form-control"
													id="inputContrasena"
													type="password"
													placeholder="Escribe el nombre la contraseña"
													defaultValue="contraseña"
													required
												/>
											</div>
										</div>
										{/* Form Row*/}
										<div className="row gx-3 mb-3">
											{/* Form Group (first name)*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputNombre">
													<text className="importante">
														*
													</text>
													Nombre(s)
												</label>
												<input
													className="form-control"
													id="inputNombre"
													type="text"
													placeholder="Escribe el/los nombre(s)"
													defaultValue="Nombre"
													required
												/>
											</div>
											{/* Form Group (last name)*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputApellido">
													Apellido(s)
												</label>
												<input
													className="form-control"
													id="inputApellido"
													type="text"
													placeholder="Escribe el/los apellido(s)"
													defaultValue="Apellido"
												/>
											</div>
										</div>
										<div className="row gx-3 mb-3">
											{/* Form Group (organization name)*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputEmail">
													<text className="importante">
														*
													</text>
													Email
												</label>
												<input
													className="form-control"
													id="inputEmail"
													type="email"
													placeholder="Enter your email "
													defaultValue="nombre@ejemplo.com"
													required
												/>
											</div>
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputTelefono">
													Teléfono
												</label>
												<input
													className="form-control"
													id="inputTelefono"
													type="tel"
													placeholder="Escribe el número de Teléfono"
													defaultValue="33-0000-0000"
												/>
											</div>
										</div>
										<div className="mb-3">
											<label
												className="small mb-1"
												htmlFor="inputDireccion">
												Dirección
											</label>
											<input
												className="form-control"
												id="inputDireccion"
												type="text"
												placeholder="Escribe la dirección"
												defaultValue="Calle Número 000, Col. Colonia, Ciudad, Estado"
											/>
										</div>
										{/* Form Row*/}
										<div className="row gx-3 mb-3">
											{/* Form Group Archivo INE*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputArchivoINE">
													INE
												</label>
												<input
													className="form-control"
													id="inputArchivoINE"
													type="file"
													name="ArchivoIne"
													placeholder="Selecciona el Archivo del INE"
												/>
											</div>
											{/* Form Group INE*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputINE">
													INE
												</label>
												<input
													className="form-control"
													id="inputINE"
													type="text"
													name="ine"
													placeholder="Escribe el número de INE"
													defaultValue="00000000000000"
												/>
											</div>
										</div>
										{/* Form Row*/}
										<div className="row gx-3 mb-3">
											{/* Form Group Archivo INE*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputArchivoLicencia">
													Licencia
												</label>
												<input
													className="form-control"
													id="inputArchivoLicencia"
													type="file"
													name="ArchivoLicencia"
													placeholder="Selecciona el Archivo de la Licencia"
												/>
											</div>
											{/* Form Group Licencia*/}
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputLicencia">
													Licencia
												</label>
												<input
													className="form-control"
													id="inputLicencia"
													type="text"
													name="licencia"
													placeholder="Escribe el número de la Licencia"
													defaultValue="00000000000000"
												/>
											</div>
										</div>
										<div className="row gx-3 mb-3">
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputLicencia">
													Archivo Nueva Imagen
												</label>
												<input
													className="form-control"
													id="inputArchivoImagen"
													type="file"
													name="ArchivoImagen"
													placeholder="Selecciona el Archivo de la Imagen"
												/>
											</div>
											<div className="col-md-6">
												<label
													className="small mb-1"
													htmlFor="inputArchivoImagen">
													Imagen Actual
												</label>
												<br />
												<img
													src="../img/avatar-placeholder.gif"
													className="avatarUsuario"
													alt="imagen"
												/>
											</div>
										</div>
										<button
											className="btn btn-primary"
											type="button">
											<FontAwesomeIcon
												icon={faSave}
												fixedWidth
											/>
											&nbsp; Guardar
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="abajo"></div>
				</div>
			</div>
		</div>
	);
};

export default Editar;
