
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck  Ejemplo:['9H', 'QH', 'JC', 'AC', '8S', '10S']
 * @returns {String}  la ultima carta del  deck y la elimina del deck Ejemplo: '10S'
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}