// Variables
const formulario = document.querySelector('#formulario');
const listaTeets = document.querySelector('#lista-tweets');
let tweets = [];  //!Arreglo vacio para almacenar tweets

//Event Listeners

eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet)
}


// Functions
function agregarTweet(e) {
    e.preventDefault();

    console.log('Agregando Tweet');
}