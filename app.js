let numeroSecreto = 0;
let intentos = 0;
let numeroMinimo = 1;
let numeroMaximo = 5;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos}  ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{

        limpiarCaja();

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;

    }

    return;
}

function limpiarCaja(){
    //Es lo mismo que usar el querySelecotrById pero usando solo el querySelector, el # hace mencion que es por Id
    document.querySelector('#valorUsuario').value = '';
    //
}

function generarNumeroSecreto(numeroMinimo, numeroMaximo) {
    let numeroGenerado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos lo numeros
    if(listaNumerosSorteados.length == (numeroMaximo-numeroMinimo)+1){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{

        //Si el numero generado esta incluido en la lista hacemos una operacion, si no hacemos otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(numeroMinimo,numeroMaximo);
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indique un numero del ${numeroMinimo} al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto(numeroMinimo,numeroMaximo);
}

function reiniciarJuego(){

    //limpiar caja
    limpiarCaja();

    //condiciones Iniciales
    //Asignar mensajes iniciales
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function rangoMinMax(){
    return numeroMaximo-numeroMinimo;
}