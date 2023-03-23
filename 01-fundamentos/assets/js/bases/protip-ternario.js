const elMayor = ( a,b )=>( (a>b)?a:b );
// la siguiente linea hace exatamente lo mismo que la linea anterior
const elMayo2 = ( a,b )=> a>b? a:b ;
console.log(elMayor(20,-100));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loki'
]
console.log(amigosArr);