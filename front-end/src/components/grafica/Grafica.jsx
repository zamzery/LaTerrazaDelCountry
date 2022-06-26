import './Grafica.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
		Chart as ChartJS,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend,
	} from 'chart.js';
	import { Line } from 'react-chartjs-2';
	import { faker } from '@faker-js/faker';
	
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);
	
	export const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Gráfica de Prueba',
			},
		},
	};
	
	const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
	
	export const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Dataset 2',
				data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

function Grafica() {
	return (
		<div className="card bg-light card-header-actions h-80">
			<div className="card-header">
				Gráfica de Ventas
				<div className="dropdown no-caret">
					<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="areaChartDropdownExample" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></button>
					<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="areaChartDropdownExample">
						<a className="dropdown-item" href="#!">Últimos 12 meses</a>
							<a className="dropdown-item" href="#!">Últimos 30 Días</a>
							<a className="dropdown-item" href="#!">Últimos 7 Días</a>
							<a className="dropdown-item" href="#!">Este Mes</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#!">Rango Específico</a>
					</div>
				</div>
			</div>
			<div className="card-body">
				<Line options={options} data={data} width={350} height={350}/>
			</div>
		</div>
	)
}

export default Grafica