import React, { useEffect, useState } from 'react';
import { pedirProducts } from '../../helpers/pedirProductos';
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  
    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(false);

    const {itemId} = useParams()

    useEffect(() =>{    

        setLoading(true)
        pedirProducts()
            .then(res =>{
                setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })


    },[itemId])
  
  
  
  
    return (
    <section>
        {
            loading
            ?<h3>Cargando...</h3>
            :<ItemDetail {...item}/>
        }




    </section>
  )
}
