import React from 'react';
import './Blog.css';

const poems = [
  
  { id: 1, 
    title: "Te vi...", 
    content: "Te vi tan callada, tan distante, como si algo en ti hubiera muerto, como si algo hiciera que tu ya no seas tu. Perdon por no haber estado cuando la tormenta lleno de nubes grises tu cielo, que a ciencia cierta es mi cielo tambien." },
  
    { id: 2, 
    title: "Viajamos", 
    content: "Viajamos, olvidamos, solamos y volvimo a viajar, fuimos sendero y destino, aventuras que no se podian crees, como  un juego de niños, nunca dejamos de creer, esos son los viajes que se graban por siempre en el siempre." },
  
    { id: 3, 
    title: "Ironica", 
    content: "Es ironica la vida, quien esta nunca es valorado, quien no esta es tomado en cuenta, es curioso, en la vida se valora todo hasta que ya no se tiene." },
  
    { id: 4, 
    title: "Esos dias...", 
    content: "De esos dias que solamente son dias... y no hay verso ni prosa que cubra de la lluvia de emociones que nos"
  },
  
    { id: 5, 
    title: "Amor ", 
    content: "Amor: Yo siempre te llamare 'mi amor' pues ha sido tanto lo que has dejado bordado en mi pecho que ni el paso del tiempo podra borrarlo...pero amor no olvides que el tiempo es un amigo de doble cara y  a veces lo que es de bien para uno puede ser lo contrario para el otro."
    },
  { id: 6, 
    title: "De tristezas... ", 
    content: "Tengo una tristeza que me rompe el corazon, siento que la pena es inmensa y a veces maldigo la situacion. Un suspiro ha volado hasta la cumbre del recuerdo, siento que todo ha acabado y he llegado al punto de sentirme poco cuerdo."
  },
  {
    id: 7,
    title: "Amor ",
    content: "Algun dia... cuando el mundo gire en direccion contraria y los girasoles hagan las funciones del sol, podre decirte, te he olvidado corazon. Mientras tanto... olvidemos recordarnos."
  },
  {
    id: 8,
    title: "Proximamente...",
    content: ""
  }
  
];

function Blog() {
  return (
    <div>
      
      <h2>Poem Collection</h2>
      <div className="blog-container">
      {poems.map(poem => (
        <article key={poem.id} className="poem">
          <h3>{poem.title}</h3>
          <p style={{ whiteSpace: 'pre-line' }} className='poem-content'>{poem.content}</p>
        </article>
      ))}
    </div>
    </div>
  );
}

export default Blog;
