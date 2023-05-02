import React, { useEffect, useState } from "react";
import { pedirProducts } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";



export const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    
    

    useEffect(() =>{
        setLoading(true);
        pedirProducts()
            .then((res) =>{
                setItems(res)
                console.log(res)
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