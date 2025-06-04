import { vi } from 'vitest';
import { EstadoPartida, partida } from './modelo';
import { dameNumeroAleatorio, dameNumeroCarta, damePuntosCarta, gestionarEstadoPartida } from './motor';

describe("dameNumeroAleatorio", () => {
    it("Debería de devolver un 3, cuando el número aleatorio es 0.2", () => {
        // Arrange
        const resultadoEsperado = 3;
        vi.spyOn(Math, 'random').mockReturnValue(0.2);

        // Act
        const resultado = dameNumeroAleatorio();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    });
});

describe('dameNumeroCarta', () => {
    it('debería de devolver 10, cuando el número aleatorio es un 8', () => {
        // Arrange
        const resultadoEsperado = 10;
        const aleatorio = 8;

        // Act
        const resultado = dameNumeroCarta(aleatorio)

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('debería de devolver un 5, cuando el número aleatorio es un 5', () => {
        // Arrange
        const resultadoEsperado = 5;
        const aleatorio = 5;

        // Act
        const resultado = dameNumeroCarta(aleatorio);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})

describe('damePuntosCarta', () => {
    it('debería de devolver 0.5, cuando la carta sea 10', () => {
        // Arrange

        const resultadoEsperado = 0.5;
        const carta = 10;

        // Act
        const resultado = damePuntosCarta(carta);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('debería de devolver 2, cuando la carta sea 2', () => {
        // Arrange

        const resultadoEsperado = 2;
        const carta = 2;

        // Act
        const resultado = damePuntosCarta(carta);

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})

describe('gestionarEstadoPartida', () => {
    it('debería de devolver seguir jugando, cuando los puntos de la partida sea menor a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'seguir_jugando';
        vi.spyOn(partida, 'puntos', 'get').mockReturnValue(5);

        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('debería de devolver ganar, cuando los puntos de la partida sea igual a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'Ganar';
        vi.spyOn(partida, 'puntos', 'get').mockReturnValue(7.5);

        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })

    it('debería de devolver perder, cuando los puntos de la partida sea mayores a 7.5', () => {
        // Arrange
        const resultadoEsperado: EstadoPartida = 'Perder';
        vi.spyOn(partida, 'puntos', 'get').mockReturnValue(10);

        // Act
        const resultado = gestionarEstadoPartida();

        // Assert
        expect(resultadoEsperado).toBe(resultado);
    })
})
