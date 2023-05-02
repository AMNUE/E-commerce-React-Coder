import React, { useEffect, useState } from "react";
import { pedirProducts } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const {categoryId} = useParams()
    

    useEffect(() =>{
        setLoading(true);
        pedirProducts()
            .then((res) =>{

                if(categoryId){
                setItems(res.filter(prod => prod.category === categoryId) )
                } else {
                    setItems(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(()=>{setLoading(false)})

    }, [])
    
    
    
    
    
    return (
        <>
        {
            loading
            ?<h2>Cargando...</h2>
            :<ItemList products={items}/>
        }
        
        </>    
    )
}