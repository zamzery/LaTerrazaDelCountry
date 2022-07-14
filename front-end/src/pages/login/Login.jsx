import { useState } from "react";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const Login = () => {
	document.body.classList.add("css-gradient");

	//Proceso de inicio de sesión
	const [usuario, setUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [error, setError] = useState(false);
	const procesaLogin = (e) => {
		e.preventDefault();

		// if (
		// 	usuario.substring(usuario.length - 24) ===
		// 	"@laterrazadelcountry.com"
		// ) {
		// 	userLogin = usuario;
		// } else {
		// 	userLogin = usuario + "@laterrazadelcountry.com";
		// }
		signInWithEmailAndPassword(auth, usuario, contrasena)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				setError(true);
				// const errorMessage = error.message;
				// if(errorMessage === "EMAIL_NOT_FOUND"){
				// 	alert(errorMessage);
				// }
			});
	};

	return (
		<div id="layoutAuthentication">
			<div id="layoutAuthentication_content">
				<main>
					<div className="container-xl px-4">
						<div className="row justify-content-center">
							<div className="col-lg-5">
								{/* Basic login form*/}
								<div className="card shadow-lg border-0 rounded-lg mt-5">
									<div className="card-body bg-light rounded">
										<div className="text-center">
											<img
												src="logo512.png"
												alt="La Terraza del Country"
												className="logoTerraza"
											/>
										</div>
										{/* Login form*/}
										<form onSubmit={procesaLogin}>
											{/* Form Group (usuario address)*/}
											<div className="mb-3">
												<label
													className="small mb-1"
													htmlFor="inputUsuario">
													Usuario
												</label>
												<input
													className="form-control"
													id="inputUsuario"
													type="text"
													name="usuario"
													placeholder="Escribe el usuario"
													onChange={(e) =>
														setUsuario(
															e.target.value
														)
													}
												/>
											</div>
											{/* Form Group (password)*/}
											<div className="mb-4">
												<label
													className="small mb-1"
													htmlFor="inputPassword">
													Contraseña
												</label>
												<input
													className="form-control"
													id="inputPassword"
													type="password"
													name="contrasena"
													placeholder="Escribe la contraseña"
													onChange={(e) =>
														setContrasena(
															e.target.value
														)
													}
												/>
											</div>
											{error && (
												<span id="inputError">
													Email o contraseña
													incorrectos.
												</span>
											)}
											{/* Form Group (login box)*/}
											<div className="d-flex align-items-center justify-content-between mt-4 mb-0">
												<button
													className="btn btn-dark botonIngreso"
													href="dashboard-1.html">
													Ingresar
												</button>
											</div>
											<div className="mb-0">
												<button
													className="small btn btn-link text-dark "
													href="auth-password-basic.html">
													¿Olvidaste tu Contraseña?
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div id="layoutAuthentication_footer">
				<footer className="footer-admin mt-auto">
					<div className="container px-2">
						<div className="row text-center">
							<div className="col-md-12 small text-light">
								<span className="float-left">
									©Incantu 2022 |
									<button
										type="button"
										className="btn btn-link text-light">
										Política de Privacidad
									</button>
									|
									<button
										type="button"
										className="btn btn-link text-light">
										Términos y Condiciones
									</button>
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Login;
