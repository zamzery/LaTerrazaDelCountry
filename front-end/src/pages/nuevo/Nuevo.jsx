import './Nuevo.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Nuevo = () => {
  return (
    <div className='nuevo'>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            
          </main>
        </div>
      </div>
    </div>
  )
}

export default Nuevo