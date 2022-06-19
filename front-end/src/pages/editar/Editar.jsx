import './Editar.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Editar = () => {
  return (
    <div className='editar'>
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

export default Editar