/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Herts
 * 2S = Two of Spades
 *
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const conteoPuntos = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#Jugador-cartas');
const divCartasComputador = document.querySelector('#computadora-cartas');

const crearDek = () =>{
    for (let i=2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for (let especial of especiales){
        for(let tipo of tipos){
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}


crearDek();

const pedirCarta = () => {

    if (deck.length === 0 ){
        throw 'Noy hay cartas deck '
    }
    const carta = deck.pop();
    // console.log(deck);
    // console.log(carta);
    return carta;
}


const valorCarta = ( carta ) => {
    // Ya que en Js todos los string se
    // Se pueden manejar como arreglos la
    // siguiente linea extrae el valor numerico de
    // las cartas quitando la ultima posicion
    // del string, es decir el caracter que corresponde
    // al tipo.
    const valor = carta.substring (0,carta.length-1)
    // isNaN entrga true si el valor del parametro
    //NO es numerico
    return isNaN(valor) ?
        ( valor === 'A' ? 11:10) :valor*1;
}


const turnoComputadora =(puntosMinimos) =>{
    do {
        const carta               = pedirCarta();
        puntosComputadora        += valorCarta(carta);

        conteoPuntos[1].innerHTML =puntosComputadora

        const imgCarta = document.createElement('img');
        imgCarta.src   = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputador.append(imgCarta);

        if( puntosMinimos >21 ){
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() =>{

        if (puntosJugador>21){
            alert('computadora gana !')
        }
        else if (puntosJugador ===21){
            alert("jugador gana !")
        }
        else if (puntosComputadora===21){
            alert("Computador gana !")
        }
        else if (puntosComputadora === puntosMinimos){
            alert('Empate !');
        }
        else if (puntosComputadora < 21 && puntosComputadora > puntosMinimos){

            alert("Computadora gana !");
        }
        else if (puntosJugador<21 && puntosMinimos> puntosComputadora){
            alert("JUgador gana !")
        }
        else if (puntosComputadora> 21){
            alert("Jugador gana !")
        }
        else{
            alert("Ta raro, eso no me lo esperaba")
        }
    },100);
}
// Eventos ..............................................

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    // console.log(carta);
    conteoPuntos[0].innerHTML=puntosJugador

    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21){
        console.warn('Paila perdio');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador);
    }
    else if (puntosJugador===21) {

        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador);

    }
});

btnDetener.addEventListener ('click',() => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click',() =>{

    console.clear();
    deck=[];
    deck=crearDek();

    puntosJugador=0, puntosComputadora = 0;
    conteoPuntos[0].innerHTML=puntosJugador;
    conteoPuntos[1].innerHTML=puntosComputadora;
    divCartasComputador.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});