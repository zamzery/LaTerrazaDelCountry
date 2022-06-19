import './Inicio.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Inicio = () => {
  return (
    <div className='inicio'>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main></main>
        </div>
      </div>
    </div>
  )
}

export default Inicio