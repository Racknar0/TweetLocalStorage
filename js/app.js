/************** ( '// Variables' ) **************/
const formulario = document.querySelector('#formulario');
const listaTeets = document.querySelector('#lista-tweets');
let tweets = [];  //!Arreglo vacio para almacenar tweets


/************** ( '//Event Listeners' ) **************/
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet) //!fn de boton submit
}



/************** ( '// Functions' ) **************/
function agregarTweet(e) {
    e.preventDefault();

    // Text area donde se escribe
    const tweet = document.querySelector('#tweet').value; //!fn leer value
    
    //validacion
    if (tweet === ''){
        mostarError('Un tweet no puede ir vacio');
        return;    //! evita ejecutar mas
    }


}

//Mostrar mensaje de error
function mostarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
    //Insertarlo en el HTML
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();kh
    }, 3000);
}
