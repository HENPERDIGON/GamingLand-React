import { useState } from "react"
import './ItemCount.css';
const ItemCount= ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count<stock){
            setCount(count + 1)
        }
    }
    const decrement= () => {
        if(count> initial) {
            setCount(count - 1)
        }
    }


    return (
        <div className="contCount">
            <div className="contBtnCount">
                <button className="btn" onClick={decrement}>-</button>
                <p className="countP">{count}</p>
                <button className="btn" onClick={increment}>+</button>
            </div>
            
            <button className="btnAdd"  onClick={()=>onAdd(count)}>Add to Cart</button>
        </div>
    )
}

export default ItemCount