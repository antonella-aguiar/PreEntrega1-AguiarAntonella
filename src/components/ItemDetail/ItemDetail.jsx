import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos, aliquid cum accusamus magni, molestiae repellendus modi fugiat culpa quasi recusandae dolor magnam distinctio error nisi animi doloremque sunt assumenda?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail