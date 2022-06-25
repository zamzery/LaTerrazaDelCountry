import './Widget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUtensils,faScaleBalanced,faBookBookmark,faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Widget = ({type}) => {
    let data;
    //Información Temporal
    const cantidad = 100;
    const porcentaje = 20;
    switch(type){
        case "reservaciones":
            data={
                title:"RESERVACIONES",
                isMoney: false,
                link:"Ver Reservaciones",
                porcentaje: false,
                icon: <FontAwesomeIcon className="icono" icon={faBookBookmark} fixedWidth style={{
                    backgroundColor: "Black"
                }} />
            }
        break;

        case "pedidos":
            data={
                title:"PEDIDOS",
                isMoney: true,
                link:"Todos los Pedidos",
                porcentaje: false,
                icon: <FontAwesomeIcon className="icono" icon={faUtensils} fixedWidth style={{
                    backgroundColor: "RoyalBlue"
                }} />
            }
        break;

        case "ventas":
            data={
                title:"VENTAS",
                isMoney: true,
                link:"Ver Ventas",
                porcentaje: true,
                icon: <FontAwesomeIcon className="icono" icon={faDollarSign} fixedWidth style={{
                    backgroundColor: "SeaGreen"
                }} />
            }
        break;

        case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                link:"Ver Detalles",
                porcentaje: true,
                icon: <FontAwesomeIcon className="icono" icon={faScaleBalanced} fixedWidth style={{
                    backgroundColor: "Goldenrod"
                }} />
            }
        break;

        default:
        break;
    }
    return (
        <div className="col-lg-6 col-xl-3 mb-4">
            <div className="card card-angles bg-light text-dark h-100">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="me-3">
                            <div className="text-dark-75 small">{data.title}</div>
                            <div className="text-xl fw-bold">{data.isMoney && "$"} {cantidad}</div>
                        </div>
                        <div className="me-3">
                        {data.porcentaje ? <div className="porcentaje mb-2"><FontAwesomeIcon className="iconoPorcentaje" icon={faChevronUp}/> &nbsp;{porcentaje}%</div> : <div className="porcentaje mb-2"> &nbsp;</div>}
                            {data.icon}
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                    <div className="text-dark stretched-link">{data.link}</div>
                    <div className="text-dark"><i className="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Widget