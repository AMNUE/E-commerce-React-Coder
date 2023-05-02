import React, { useEffect, useState } from 'react';
import { pedirProducts } from '../../helpers/pedirProductos';
import { ItemDetail } from "..ItemDetail/ItemDetail.jsx"

export const ItemDetailContainer = () => {
  
    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() =>{    

        setLoading(true)
        pedirProducts()
            .then(res =>{
                setItem(res)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })


    },[])
  
  
  
  
    return (
    <section>
        {
            loading
            ?<h3>Cargando...</h3>
            :<ItemDetail/>
        }




    </section>
  )
}
