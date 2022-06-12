import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='arriba'>usuarios</div>
        <div className='medio'>categorias</div>
        <div className='abajo'>productos</div>
        <div className='abajo'>paquetes</div>
        <div className='arriba'>proveedores</div>
        <div className='medio'>mesas</div>
        <div className='medio'>cuenta</div>
        <div className='medio'>pedido</div>
        <div className='abajo'>login</div>
    </div>
  )
}

export default Sidebar