import { useState, useEffect } from "react"
import {getProductById } from "../../services/firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const[products, setProducts] = useState()

    const{id}= useParams()
    

    useEffect(()=> {
        getProductById(id).then(prod=> {
            setProducts(prod)
        })
    }, [id])
    

    return(
        <div>
            <ItemDetail {...products} />
        </div>
    )

}

export default ItemDetailContainer