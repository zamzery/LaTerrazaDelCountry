import "./Datatable.scss";
import {DataGrid, esES} from "@mui/x-data-grid";
import {data, columnas} from "./fakeUsers.js";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {esES as coreEsES} from "@mui/material/locale";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {
	faPen,
	faTimes,
	faCheck,
	faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const theme = createTheme(
	{
		palette: {
			primary: {main: "#1976d2"},
		},
	},
	esES,
	coreEsES
);

const editar = ( row ) => {
	console.log( row );
};

const activarDesactivar = ( row ) => {
	console.log( row );
};

const acciones = [
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

const localizedTextsMap = {
	columnMenuUnsort: "Desordenar",
	columnMenuSortAsc: "Ascendente",
	columnMenuSortDesc: "Descendente",
	columnMenuFilter: "Filtro",
	columnMenuHideColumn: "Ocultar",
	columnMenuShowColumns: "Mostrar",

	filterOperatorContains: "contenga",
	filterOperatorEquals: "igual",
	filterOperatorStartsWith: "empiece con",
	filterOperatorEndsWith: "finalice con",
	filterOperatorIs: "es",
	filterOperatorNot: "no es",
	filterOperatorAfter: "después",
	filterOperatorOnOrAfter: "es o después de",
	filterOperatorBefore: "es antes",
	filterOperatorOnOrBefore: "es o antes",
	filterOperatorIsEmpty: "esta vacío",
	filterOperatorIsNotEmpty: "no está vacío",
	filterOperatorIsAnyOf: "cualquiera de",

	filterPanelAddFilter: "Añadir filtro",
	filterPanelDeleteIconLabel: "Borrar",
	filterPanelLinkOperator: "Operador",
	filterPanelOperators: "Operador", // TODO v6: rename to filterPanelOperator
	filterPanelOperatorAnd: "Y",
	filterPanelOperatorOr: "O",
	filterPanelColumns: "Columnas",
	filterPanelInputLabel: "Valor",
	filterPanelInputPlaceholder: "Filtrar Valor",

	columnsPanelTextFieldLabel: "Encontrar",
	columnsPanelTextFieldPlaceholder: "Título",
	columnsPanelDragIconLabel: "Reordenar",
	columnsPanelShowAllButton: "Mostrar todo",
	columnsPanelHideAllButton: "Ocultar todo",
};

export default function Datatable() {

	return (
		<div className="mt-n10">
			<div className="row">
				<div className="col-sm-12 mb-4">
					<div className="card h-100">
						<div className="card-body h-100 p-5">
							<div className="agregar">
								<Link
									to="./nuevo"
									className="link">
									<button className="btn btn-success">
										<FontAwesomeIcon
											icon={faPlusCircle}
											fixedWidth
										/>
										<span> Agregar</span>
									</button>
								</Link>
							</div>
							<div className="tabla table-responsive">
								<ThemeProvider theme={theme}>
									<DataGrid
										rows={data}
										columns={columnas.concat( acciones )}
										stickyHeader
										pageSize={10}
										localeText={localizedTextsMap}
										rowsPerPageOptions={[ 10, 25, 50, 100 ]}
									/>
								</ThemeProvider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
