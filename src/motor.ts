import { 
    dameNumeroAleatorio, 
    dameNumeroCarta, 
    damePuntosCarta, 
    puntos, 
    sumarPuntos, 
    actualizarPuntos
} from "./modelo";

import {
    obtenerUrlCarta, 
    mostrarPuntuacion, 
    mostrarCarta, 
    mostrarMensaje, 
    dameMensajeCuandoMePlanto,
    botonesInactivos,
    botonesActivos,
    ocultarBotonesPrincipales,
    activarBotonProbar,
    activarBotonesPrincipales,
    ocultarBotonProbar
} from "./ui";

export const nuevaPartida = () => {
    actualizarPuntos(0);
    mostrarPuntuacion(puntos);
    mostrarCarta("/src/images/back.jpg");
    mostrarMensaje("");
    botonesActivos();
    activarBotonesPrincipales();
    ocultarBotonProbar();
}

export const dameCarta = () => {
    const numeroAleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntosCarta = damePuntosCarta(carta)
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntos(puntosSumados);
    mostrarPuntuacion(puntosSumados);
    gameOver();
}

export const probar = () => {
    const numeroAleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntosSimulados = sumarPuntos(carta);
    mostrarMensaje(`La siguiente carta sería un ${carta} y habrías llegado a ${puntosSimulados} puntos.`);

    const botonProbar = document.getElementById('boton-probar')
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.disabled = true;
    }
}

export const mePlanto = () => {  
    const mensaje = dameMensajeCuandoMePlanto(puntos);
    mostrarMensaje(mensaje);
    botonesInactivos();
    ocultarBotonesPrincipales();
    activarBotonProbar();
}

export const gameOver = () => {
    if (puntos === 7.5) {
        mostrarMensaje("¡¡Has ganado🎉🎉!!");
        botonesInactivos();
    } else if (puntos > 7.5) {
        mostrarMensaje("Has obtenido " + puntos + " puntos. Has perdido🫣");
        botonesInactivos();
    }
}