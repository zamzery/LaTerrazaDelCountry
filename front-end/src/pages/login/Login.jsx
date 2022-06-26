import './Login.scss';

const Login = () => {
	document.body.classList.add("css-gradient");
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
										<img src="logo512.png" alt="La Terraza del Country" className='logoTerraza'/>
									</div>
									{/* Login form*/}
									<form>
										{/* Form Group (email address)*/}
										<div className="mb-3">
											<label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
											<input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter email address" />
										</div>
										{/* Form Group (password)*/}
										<div className="mb-3">
											<label className="small mb-1" htmlFor="inputPassword">Contraseña</label>
											<input className="form-control" id="inputPassword" type="password" placeholder="Enter password" />
										</div>
										{/* Form Group (remember password checkbox)*/}
										<div className="mb-3">
											<div className="form-check">
											<input className="form-check-input" id="rememberPasswordCheck" type="checkbox" defaultValue />
											<label className="form-check-label" htmlFor="rememberPasswordCheck">Recordar Contraseña</label>
											</div>
										</div>
										{/* Form Group (login box)*/}
										<div className="d-flex align-items-center justify-content-between mt-4 mb-0">
											<button className="btn btn-dark botonIngreso" href="dashboard-1.html">Ingresar</button>
										</div>
										<div className="mb-0">
											<button className="small btn btn-link text-dark " href="auth-password-basic.html">¿Olvidaste tu Contraseña?</button>
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
								<span className="float-left">©Incantu 2022</span> | <button type="button" class="btn btn-link text-light">Política de Privacidad</button> | <button type="button" class="btn btn-link text-light">Términos y Condiciones</button>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Login