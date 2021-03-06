import "./Inicio.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Header from "../../components/header/Header";
import Grafica from "../../components/grafica/Grafica";
import Destacado from "../../components/destacado/Destacado";
import Tabla from "../../components/tabla/Tabla";

const Inicio = () => {
	return (
		<div className="inicio">
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header type="escritorio" />
						<div className="paddingSection mt-n10 row">
							<Widget type="reservaciones" />
							<Widget type="pedidos" />
							<Widget type="ventas" />
							<Widget type="balance" />
						</div>
						<div className="paddingSection row equal">
							<div className="col-xl-3 col-md-12 mb-4">
								<Destacado />
							</div>
							<div className="col-xl-9 col-md-12 mb-4">
								<Grafica />
							</div>
						</div>
						<div className="paddingSection contenedorTabla row">
							<div className="col-xl-12 col-md-12 mb-4">
								<Tabla />
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Inicio;
