import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";

const editar = ( row ) => {
    console.log( row );
};

const activarDesactivar = ( row ) => {
    console.log( row );
};


export const columnas = [
    {field: "id", headerName: "#", width: 70, align: "center", },
    {
        field: "nombre",
        headerName: "Nombre",
        width: 700,
        renderCell: ( params ) =>
            <div className="cellImg">
                <img src={params.row.img} className="avatar" alt="" />
                <span>{params.row.nombre || ""} {params.row.apellido || ""}</span>
            </div>
    },
    {
        field: "email",
        headerName: "Email",
        width: 260,
    },
    {
        field: "telefono",
        headerName: "Teléfono",
        width: 260,
    },
    {
        field: "status",
        headerName: "Status",
        width: 90,
        align: "center",
        renderCell: ( params ) => {
            return (
                <span className={`etiquetaStatus ${params.row.activado ? 'activado' : 'desactivado'}`}>{params.row.activado ? 'Activado' : 'Desactivado'}</span>
            )
        }
    },
    {
        headerName: "Acciones",
        sortable: false,
        field: "acciones",
        width: 120,
        align: "center",
        renderCell: ( params ) => {
            return (
                <div className="acciones">
                    {params.row.activado ? (
                        <FontAwesomeIcon
                            className="icono desactivar"
                            icon={faTimes}
                            onClick={() => activarDesactivar( params.row.id )}
                            fixedWidth
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="icono activar"
                            icon={faCheck}
                            onClick={() => activarDesactivar( params.row.id )}
                            fixedWidth
                        />
                    )}
                    <FontAwesomeIcon
                        className="icono editar"
                        icon={faPen}
                        onClick={() => editar( params.row.id )}
                        fixedWidth
                    />
                </div>
            );
        },
    },
];

export const data = [
    {
        id: 1,
        nombre: "Herold",
        apellido: "Hardwich",
        email: "hhardwich0@geocities.jp",
        telefono: "33 0000 0000",
        ip_address: "131.149.218.73",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 2,
        nombre: "Martelle",
        apellido: "Peddowe",
        email: "mpeddowe1@feedburner.com",
        telefono: "33 0000 0000",
        ip_address: "249.160.225.74",
        activado: false,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 3,
        nombre: "Devan",
        apellido: "Foulstone",
        email: "dfoulstone2@opera.com",
        telefono: "33 0000 0000",
        ip_address: "28.60.122.122",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 4,
        nombre: "Rice",
        apellido: "Halsey",
        email: "rhalsey3@goo.gl",
        telefono: "33 0000 0000",
        ip_address: "49.93.93.32",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 5,
        nombre: "Corrina",
        apellido: "Fitzer",
        email: "cfitzer4@harvard.edu",
        telefono: "33 0000 0000",
        ip_address: "54.248.51.249",
        activado: false,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 6,
        nombre: "Kermy",
        apellido: "Bett",
        email: "kbett5@wufoo.com",
        telefono: "33 0000 0000",
        ip_address: "43.3.243.27",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 7,
        nombre: "Doroteya",
        apellido: "Kingh",
        email: "dkingh6@ucla.edu",
        telefono: "33 0000 0000",
        ip_address: "147.151.8.68",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 8,
        nombre: "Obed",
        apellido: "Iacovino",
        email: "oiacovino7@phpbb.com",
        telefono: "33 0000 0000",
        ip_address: "196.237.176.255",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 9,
        nombre: "Kelcy",
        apellido: "Crowhurst",
        email: "kcrowhurst8@earthlink.net",
        telefono: "33 0000 0000",
        ip_address: "133.118.121.242",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 10,
        nombre: "Lorena",
        apellido: "Charlot",
        email: "lcharlot9@mozilla.org",
        telefono: "33 0000 0000",
        ip_address: "37.66.237.110",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 11,
        nombre: "Iormina",
        apellido: "Falcus",
        email: "ifalcusa@eventbrite.com",
        telefono: "33 0000 0000",
        ip_address: "37.178.65.32",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 12,
        nombre: "Nathalie",
        apellido: "Joderli",
        email: "njoderlib@i2i.jp",
        telefono: "33 0000 0000",
        ip_address: "222.244.240.186",
        activado: false,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 13,
        nombre: "Juan",
        apellido: "Cranmer",
        email: "jcranmerc@paginegialle.it",
        telefono: "33 0000 0000",
        ip_address: "10.174.5.52",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 14,
        nombre: "Ricoriki",
        apellido: "O'Kynsillaghe",
        email: "rokynsillaghed@tiny.cc",
        telefono: "33 0000 0000",
        ip_address: "125.250.102.200",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
    {
        id: 15,
        nombre: "Ky",
        apellido: "Batsford",
        email: "kbatsforde@simplemachines.org",
        telefono: "33 0000 0000",
        ip_address: "10.78.70.171",
        activado: true,
        img: './img/avatar-placeholder.gif',
    },
];