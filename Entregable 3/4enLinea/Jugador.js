"use strict";

class Jugador{
    img;
    name;
    fichas = [];

    contructor(img, name, cant_fichas) {
        this.img = img;
        this.turno = false;
        this.name = name;
        this.chips = cargarFichas(cant_fichas, img);
    }

    setTurn(bool) {
        this.turno = bool;
    }
}