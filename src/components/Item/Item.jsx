import React from 'react';
import {Card} from 'react-bootstrap';
import "./item.css"


export const Item = ({id, description, price, image}) => {
  return (
    
    <div className='futuro-a'>
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='description'>{description}</Card.Title>
                <Card.Title className='price'>${price}</Card.Title>
            </Card.Body>
        </Card>
    </div>
  )
  
}
