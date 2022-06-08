import './cartWidget.css';
import ContextCart from "../../context/CartContext";
import {useContext} from 'react'

function CartWidget(){
    const {getQuantity} = useContext(ContextCart)
    
    return(
        <div className="cartWidget">
            <p className="cartWidgetP">{ getQuantity() }</p>
            <img src="../img/carrito-de-compras.png" alt="Carrito" className="cartWidgetImg"/>
        </div>
    )
}

export default CartWidget;