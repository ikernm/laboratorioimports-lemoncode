import { partida } from "./modelo";

export const dameNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
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

export const sumarPuntos = (puntosCarta: number): number => {
    return partida.puntos + puntosCarta;
}

export const gestionarEstadoPartida = () => {
    if (partida.puntos === 7.5) {
        partida.estadoPartida = 'Ganar';
    } else if (partida.puntos > 7.5) {
        partida.estadoPartida = 'Perder';
    }

    return partida.estadoPartida;
}
