import React, { useEffect, useState } from 'react'

export const ItemList = () => {
    
    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() =>{
        setTimeout(() =>{
            fetch('./products.js')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false)
            });
        }, 2000)
    }, [])

   return (
        <div>
            <h2>Lista de Productos</h2>
            {
                isLoading ? (<p>Cargando Productos</p>):
                (<ul>
                    {products.map(product =>

                        <li key={product.id}>{product.name}, {product.price}, {product.description}</li>
                        
                    )}



                </ul>)
            }




        </div>
    )
}
