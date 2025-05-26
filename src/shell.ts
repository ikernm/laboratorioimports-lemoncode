import "./style.css";

import {
    contenedorBotones,
    botonDameCarta,
    botonMePlanto,
    botonNuevaPartida,
    dameCarta,
    mePlanto,
    nuevaPartida,
    probar
} from "./ui";

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", () => {
        dameCarta();
    })
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", () => { 
        mePlanto();
    })
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", () => {
        nuevaPartida();
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const botonProbar = document.createElement("button");
    botonProbar.textContent = "¿Quieres seguir probando?";
    botonProbar.classList.add("boton");
    botonProbar.id = "boton-probar";
    botonProbar.style.display = "none";

    if (contenedorBotones && contenedorBotones instanceof HTMLDivElement) {
        contenedorBotones.appendChild(botonProbar);
    }

    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.addEventListener("click", () => {
            probar();
        });
    };
})