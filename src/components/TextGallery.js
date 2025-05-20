import React, { useState } from 'react';
import './TextGallery.css';

const TextGallery = () => {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "Siempre tú",
      content: "Siempre fuiste el sonido de las olas que calma mi corazon cuando los vientos de la vida golpean fuerte.",
      author: "RapsodAz"
    },
    {
      id: 2,
      title: "Odisea",
      content: "No se como llegamos al punto donde necesite de ti para poder sonreir, donde todo lo que pasamos no fue mas que un efimero adios que nunca supimos pronunciar.",
      author: "RapsodAz"
    },
    {
      id: 3,
      title: "Olvido en la avenida corazon",
      content: "Y asi fue, nos olvidamos, aun sabiendo que siempre nos recordariamos, aun sabiendo que siempre nos amariamos, nos olvidamos recordando que todo lo que un dia fue, siempre sera.",
      author: "RapsodAz"
    },
    {
      id: 4,
      title: "Aunque asi parece...",
      content: "Te he de comprender y has de saber que siempre supe que aunque lo nuestro parecia amor, tan solo era una pequeña brisa que me hizo sentir de nuevo vivo, pues sabia que brisa eras en mi vida y las brisas solo pasan y se van, por eso cuando la sientes, la disfrutas, la haces tuya y ella te hace suyo, asi de facil..",
      author: "RapsodAz"
    },
    {
      id: 5,
      title: "Dulce primavera nostalgica",
      content: "Muchas veces he pensado que nunca quisiste que me quedara con tu aroma, muchas veces he pensado que nunca me quisiste en tu coleccion de colores maravillosos. ¿Acaso fue asi, nunca me quisiste?",
      author: "RapsodAz"
    },
    {
      id: 6,
      title: "RapsodAz",
      content: "Si... yo soy aquel poeta que escribio los versos mas hermosos, pero ahora simplemente soy recuerdos y es lo mas triste.",
      author: "RapsodAz"
    }
  ]);

  return (
    <div className="text-gallery">
     <h1>Bienvenidos</h1> 
      <h1>Mis pobres versos y yo(rapsodaz)</h1>
      <div className="text-container">
        {texts.map((text) => (
          <div key={text.id} className="text-card">
            <h2>{text.title}</h2>
            <p>{text.content}</p>
            <p className='text-author'>{text.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextGallery;
