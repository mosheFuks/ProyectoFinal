import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import './Promocion.css'
import { Link } from "react-router-dom"

const Promocion = () => {
    const { productos, setProductos, porDesc } = useContext(Context)
    const [ ofertas, setOfertas ] = useState([])


    useEffect (() => {
        setProductos(productos)
        setOfertas(productos.filter((produc) => produc.promocion))
    },[])
    

    

    return ( 
        <>
        {ofertas.length > 0 ?
            <div className='container'>
                <h2 className='text-center mb-5 txt-prin'>OFERTAS</h2>
                <div className='d-flex justify-content-center flex-wrap'>
                    {ofertas.map((oferta, index)=>(
                        <div className='my-3 mx-2 contenedorCardPantalon' key={index}>
                            <img src={require(`../../../assets/img/photo-white-background/${oferta.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                            <div className='d-flex justify-content-between'>
                                <div className='textoCards'>
                                    <h6 className='mt-2'>{oferta.texto}</h6>
                                    <h6 className='precio'>${oferta.precio - (oferta.precio * porDesc / 100)}</h6>
                                </div>
                                <div className='mt-3'>
                                <Link to={`/${oferta.id}`}><button className='btn btn-dark btnCards'>Ver mas</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        :

        ''
        }
        </>
     );
}
 
export default Promocion;