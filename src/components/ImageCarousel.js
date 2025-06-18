import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

// Las imágenes ahora están en public/img/
const images = [
  process.env.PUBLIC_URL + '/img/IMG_0019.PNG',
  process.env.PUBLIC_URL + '/img/IMG_0022.PNG',
  process.env.PUBLIC_URL + '/img/margarita.png',
  process.env.PUBLIC_URL + '/img/rosse.png',
  process.env.PUBLIC_URL + '/img/rossee.png'
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpieza del intervalo
  }, []);

  return (
    <div className="carousel-container">
      <h1>My Art</h1>
      <div>
        <img
          className="carousel-image"
          src={images[current]}
          alt={`Imagen ${current + 1}`}
        />
      </div>
      <p>{current + 1} / {images.length}</p>
    </div>
  );
}

export default ImageCarousel;
