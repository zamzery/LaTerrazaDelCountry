import './Destacado.scss'
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar"

function Destacado() {
	//Información Temporal
	const cantidad = 60000;
	const meta = 100000;
	const porcentaje = (cantidad * 100) / meta;

	const props = {
		percent: porcentaje, // is require
		colorSlice: "#00a1ff",
		colorCircle: "#CCCCCC",
		fontColor: "#555",
		fontSize: "1.6rem",
		fontWeight: 400,
		size: 250,
		stroke: 10,
		strokeBottom: 5,
		speed: 85,
		cut: 0,
		rotation: -90,
		opacity: 10,
		unit: "%",
		textPosition: "0.35em",
		animationOff: false,
		strokeDasharray: "10,1",
		inverse: false,
		round: true,
		number: true,
		linearGradient: ["#30c271","seagreen"]
	};

	return (
		<div className="card bg-light card-header-actions h-80">
			<div className="card-header">
				Meta Ventas Mensuales
			</div>
			<div className="card-body">
				<div className='row'>
					<div className="col-sm-12 col-md-12 destacado mb-2">
						<CircularProgressBar {...props} />
					</div>
					<div className="col-sm-12 col-md-12">
					<p className="text-center mt-3">
						<small className="text-muted">
							<span>
								<span className="text-dark">Meta: </span>
								<span className="text-gray-600">$ {meta.toFixed(2)}</span>
							</span>
							<br/>
							<span>
								<span className="text-dark">Ventas: </span>
								<span className="text-gray-600">$ {cantidad.toFixed(2)}</span>
							</span>
						</small>
					</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Destacado