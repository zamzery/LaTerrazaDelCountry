import './Header.scss';
import Litepicker from 'litepicker';
import 'litepicker/dist/plugins/ranges';

const Header = ({type}) => {
    let data;
    switch(type){
        case "escritorio":
            data={
                title:"ESCRITORIO",
                resumen:"Resumen informativo de La Terraza del Country.",
                rangoFecha: true
            }
        break;

        case "usuario":
            data={
                title:"USUARIOS",
                resumen:"Listado y configuración de Usuarios.",
                rangoFecha:false
            }
        break;

        case "proveedor":
            data={
                title:"PROVEEDORES",
                resumen:"Listado de Proveedores.",
                rangoFecha:false
            }
        break;

        case "mesa":
            data={
                title:"MESAS",
                resumen:"Listado y configuración de Mesas.",
                rangoFecha:false
            }
        break;

        case "categoria":
            data={
                title:"CATEGORÍAS",
                resumen:"Listado de Categorías.",
                rangoFecha:false
            }
        break;

        case "producto":
            data={
                title:"PRODUCTOS",
                resumen:"Listado de Productos.",
                rangoFecha:false
            }
        break;

        case "paquete":
            data={
                title:"PAQUETES",
                resumen:"Listado de Paquetes.",
                rangoFecha:false
            }
        break;

        default:
        break;
    }
    const litepickerRangePlugin = document.getElementById( 'litepickerRangePlugin' );
    if ( litepickerRangePlugin ) {
        new Litepicker( {
            element: litepickerRangePlugin,
            lang: 'es-ES',
            startDate: new Date(),
            endDate: new Date(),
            singleMode: false,
            numberOfMonths: 2,
            numberOfColumns: 2,
            format: 'DD MMMM, YYYY',
            plugins: [ 'ranges' ]
        } );
    }
    return (
        <header className="page-header page-header-dark headers pb-10 mt-n5">
            <div className="container-xl px-4">
                <div className="page-header-content pt-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto mt-4">
                            <h1 className="page-header-title">
                                <div className="page-header-icon"><i data-feather="activity" /></div>
                                {data.title}
                            </h1>
                            <div className="page-header-subtitle">&nbsp; {data.resumen}</div>
                        </div>
                        <div className="col-12 col-xl-auto mt-4">
                            {data.rangoFecha ? <div className="input-group input-group-joined border-0 anchoCalendario"><span className="input-group-text"><i className="text-primary" data-feather="calendar" /></span><input className="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Selecciona un rango de fechas..." /></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header