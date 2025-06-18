import React, { useState } from 'react';
import './BlogTwo.css';

const poemstwo=[
    {
        id: 1,
        title: "Simplemente dias",
        content: "De esos dias que solamente son dias... y no hay verso ni prosa que cubra de la lluvia de emociones que nos atrapan.",
        author: "RapsodAz"
    },
    {
        id: 2,
        title: "Pasado el tiempo",
        content: "Me dolio el alma como nunca imagine, sangre a mares y el corazon moria, me dolia respirar y sentia la muerte del alma como un abrazo frio que no me queria soltar... Ha pasado el tiempo. ¡Sigo vivo!",
        author: "RapsodAz"
    },
    {
        id: 3,
        title: "Nunca",
        content: "Nunca fuimos tan felices como cuando olvidamos olvidarnos",
        author: "RapsodAz"
    },
    {
        id: 4,
        title: "Vidas",
        content: "Hay personas que no solo valen la pena, valen la sonrisa, valen los abrazos, los momentos tristes que con este tipo de personas se vuelven menos tristes. Esas personas valen la pena, valen la vida.",
        author: "RapsodAz"
    },
    {
        id: 5,
        title: "Un beso y un colibri",
        content: "Un beso, un suspiro, un solo verso, que emprenda vuelo cual colibri que vuela esperanzado a un cambio al final del arcoiris.",
        author: "RapsodAz"
    },
    {
        id: 6,
        title: "Querido amor mio",
        content: "¡Ay! Querido amor mio, hoy el dia ha traido en su afan, recuerdos que vienen y van de todas nuestras locuras y solo puedo decir que me he vuelto a sentir vivo.",
        author: "RapsodAz"
    },
    {
        id: 7,
        title: "Querer",
        content: "Los pajaros cuentan ciertas verdades que los arboles no quieren plasmar en sus hojas. ¡Ay quere! La vida a veces duele como herida que nunca sana. A veces las palabras son espinas que se llevan como corona en el corazon",
        author: "RapsodAz"
    },
    {
        id: 8,
        title: "Ama",
        content: "Al escribir la primera palabra de 'te extraño' se me hace hacen agua los ojos... quizas por eso he evitado escribirla por tanto tiempo. Pero si... te extraño, y mucho. Bueno al final pienso que todo es necesario, la tristeza, la alegria, la melancolia, en fin toda la ensalada de emociones que me inunda al recordar tu partida.",
        author: "RapsodAz"
    },
    {
        id: 9,
        title: "Diferencia",
        content: "Cualquier cosa que haces, hace la diferencia por minima que sea.",
        author: "RapsodAz"
    },
    {
        id: 10,
        title: "Primavera de mi existencia",
        content: "Dulce encanto eres en mi vida, eres la primavera que me adorna la existencia.",
        author: "RapsodAz"
    },
    {
        id: 11,
        title: "Fuimos",
        content: "Fuimos el olvido y la nada, dos almas en busca de todo. Fuimos ausencia y melancolia siendo seres de compañia.",
        author: "RapsodAz"
    },
    {
        id: 12,
        title: "Fuimos y no fuimos",
        content: "El tiempo se detuvo en las estrellas que forjaron el camino que haria que nuestros corazones se cruzaran. Fuimo testigos de un todo y un nada a la vez. El tiempo paso y la unica conviccion que tuvimos fue que fuiemos pero hasta ahi.",
        author: "RapsodAz"
    },
    {
        id: 13,
        title: "Quedaron pedazos de melancolia",
        content: "Me quedron versos sin terminar despues de tu partida, lagrimas que no limpiaron a totalidad todo el dolor que dejabas. Dicen que uno se acostumbra a todo, en la naturaleza del ser humano esta esa caracteristica, efectivamente hasta el dolor es algo a lo que el ser humano se acostumbra. ",
        author: "RapsodAz"
    },
    {
        id: 14,
        title: "Amarte",
        content: "Te amare con un impetu tan tascendental que llegue hasta el ultimo rincon del universo y que la luz nos ilumine en este caminar..",
        author: "RapsodAz"
    },
    {
        id: 15,
        title: "Perdi la inspiracion", 
        content: "Perdi la inspiracion y aun perdiendola vivo inspirado. Somos nuestras propias consecuencias. Los efectos del pasado, aun no se que es el olvido a ciencia cierta porque nunca te he olvidado.",
        author: "RapsodAz"
    },
];




function BlogTwo(){
    

    return(
        <div>
            <h2 className="blog-title">Heart Phrases</h2>
            
            <div className="blog-container">
                {poemstwo.map(poem => (
                    <article key={poem.id} className="poem">
                        <h2>{poem.title}</h2>
                        <p style={{ whiteSpace: 'pre-line' }}>{poem.content}</p>
                        <p>{poem.author}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default BlogTwo;