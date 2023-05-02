import React from 'react';
import {Card} from 'react-bootstrap';
import "./item.css"
import { Link } from "react-router-dom"


export const Item = ({id, description, price, image, category}) => {
  return (
    
    <Link to={`/detail/${id}`} className='futuro-a'>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='description'>{description}</Card.Title>
                <Card.Title className='price'>${price}</Card.Title>
            </Card.Body>
        </Card>
    </Link>
  )
  
}
