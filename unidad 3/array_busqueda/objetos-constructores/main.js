let nombre = 'pedro';
let edad = 21;
let estudiante = true;
let fruta = 'manzana';


//let usuario = {
//

//agregar al objeto
//usuario.carrera = 'Desarrollo web';
//console.log(usuario);

//eliminar
//delete usuario.estudiante;
//console.log(usuario);

//********crear 2 objetos******

//let usuario = {
 //   nombre: 'ana',
   // edad: '27',
    //profesion: 'doctora',
//}
//console.log(usuario)

function usuario(nombre,edad,profesion){
    this._nombre = nombre ;
    this._edad = edad ,
    this._profesion = profesion
}
let usuario1 = new usuario ('Dan','18','diseño web')
console.log(usuario1)