/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Herts
 * 2S = Two of Spades
 *
 */
const miModulo= (()=>{

    'use strict';

    let deck         = [];
    const tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];


    let puntosJugadores = [];

    // Referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');


    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        conteoPuntos = document.querySelectorAll('small');

    const inicializarJuego =(numJugadores = 2) => {

            deck=crearDek();

            puntosJugadores=[];
            for (let i =0; i< numJugadores; i++) {
                puntosJugadores.push(0);
            }
            conteoPuntos.forEach( elem => elem.innerHTML=0);
            divCartasJugadores.forEach( elem => elem.innerHTML='');

            btnDetener.disabled = false;
            btnPedir.disabled   = false;
        }

    const crearDek = () =>{
        deck = [];

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

        return  _.shuffle(deck);
    }




    const pedirCarta = () => {

        if (deck.length === 0 ){
            throw 'Noy hay cartas deck '
        }

        return deck.pop();
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


    // Turno: 0 =primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta,turno ) =>{

        puntosJugadores[turno]       += valorCarta(carta);
        conteoPuntos[turno].innerHTML = puntosJugadores[turno] ;
        return puntosJugadores[turno];

    }
    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src   = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }
    const deterMinarganador = ()=> {

        const [puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() =>{

            if(puntosMinimos===21){
                alert("Jugador gana")
            }
            else if (puntosComputadora === puntosMinimos){
                alert('Empate !');
            }
            else if ( puntosMinimos > 21){

                alert("Computadora gana !");
            }
            else if (puntosComputadora> 21){
                alert("Jugador gana !")
            }
            else if(puntosMinimos>puntosComputadora){
                alert("Jugador gana")
            }
            else{
                alert("Ta raro, eso no me lo esperaba")
            }
        },100);
    }

    const turnoComputadora =(puntosMinimos) =>{

        let puntosComputadora = 0;

        do {

            const carta               = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length-1)

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        deterMinarganador();

    }

    //.......................................................
    // Eventos ..............................................
    //.......................................................

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador=acumularPuntos(carta,0);
        
        crearCarta(carta, 0);

        if (puntosJugador > 21){
            console.warn('Paila perdio');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            console.log({puntosJugador});
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
        turnoComputadora(puntosJugadores[0]);
    });

    // btnNuevo.addEventListener('click',() =>{

    //     inicializarJuego();

    // });

    return {
        nuevoJuego: inicializarJuego
    };

})();