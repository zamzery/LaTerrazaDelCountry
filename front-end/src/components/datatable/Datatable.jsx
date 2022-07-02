import * as React from 'react';
import './Datatable.scss'
import DataTable from 'react-data-table-component';

const data = [
    {"id":1,"nombre":"Herold","apellido":"Hardwich","email":"hhardwich0@geocities.jp","genero":"Masculino","ip_address":"131.149.218.73"},
    {"id":2,"nombre":"Martelle","apellido":"Peddowe","email":"mpeddowe1@feedburner.com","genero":"Femenino","ip_address":"249.160.225.74"},
    {"id":3,"nombre":"Devan","apellido":"Foulstone","email":"dfoulstone2@opera.com","genero":"Femenino","ip_address":"28.60.122.122"},
    {"id":4,"nombre":"Rice","apellido":"Halsey","email":"rhalsey3@goo.gl","genero":"Masculino","ip_address":"49.93.93.32"},
    {"id":5,"nombre":"Corrina","apellido":"Fitzer","email":"cfitzer4@harvard.edu","genero":"Femenino","ip_address":"54.248.51.249"},
    {"id":6,"nombre":"Kermy","apellido":"Bett","email":"kbett5@wufoo.com","genero":"Masculino","ip_address":"43.3.243.27"},
    {"id":7,"nombre":"Doroteya","apellido":"Kingh","email":"dkingh6@ucla.edu","genero":"Femenino","ip_address":"147.151.8.68"},
    {"id":8,"nombre":"Obed","apellido":"Iacovino","email":"oiacovino7@phpbb.com","genero":"Masculino","ip_address":"196.237.176.255"},
    {"id":9,"nombre":"Kelcy","apellido":"Crowhurst","email":"kcrowhurst8@earthlink.net","genero":"Femenino","ip_address":"133.118.121.242"},
    {"id":10,"nombre":"Lorena","apellido":"Charlot","email":"lcharlot9@mozilla.org","genero":"Femenino","ip_address":"37.66.237.110"},
    {"id":11,"nombre":"Iormina","apellido":"Falcus","email":"ifalcusa@eventbrite.com","genero":"Femenino","ip_address":"37.178.65.32"},
    {"id":12,"nombre":"Nathalie","apellido":"Joderli","email":"njoderlib@i2i.jp","genero":"Femenino","ip_address":"222.244.240.186"},
    {"id":13,"nombre":"Juan","apellido":"Cranmer","email":"jcranmerc@paginegialle.it","genero":"Masculino","ip_address":"10.174.5.52"},
    {"id":14,"nombre":"Ricoriki","apellido":"O'Kynsillaghe","email":"rokynsillaghed@tiny.cc","genero":"Masculino","ip_address":"125.250.102.200"},
    {"id":15,"nombre":"Ky","apellido":"Batsford","email":"kbatsforde@simplemachines.org","genero":"Masculino","ip_address":"10.78.70.171"}
];

const columnas = [
    { name: "#", selector: row =>row.id,sorteable:true, },
    { name: "Nombre", selector:row =>row.nombre,sorteable:true, },
    { name: 'Apellido', selector: row =>row.apellido ,sorteable:true,},
    { name: 'Email', selector:row =>row.email ,sorteable:true,},
    { name: "Género", selector: row =>row.genero,sorteable:true, },
    { name: "IP address", selector:row =>row.ip_address ,sorteable:true,},
    { name: "Acciones", selector:row =>row.acciones ,sorteable:true,},
];

const textoEspannol={
    rowsPerPageText: 'Filas por página:',
    rangeSeparatorText: 'de',
    noRowsText: 'No hay registros',
    selectAllRowsItemText: 'Seleccionar todos',
    selectAllRowsItem: true,
}

const click = (row) => {
    console.log(row);
};

export default function Lista() {
    return (
        <div className="mt-n10">
            <div className="row">
                <div className="col-sm-12 mb-4">
                    <div className="card h-100">
                        <div className="card-body h-100 p-5">
                            <div className='tabla table-responsive'>
                            <DataTable
                                data={data}
                                columns={columnas}
                                striped={true}
                                hover={true}
                                responsive={true}
                                onClickRow={click}
                                paginationComponentOptions={textoEspannol}
                                fixedHeader
                                fixedHeaderScrollHeight={'500px'}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
