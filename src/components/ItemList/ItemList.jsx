import React from 'react'
import { Item } from "../Item/Item";

export const ItemList = ({products=[]}) => {
  return (
    <div>
        <h3>Nuestros Productos</h3>
        {products.map((item) => <Item {...item} key={item.id}/>)}
    </div>
  )
}
