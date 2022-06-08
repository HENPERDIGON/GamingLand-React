import {getDocs, collection, query, where, doc, getDoc, Timestamp, writeBatch, addDoc, documentId} from 'firebase/firestore'
import { firestoreDb } from './index'
import { createAdaptedCat  } from '../../adapter/categories'



export const getProducts  = (typeId) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = typeId
        ? query(collection(firestoreDb, 'products'), where('category', '==', typeId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot =>{
            const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
            
        })
            resolve(products)
            
    }).catch(error => {
        reject(error)
    })
})
}



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', id)
    
        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
}


export const getCategories = () => {
    return new Promise((resolve,reject) =>{
        const collectionRef= collection(firestoreDb, 'category')
        
        getDocs(collectionRef).then(querySnapshot=>{
            const categories= querySnapshot.docs.map(doc=>{
                return createAdaptedCat(doc)
            })
            resolve(categories)
        }).catch(error=>{
            reject(error)
        })
    })
}

//Creamos Orden de compra

export const createOrderModifyStock = (cart,objOrder) => {
    return new Promise((resolve, reject)=> {
        const objWithTimestamp= {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }

        const batch= writeBatch(firestoreDb)
        const outStock= []

        const ids= cart.map(prod=> prod.id)
        const collectionRef= collection(firestoreDb, 'products')

        getDocs(query(collectionRef,where(documentId(),'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc =doc.data()
                    const prodQuantity= objOrder.items.find(prod=>prod.id === doc.id).quantity

                    if (dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    }else {
                        outStock.push({id: doc.id, dataDoc})
                    }
                })
            }).then(()=>{
                if(outStock.length === 0){
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objWithTimestamp)
                }else{
                    return Promise.reject({name: 'outStock', products: outStock})
                }
            }).then(({id})=>{
                batch.commit()
                resolve(id)
            }).catch(error=>{
                reject(error)
            })
    })
}