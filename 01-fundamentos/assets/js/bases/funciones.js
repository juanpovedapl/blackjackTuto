function saludar(nombre){
	console.log(arguments); // esto imprime todos los argumentos
                         // Esta caracterisitica no está disponible en las funciones flecha
	console.log('Hola' + nombre);
}
const saludar2 = function(nombre) {
	console.log('Hola' + nombre);
}
const saludarFlecha = () =>{
	console.log("Hola Flecha")
}

const saludarFlecha2 = (nombre) =>{
	console.log("Hola Flecha" + nombre)
}
saludar('Fernando',40,true,"Costa Rica");//aqui se estan mandando argumentos que no 
// fueron declarados en la construction
// esto es raro, pero no genera errores

saludarFlecha();
saludarFlecha2('Pedro');

function sumar(a,b){
    return a+b;
}

const sumar2=(a,b) =>{
    return a+b;
}
// Si el cuerpo de la funcion flcha esta constituido
// por una sola linea entonces
const sumar3=(a,b) =>  a+b;
