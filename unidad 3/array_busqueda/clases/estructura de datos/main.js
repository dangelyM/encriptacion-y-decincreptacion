//class Pila{
//   constructor(){
this.Pila = [];
//    }
//
//agregar un elemento al final del array
//Push(item){
//   this.Pila.push(item);
//  return this.Pila;
//}
//Metodos para eliminar elemento
//pop(){
//  return this.Pila[this.Pila.length -1];
//}
//Metodo que retorna el cantidad de elementos del array
//elemento(){
//return this.Pila.length;
//}
//Muestre el contenido del array en la consola
//mostrar(){
//console.log(this.Pila);    
//}
// let abc = new Pila ();
// console.log(abc);
// console.log(abc.longitud());
// console.log(abc.push('naranja'));
// console.log(abc.push('manzana'));
// console.log(abc.longitud());
// abc.mostrar();
// console.log(abc.ultimovalor());
// abc.mostrar();
// abc.pop();
// abc.mostrar();
// console.log(abc.ultimovalor());


// class usuario{
//     constructor() {
//     this.usuario =[];
// }
// push(item){
//     this.usuario.push(item);
//     return this.usuario;

// }
// pop(){
//     return this.usuario.pop();

// }
// ultimovalor(){
//     return this.usuario[this.usuario.length -1];
// }
// longitud(){
//     return this.usuario.length;
// }
// mostrar(){
//     console.log(this.usuario);
// }

// }
// let usuarios = new usuario ()

// usuarios.mostrar();
// usuarios.push('pedro');
// usuarios.push('andres');
// usuarios.push('ana');
// usuarios.mostrar();

// //console.log(usuarios.pop());
// usuarios.pop();
// usuarios.mostrar();
//  console.log(usuarios.longitud());

// Ejemplo cola 
//=======================

//  class cola{
//     constructor(){
//         this.cola = [];
//     }
    // agregar(valor){
    //     this.cola.push(valor);
    //     return this.cola;
    // }
    // eliminar(){
    //     return this.cola.pop();
    // }
    // longitud(){
    //     return this.cola.length;
    // }
    // mostrar(){
    //     console.log(this.cola);
    // }

//  }
//  let prueba = new cola();
//  prueba.agregar('rojo')
//  prueba.agregar('verde')
//  prueba.agregar('azul')
//  prueba.agregar('amarillo')
//  prueba.agregar('negro')
//  prueba.mostrar();

//  prueba.eliminar();
//  prueba.mostrar();

//  console.log(prueba.longitud());
//  console.log(prueba.vacio());



//===============================
//    ESTRUCTURA MATRICES
//=============================

// let matriz1 = [20,'hola',1,2,""];
// console.log(matriz1);

// let matriz2 = [1,'linda',1,4,""];
// console.log(matriz2);

// let matriz3 = [20,'flor',1,23,""];
// console.log(matriz3);

//================================
//Ejemplo de arbol
//================================
class abc {
  constructor(abc) {
    this.abc = abc;
    this.array = [];
  }
 
}

let a = new abc(100000);
let b = new abc(99);
let c = new abc(100);
let d = new abc(676);
let e = new abc(2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

a._array.push(b);
b.array.push(c,d,e)
console.log(a)
console.log(b)



