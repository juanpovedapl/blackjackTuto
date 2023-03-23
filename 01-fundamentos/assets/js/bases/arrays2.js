let juegos =['zelda','mario','Metroid','Chrono']
let primero = juegos[0];
let ultimo = juegos[juegos.length-1]

console.log({primero,ultimo})

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
})

let personaje = {
    nombre :'Tony stark ',
    codeName : 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direcction: {
        zip: '10880, 90265',
        ubicacion: 'Malibu,cal'
    }
};

console.log(personaje);
console.log('Nombre ',personaje.nombre);
console.log('No. TRajes',personaje.trajes.length);
console.log('último traje',personaje.trajes[personaje.trajes.length-1]);
