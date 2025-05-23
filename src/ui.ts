export const botonDameCarta = document.getElementById("dame-carta");
export const botonMePlanto = document.getElementById("me-planto");
export const botonNuevaPartida = document.getElementById("nueva-partida");
export const elementoPuntuacion = document.getElementById("puntuacion");
export const elementoImagen = document.getElementById("carta");
export const elementoMensaje = document.getElementById("mensaje");

export const obtenerUrlCarta = (carta:number):string => {

    switch (carta) {
        case 1:
            return '/src/images/1_as-copas.jpg';
        case 2:
            return '/src/images/2_dos-copas.jpg';
        case 3:
            return '/src/images/3_tres-copas.jpg';
        case 4:
            return '/src/images/4_cuatro-copas.jpg';
        case 5:
            return '/src/images/5_cinco-copas.jpg';
        case 6:
            return '/src/images/6_seis-copas.jpg';
        case 7:
            return '/src/images/7_siete-copas.jpg';
        case 10:
            return '/src/images/10_sota-copas.jpg';
        case 11:
            return '/src/images/11_caballo-copas.jpg';
        case 12:
            return '/src/images/12_rey-copas.jpg';
        default:
            return '/src/images/back.jpg';
    }
}

export const mostrarPuntuacion = (puntos:number) => {
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement) {
        elementoPuntuacion.innerHTML = puntos.toString();
    }
}

export const mostrarCarta = (urlCarta:string) => {
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = urlCarta;
    }
}

export const mostrarMensaje = (mensaje:string) => {
    if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
        elementoMensaje.innerHTML = mensaje;
    }
}

export const dameMensajeCuandoMePlanto = (puntos: number) => {
    if (puntos < 5) {
        return "Has sido muy conservador.";
    } else if (puntos === 5) {
        return "Te ha entrado el canguelo, ¿eh?";
    } else if (puntos > 5 && puntos <= 7) {
        return "Casi casi...";
    } else if (puntos === 7.5) {
        return "¡Lo has clavado! ¡Enhorabuena!";
    } else {
        return "error!";
    }
}

export const botonesInactivos = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = true;
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = true;
    }
}

export const botonesActivos = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = false;
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = false;
    }
}

export const ocultarBotonesPrincipales = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement &&
        botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonDameCarta.style.display = "none";
            botonMePlanto.style.display = "none";
    }
}

export const activarBotonesPrincipales = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement &&
        botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonDameCarta.style.display = "block";
            botonMePlanto.style.display = "block";
    }
}

export const contenedorBotones = document.querySelector(".botones");

export const activarBotonProbar = () => {
    const botonProbar = document.getElementById('boton-probar');
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.style.display = "block";
    }
}

export const ocultarBotonProbar = () => {
    const botonProbar = document.getElementById('boton-probar');
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.style.display = "none";
    }
}