/************** ( '// Variables' ) **************/
const formulario = document.querySelector('#formulario');
const listaTeets = document.querySelector('#lista-tweets');
let tweets = [];  //!Arreglo vacio para almacenar tweets


/************** ( '//Event Listeners' ) **************/
eventListeners();
function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet) //!fn de boton submit

    //cuando el document esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets') ) || [];
        crearHTML();
    })
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // despues de agregado se crea el html
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
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
        mensajeError.remove();
    }, 3000);
}

//Muestra listado tweets
function crearHTML() {
    limpiarHTML(); //! Limpia el html

    if(tweets.length > 0){
        tweets.forEach ( tweet =>  {
            //agregar boton eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X';

            // Añadir fn de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear html
            const li = document.createElement('li');
            //add text
            li.textContent = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            // insertarlo
            listaTeets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//agrega tweets al storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Eliminar Tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

//limpiar html 
function limpiarHTML() {
    while(listaTeets.firstChild) {
        listaTeets.removeChild(listaTeets.firstChild);
    }
}

