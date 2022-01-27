import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"


const Login = () => {
    return ( 
        
        <div className='formRegis container-fluid bg-dark d-flex justify-content-center mt-4'>
            <div className='row container shadow formMapa'>
                <div className='col-6'>
                        <h4 className=' tituloLogin mt-5'>INICIA SESION</h4>
                        
                        <div className="mb-5">
                            <input type="email" className="form-control"  placeholder="correo electronico"/>
                            
                        </div>
                        <div class="row mb-3">
                            <input type="password" class="form-control" placeholder="Contraseña"/>
                        </div>
                        <div>
                            <button className="btn botonRegis mb-4" type="submit">Entrar</button>
                        </div>
                </div>
            </div>
        </div>
  
     );
}
 
export default Login;