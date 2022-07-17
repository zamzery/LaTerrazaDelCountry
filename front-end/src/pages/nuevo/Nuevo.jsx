import "./Nuevo.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../firebase.config.js'
// import {useState} from "react";

const Nuevo = ( {inputs, titulo} ) => {
	// const [ file, setFile ] = useState( "" );
	// const [ data, setData ] = useState( {} );
	const agregaNuevo = async ( e ) => {
		e.preventDefault()
		try {
			await addDoc( collection( db, "cities" ), {
				name: "Los Angeles",
				state: "CA",
				country: "USA"
			} );
		} catch ( err ) {
			console.log( err )
		}
	}

	return (
		<div className="nuevo">
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<div className="arriba row">
						<div className="col-sm-12">
							{/* Account details card*/}
							<div className="card mb-4">
								<div className="card-header"><h3 style={{marginTop: "5px"}}>{titulo}</h3></div>
								<div className="card-body">
									<form onSubmit={agregaNuevo}>
										<div className="row gx-3 mb-3">
											{
												inputs.map( ( input ) => (
													<>
														{input.id === 'imagen' ?
															( <>
																<div className="col-md-6">
																	<label
																		className="label"
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
																		className="label"
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
															</> ) :
															( <div className={input.class}>
																<label className="label">{input.label}</label>
																<input key={input.id} className="form-control" type={input.type} placeholder={input.placeholder} required={input.required} />
															</div>)}
													</>
												) )
											}
										</div>
										<input
											name="activo"
											type="hidden"
											defaultValue="1"
											hidden
										/>
										<button
											className="btn btn-primary"
											type="submit">
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

export default Nuevo;
