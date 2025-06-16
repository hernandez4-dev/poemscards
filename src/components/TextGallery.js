import React, { useState } from 'react';
import './TextGallery.css';

const TextGallery = () => {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "Siempre tú",
      content: "Siempre fuiste el sonido de las olas que calma mi corazón cuando los vientos de la vida golpean fuerte.",
      author: "RapsodAz",
      isNew: false
    },
    {
      id: 2,
      title: "Odisea",
      content: "No sé cómo llegamos al punto donde necesité de ti para poder sonreír, donde todo lo que pasamos no fue más que un efímero adiós que nunca supimos pronunciar.",
      author: "RapsodAz"
    },
    {
      id: 3,
      title: "Olvido en la avenida corazón",
      content: "Y así fue, nos olvidamos, aun sabiendo que siempre nos recordaríamos, aun sabiendo que siempre nos amaríamos, nos olvidamos recordando que todo lo que un día fue, siempre será.",
      author: "RapsodAz"
    },
    {
      id: 4,
      title: "Aunque así parece...",
      content: "Te he de comprender y has de saber que siempre supe que aunque lo nuestro parecía amor, tan solo era una pequeña brisa que me hizo sentir de nuevo vivo, pues sabía que brisa eras en mi vida y las brisas solo pasan y se van, por eso cuando la sientes, la disfrutas, la haces tuya y ella te hace suyo, así de fácil..",
      author: "RapsodAz"
    },
    {
      id: 5,
      title: "Dulce primavera nostálgica",
      content: "Muchas veces he pensado que nunca quisiste que me quedara con tu aroma, muchas veces he pensado que nunca me quisiste en tu colección de colores maravillosos. ¿Acaso fue así, nunca me quisiste?",
      author: "RapsodAz"
    },
    {
      id: 6,
      title: "Nada y todo",
      content: "Sí... yo soy aquel poeta que escribió los versos más hermosos, pero ahora simplemente soy recuerdos y es lo más triste.",
      author: "RapsodAz"
    },
    {
      id: 7,
      title: "RapsodAz",
      content: "Yo soy el verso que nunca leyeron tus ojos, la brisa que nunca pudo acariciar tu rostro, yo soy y aun así sé que no soy nada.",
      author: "RapsodAz",
      isNew: true
    },
    {
      id: 8,
      title: "Simplemente días",
      content: "Hay días que nunca acaban... y si acaban no acaban como lo esperabas, acaban con alguna nostalgia que te rompe el corazón y se deshace el alma.",
      author: "RapsodAz",
      isNew: true
    },
    {
      id: 9,
      title: "Me gustas",
      content: "Me gusta tu forma de ver la vida, también tu forma de apreciar todas esas cosas que van más allá de nuestros ojos.",
      author: "RapsodAz",
      isNew: true
    },
    {
      id: 10,
      title: "Ahí en tus ojos.",
      content: "Ahí en tus ojos, donde siempre encuentro luz, ahí quiero estar por siempre, pero si no es mucho pedir mi amor, tan solo deja que me queme en las llamas de tu mirada, para poder sentirme vivo.",
      author: "RapsodAz",
      isNew: true
    },
    {
      id: 11,
      title: "Frustracion",
      content: "Hay personas que van frustradas de la vida, personas con vacios existenciales que van tratando de llenarlos viviendo vidas ajenas... Personas asi son mucho lo que restan y poco lo que suman.",
      author: "RapsodAz",
      isNew: true
    },
    {
      id: 12,
      title: "Locura",
      content: "Las constelaciones entre sus piernas y la aurora donde desemboca su cadera hacen de esta historia una locura verdaderamente placentera.",
      author: "RapsodAz",
      isNew: true
    }
  ]); 

  return (
    <div className="text-gallery">
      <h1>Bienvenidos</h1> 
      <h1>Mis pobres versos y yo(rapsodaz)</h1>
      <div className="text-container">
        {texts.map((text) => (
          <div key={text.id} className="text-card">
            <div className="text-card-header">
              <h2>{text.title}</h2>
              {text.isNew && <span className="new-tag">Nuevo poema</span>}
            </div>
            <p>{text.content}</p>
            <p className='text-author'>{text.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextGallery;
