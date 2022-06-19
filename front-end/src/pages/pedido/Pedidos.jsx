import './Pedidos.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Pedidos = () => {
    return (
        <div className='pedidos'>
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        Pedidos
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Pedidos