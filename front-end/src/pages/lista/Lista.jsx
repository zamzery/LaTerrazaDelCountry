import './Lista.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Lista = () => {
  return (
    <div className='lista'>
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

export default Lista