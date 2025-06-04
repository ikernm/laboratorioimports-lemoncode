export type EstadoPartida = 'Ganar' | 'Perder' | 'seguir_jugando';

interface Partida {
    puntos: number,
    estadoPartida: EstadoPartida,
}

export const partida: Partida = {
    puntos: 0,
    estadoPartida: 'seguir_jugando',
}

export const actualizarPuntos = (puntosSumados: number) => {
    partida.puntos = puntosSumados;
}
