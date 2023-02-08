class Player {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
    }
    saltar() {

    }
    correr() {

    }

    saludar() {
        return `Hola mi nombre es ${this._nombre} y mi sombrero es de color ${this._color}`;

    }
}



let player1 = new player('maria', 'rojo');
console.log(player1);

let player2 = new player('luigi', 'verde');
console.log(player2)

let nombre = "pedro";
let edad = 15;

console.log('Hola tu nombre es' + nombre + 'y tienes' + edad + 'años');

console.log(`Hola tu nombre es' + ${nombre} + 'y tienes' + ${edad} +'años`);


