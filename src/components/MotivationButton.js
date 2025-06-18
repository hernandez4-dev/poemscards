import React, { useState } from 'react';
import './MotivationButton.css';

const mensajesPositivos = [
    "Eres más fuerte de lo que crees 💪",
    "Cada día es una nueva oportunidad para brillar ✨",
    "Tu sonrisa ilumina el mundo 🌟",
    "Eres capaz de lograr todo lo que te propongas 🎯",
    "Tu corazón es tu mayor superpoder ❤️",
    "Eres únic@ y especial, nunca lo olvides 🌈",
    "La vida te sonríe porque tú le sonríes 😊",
    "Eres el autor de tu propia historia 📖",
    "Cada paso que das te acerca a tus sueños 🌙",
    "Tu presencia hace del mundo un lugar mejor 🌍",
    "La perseverancia es la clave del éxito 🔑",
    "Cree en ti mismo y todo será posible 🌈",
    "El futuro pertenece a quienes creen en la belleza de sus sueños 🌌",
    "No te rindas, cada paso cuenta 🚶‍♂️",
    "La felicidad se encuentra en las pequeñas cosas 🍀",
    "Eres capaz de lograr grandes cosas 🌠",
    "La vida es un viaje, disfrútalo 🚀",
    "Cada día es una nueva página en tu historia 📖",
    "La actitud positiva es contagiosa 😊",
    "Sigue tus sueños, ellos saben el camino 🌟",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día 📈",
    "La confianza en uno mismo es el primer secreto del éxito 🗝️",
    "Haz lo que amas y nunca trabajarás un día en tu vida ❤️",
    "Los grandes logros requieren tiempo y paciencia ⏳",
    "La vida es mejor cuando sonríes 😄",
    "Cada error es una oportunidad para aprender 📚",
    "La felicidad no es un destino, es una forma de viajar 🚗",
    "Eres el arquitecto de tu propio destino 🏗️",
    "La vida comienza al final de tu zona de confort 🌍",
    "No cuentes los días, haz que los días cuenten 📅",
    "La gratitud transforma lo que tenemos en suficiente 🙏",
    "El cambio es el primer paso hacia el crecimiento 🌱",
    "La vida es un espejo y te devuelve lo que das 🪞",
    "Cada día es una nueva oportunidad para ser mejor 🌅",
    "La felicidad es un estado mental, elige ser feliz 😊",
    "No importa cuán lento vayas, siempre y cuando no te detengas 🐢",
    "La vida es un regalo, disfrútalo 🎁",
    "El amor propio es el comienzo de un romance para toda la vida 💖",
    "Las dificultades son oportunidades disfrazadas 🎭",
    "La pasión es la energía que te impulsa hacia adelante 🔥",
    "El éxito es la mejor venganza 💼",
    "La vida es corta, sonríe mientras aún tengas dientes 😁",
    "Cada día es una nueva oportunidad para aprender algo nuevo 📖",
    "La felicidad es un viaje, no un destino 🛤️",
    "Eres más valiente de lo que piensas 🦁",
    "La vida es un lienzo, pinta tu propia obra maestra 🎨",
    "La esperanza es el sueño de los que están despiertos 🌙",
    "No dejes que nadie apague tu luz 💡",
    "La vida es un eco, lo que envías regresa 📣",
    "El optimismo es la fe que conduce al logro 🌞",
    "Cada día es una nueva oportunidad para ser feliz 🌻",
    "La vida es un viaje, no un destino 🚢",
    "La verdadera felicidad se encuentra en el presente ⏰",
    "Eres capaz de hacer cosas increíbles 🌟",
    "La vida es un desafío, enfréntalo con valentía 🛡️",
    "La sonrisa es el idioma universal de la bondad 🌍",
    "Cada día es una nueva oportunidad para empezar de nuevo 🌅"
];

function MotivationButton(){
    const [mensajeVisible, setMensajeVisible] = useState(false);
    const [mensajeActual, setMensajeActual] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    const mostrarMensajePositivo = () => {
        const mensajeAleatorio = mensajesPositivos[Math.floor(Math.random() * mensajesPositivos.length)];
        setMensajeActual(mensajeAleatorio);
        setMensajeVisible(true);
        setFadeOut(false);
        
        // Iniciar desvanecimiento después de 7 segundos
        setTimeout(() => {
            setFadeOut(true);
        }, 7000);
        
        // Ocultar completamente después de 8 segundos (1 segundo de desvanecimiento)
        setTimeout(() => {
            setMensajeVisible(false);
            setFadeOut(false);
        }, 8000);
    };

    return(
        <div className="motivation-container">
            <button className="btn-positivo" onClick={mostrarMensajePositivo}>
            Presiona para recibir un mensaje especial para ti💝
            </button>
            
            {mensajeVisible && (
                <div className={`mensaje-positivo ${fadeOut ? 'fade-out' : ''}`}>
                    <p>{mensajeActual}</p>
                </div>
            )}
            
        </div>
    );
}

export default MotivationButton; 