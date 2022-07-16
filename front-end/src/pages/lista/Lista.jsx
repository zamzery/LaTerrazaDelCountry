import "./Lista.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Datatable from "../../components/datatable/Datatable";

const Lista = ({ type }) => {
	return (
		<div className="lista">
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header type={type} />
						<div className="contenedorTabla">
							<Datatable type={type} />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Lista;
