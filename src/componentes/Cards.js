import React from 'react';
import Card from './Card';
import image1 from '../assetes/ab.png';
import image2 from '../assetes/b.png'; // Ruta de la segunda imagen
import image3 from '../assetes/c.png'; // Ruta de la tercera imagen

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        <div className='col-md-4'>
          <Card image={image1} /> {/* Pasar la primera imagen como prop */}
        </div>
        <div className='col-md-4'>
          <Card image={image2} /> {/* Pasar la segunda imagen como prop */}
        </div>
        <div className='col-md-4'>
          <Card image={image3} /> {/* Pasar la tercera imagen como prop */}
        </div>
      </div>
    </div>
  );
}
