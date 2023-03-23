// en JS todo son objetos excepto lso primitivos 
//todos los primitivos se pasan por valor
let a = 10;
let b=a;
a=30;
console.log({a,b})
//todos los objetos se pasan por referencia
// es decir cuando ud asigna una variable
// a un objeto realmente esta generando una referencia 
//a un espacion en memoria
//en el siguiente caso juan y ana son referencias
// al valor dentro de la misma refrencia en 
// memoria entonces hay la necesidad de romper
// esa referencia en el momento de crear 
// una nueva instancia de un objeto
// o mejor dicho asigna a una variable
// un objeto
//la forma recomendada por el instructor fernanado herrera
// i es usar ...(operador spread)
//ese tambien es el parametro rest pero eso es otro cuento

let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre='Ana'
// console.log({juan,ana})

// con spred seria asi
let juan2 = {nombre: 'Juan'};
let ana2 = {...juan};
ana2.nombre='Ana'
console.log({juan2,ana2});

const cambiarNombre =({...persona})=>{
    persona.nombre= 'Tony';
    return persona;
}
let peter ={nombre:'Peter'};
let tony = cambiarNombre(peter);

console.log({peter,tony});

//Arreglos

const frutas = ['Manzana','Pera','Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango')
console.table({frutas,otrasFrutas})