//Version 1 de la funcion
function crearPersonav1 (nombre, apellido ){
    return {
        nombre:nombre,
        apellido:apellido
    }
}
//version 2 de la funcion
function crearPersonav2 (nombre, apellido ){
    return {
        nombre,
        apellido
    }
}
// version3 de la funcion
const crearPersonav3 = (nombre, apellido )=>{
    return {
        nombre,
        apellido
    }
}
// version4 de la funcion pro tip
const crearPersonav4 = (nombre, apellido )=>({nombre,apellido})

// Tip para trabajar con los argumentos de las funciones
function impprimeArgumentos(){
    console.log(arguments);
}
//Ocurre que por defecto las funciones flecvhas no incluyen
//la capacidad de imprimir los argumentos con la palabra reservada
//arguments pero tiene los ...XXX que hace más o menos lo mismo
const imprimeArgumentos2 = (edad, ...args) => {
    return args;
}
//La siguiente linea nos permite almacenar los valores de
//los argumentos como un objeto llava:valor
const [casado,vivo,nombre,saludo] = imprimeArgumentos2(1,true,false,'Fernando','Hola');
console.log({casado,vivo,nombre,saludo})

//Tambien se puede reombrar la llave de ob objeto asi 
const {apellido:nuevoApellido}=crearPersonav4('Juanpis','Poveda');
console.log(nuevoApellido)

//Desestructuracion
const tony = {
    nombre :'Tony stark ',
    codeName : 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V','Hulkbuster'],

};
//si nuestro objeto tuviera 100 propiedades
//con este metodo habria que hacer 100 lineas lo cual no es muy practico

// const imprimePropiedades = (personaje) =>{
//     console.log("nombre ",personaje.nombre);
//     console.log("codeName ",personaje.codeName);
//     console.log("vivo ",personaje.vivo);
//     console.log("edad ",personaje.edad);
//     console.log("trajes ",personaje.trajes);
// }
// imprimePropiedades(tony)
//en edad =0 se esta asignanado unv valor por defecto en casod de que
// la propiedad no haya sido definicada  en el objeto
const imprimePropiedades = ({nombre,codeName,vivo,edad=0,trajes}) =>{
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}
imprimePropiedades(tony)
