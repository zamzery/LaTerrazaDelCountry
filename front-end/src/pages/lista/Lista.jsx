import './Lista.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Lista = ({type}) => {
  return (
    <div className='lista'>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <Header type={type}/>            
          </main>
        </div>
      </div>
    </div>
  )
}

export default Lista