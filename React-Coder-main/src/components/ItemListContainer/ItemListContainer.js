import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {  getProducts } from '../../services/firebase/firestore'
import ItemList from "../ItemList/ItemList"

function ItemlistContainer(){

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {typeId} = useParams()
    
    

    useEffect(()=>{
        
            setLoading(true)
            getProducts(typeId).then(produc => {
                setProducts(produc)
                
            }).catch(err => {
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        
        

        return (()=>{
            setProducts([])
            
        })
    }, [typeId],)

    if(loading){
        return <h2 className='loading'>Cargando...</h2>
    }

    if(products.length === 0){
        return <h2 className='prodNot'>Productos no disponibles por el momento.</h2>
    }

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemlistContainer