import React from 'react';

export default function Card(props) {
  return (
    <div className='Card text-center bg-dark p-3 rounded'>
      <div className='Card-body text-light'>
        <img src={props.image} alt='Imagen' style={{ width: '100%', height: '100%' }} />
        <h4 className='Card-title'> My title </h4>
        <p className='Card-text-secondary'>
          Contenido de la tarjeta
        </p>
        <a href='#!' className='btn btn-primary rounded-pill'>
          Comprar
        </a>
      </div>
    </div>
  );
}
