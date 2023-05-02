import React from 'react'
import { Item } from "../Item/Item";
import "./itemlist.css";

export const ItemList = ({products=[]}) => {
  return (
   
        <div className='container'>
            
            <h3>| Nuestros Productos</h3>
            <div className='fila'>
                {products.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
        
  )
}
