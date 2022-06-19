import './Widget.scss';

const Widget = () => {
    return (
        <div className='widget'>
            <div className="izquierda">
                <span className='titulo'>PEDIDOS</span>
                <span className='contador'>48</span>
                <span className='link'>Ver Todos</span>
            </div>
            <div className="derecha">
                <div className="porcentaje"><i className="fa-solid fa-chevron-up"></i> &nbsp;20%</div>
                <i className="fa-solid fa-file-pen"></i>
            </div>
        </div>
    )
}

export default Widget