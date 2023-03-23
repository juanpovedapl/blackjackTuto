let diasDeLaSemana = {
    0:"Domingo",
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'JUeves',
    5:'Viernes',
    6:'Sabado'}

let fecha = new Date();
let diaDeLaSemana= fecha.getDay();
console.log({diaDeLaSemana});

console.log(diasDeLaSemana[diaDeLaSemana]|| "Dia no definido")