import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import foto from "../../assets/img/logEcomerce.png"
import { Context } from '../../store/appContext';
import "./Navbar.css"


const Navbar = () => {
  const {carrito, logeado} = useContext(Context)
    return ( 
   <>
   {/* navbar */} 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className='logoNav' src= {foto} alt= "logo"/>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li>
            <Link to="proyectofinal/"><button className='botonMenu btn responsive'>HOME</button></Link>
            </li>
            <li >
            <Link  to="proyectofinal/pantalones"><button className='botonMenu btn' >PANTALONES</button></Link> 
            </li>
            <li >
              <Link to="proyectofinal/bermudas"><button className='botonMenu btn'> BERMUDAS </button></Link>
            </li>
          </ul>
            
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Busca tu producto" aria-label="Search"/>
            <button className="btn botonBuscar btn-dark" type="submit">BUSCAR</button>
          </form>
          
        </div>
      </div>
    </nav>

    {/* login */}

    <div className='login d-flex justify-content-end'>
      {logeado ?
        <div>

          {carrito.length > 0 ?
            <div className='d-flex'>
              <Link to="proyectofinal/carrito"><i className="bi bi-cart4"></i></Link> 
              <p className='carritoLength'>{carrito.length}</p>
            </div>
          :
          <Link to="proyectofinal/carrito"><i className="bi bi-cart4"></i></Link>}
        </div>
      :
      <div>
          <Link to="proyectofinal/Registrarse"><button className='btn btn-regis'> Registrate </button></Link>
          <Link to="proyectofinal/Login"><button className='btn btn-login'> Login </button></Link>
      </div>
      }
        
    </div>

          
</>
     );
}
 
export default Navbar;