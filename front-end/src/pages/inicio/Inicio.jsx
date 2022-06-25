import './Inicio.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Header from '../../components/header/Header';
import Grafica from '../../components/grafica/Grafica';
import Destacado from '../../components/destacado/Destacado';

const Inicio = () => {
	return (
		<div className='inicio'>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header type="escritorio"/>
						<div className="widgets mt-n10 row">
							<Widget type="reservaciones"/>
							<Widget type="pedidos"/>
							<Widget type="ventas"/>
							<Widget type="balance"/>
						</div>
						<div className="row widgets mt-n5 ">
							<div className="destacado col-xl-6 mb-4">
								<Destacado />
							</div>
							<div className="grafica col-xl-6 mb-4">
								<Grafica />
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Inicio