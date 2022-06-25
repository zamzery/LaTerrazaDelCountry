import './Destacado.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function Destacado() {
    return (
        <div className="card bg-light card-header-actions h-80">
            <div className="card-header">
                Ventas Mensuales
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
                <Line options={options} data={data} />
            </div>
        </div>

    )
}

export default Destacado