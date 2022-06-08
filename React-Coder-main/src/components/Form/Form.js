import './form.css'
import { useState, useContext } from "react"
import ContextCart from "../../context/CartContext"
import { Link } from "react-router-dom"
import { createOrderModifyStock } from "../../services/firebase/firestore"

const Formulario =()=> {
    const{cart, priceGlobal, clearCart} = useContext(ContextCart);
    
    const [purchase, setPurchase] = useState(false)
    const [datos, setDatos] = useState({
        name:"",
        dni:"",
        telefono:"",
        email:"",
        direccion:"",
    })
    const[loading, setLoading]= useState(false)
    
    const [orderId, setOrderId] = useState(null)
    
    const formE =(e)=>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    
    const submit= (e)=>{
        e.preventDefault();
        createOrder()
    }
    
    
    const createOrder = () =>{
        setLoading(true)
        const objOrder={
        buyer:{
            name: datos.name,
            dni: datos.dni,
            telefono: datos.telefono,
            email: datos.email,
            direccion: datos.direccion
        },
        items: cart,
        total: priceGlobal() 
        }

        createOrderModifyStock(cart,objOrder).then(id => {
            clearCart()
            setOrderId(id)
        }).catch((error)=>{
            
            console.log(error)

        }).finally(()=>{
            setPurchase(true)
            setLoading(false)
        })
    }
    if (loading){
        return <h2 className="loading">Su orden se esta procesando, Gracias por comprar con nosotros</h2>
    }

    if(orderId){
        return <div className='comprobante'>
                    <h2 className='compT'>Este es su comprobante:</h2>
                    <p className='compId'>{orderId}</p> 
                    <p className='compP'>No olvide guardarlo, por cualquier consulta o reclamo</p>
                    <Link to='/' className='cardBtn'>Volver a la tienda</Link>
                </div>
    }

    
    return(
         <div className='form'>
                        <form onSubmit={submit} className='formulario'>
                        <h2 className='titleForm'>Ingrese sus datos para finalizar su compra</h2>
                            
                            <input className='input' type="text" name="name" placeholder="Nombre:" onChange={formE} value={datos.name} required/>
                            
                            <input className='input' type="number" name="dni" placeholder="DNI:" onChange={formE} value={datos.dni} required />
                            
                            <input className='input' type="number" name="telefono" placeholder="Telefono:" onChange={formE} value={datos.telefono} required />
                            
                            <input className='input' type="email" name="email" placeholder="ejemplo555@gmail.com" onChange={formE} value={datos.email} required />

                            <input className='input' type="text" name="direccion" placeholder="Direccion" onChange={formE} value={datos.direccion} required />
                            
                            <button type="submit" className='cardBtn' >Finalizar compra</button>
                        </form>
                        <ul className='detailUl'>
                        <h2 className='detail'>Detalle:</h2>
                            {cart.map(prod=> <li key={prod.id} className='datailLi'>
                                <p className='detailT'>{prod.name}</p>
                                <p className='detail2'>{prod.quantity}</p>
                                <p className='detailT'>{prod.quantity * prod.price}</p>
                            </li>)}
                        <p className='detail'>Valor total de su compra: ${priceGlobal()}</p>
                        </ul>

        </div>
    )
}

export default Formulario
