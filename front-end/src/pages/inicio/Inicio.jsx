import './Inicio.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';

const Inicio = () => {
  return (
    <div className='inicio'>
      <Navbar />
      <div id="layoutSidenav" className='container'>
        <Sidebar />
        <div id="layoutSidenav_content">
          <div className="widgets">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio