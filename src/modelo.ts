export const dameNumeroAleatorio = () => {
    return Math.floor (Math.random() * 10) + 1;
}

export const dameNumeroCarta = (numeroAleatorio: number): number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio; 
}

export const damePuntosCarta = (carta: number): number => {
    if (carta > 7) {
        return 0.5;
    } else {
        return carta;
    }
}

export let puntos = 0;

export const sumarPuntos = (puntosCarta:number):number => {
    return puntos + puntosCarta;
}

export const actualizarPuntos = (puntosSumados:number) => {
    puntos = puntosSumados;
}