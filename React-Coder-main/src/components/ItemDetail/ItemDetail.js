import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import ContextCart from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({id, name,price,img,stock,description}) => {
    
    const [quantity, setQuantity] = useState (0)
    
    const {addItem} = useContext(ContextCart)

    const handleOnAdd = (count) => {
        
        setQuantity(count)
        addItem({id,name,price,img}, count)
    }
    
    return (
        <div className="contDetail">
            <div className="contDetailImg">
                <img src={img} alt="producto" className="Detailimg"/>
            </div>
            <div className="contDetailText">
            <h2 className="contDetailTitle">{name}</h2>
            <p className="contDetailP">{description}</p>
            <p className="DetailPrice">${price}</p>
            </div>
            <div>
                {quantity === 0 ? <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} /> : <Link to='/Cart' className="cardBtn"> Go to cart </Link>}
            </div>
        </div>
    )
}

export default ItemDetail