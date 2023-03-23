//entrar a un sitio web para consultar si un restaurante está 
//abirto hoy
const dia =6;
const horaActual=8;

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las xxx

// if (dia === 0||dia===6)
// if ([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura=9;
// }else{
//     console.log('Dia de la semana');
//     horaApertura = 11;
// }

horaApertura  =([0,6].includes(dia)) ? 9 : 11

// if (horaActual>=horaApertura){
//     mensaje='Está abierto';
//     horaApertura=9;
// }else{
//     mensaje=`Está cerrado, hoy abrimos a las ${ horaApertura}`;
// }
mensaje= (horaActual>=horaApertura)? `Esá abierto`:`Está cerrado, hoy abrimos a las ${ horaApertura}`;
console.log({horaApertura,mensaje})
