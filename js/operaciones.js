

function operacionSuma() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var resultado = 0;

    resultado = parseFloat(primerValor) + parseFloat(segundoValor);

    casillaResultado = document.getElementById("resultadoOperacionesSimples").value = resultado;


}

function operacionResta() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var resultado = 0;

    resultado = parseFloat(primerValor) - parseFloat(segundoValor);

    casillaResultado = document.getElementById("resultadoOperacionesSimples").value = resultado;


}

function operacionMultiplicacion() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var resultado = 0;

    resultado = parseFloat(primerValor) * parseFloat(segundoValor);

    casillaResultado = document.getElementById("resultadoOperacionesSimples").value = resultado;


}

function operacionDivision() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var resultado = 0;

    resultado = parseFloat(primerValor) / parseFloat(segundoValor);

    casillaResultado = document.getElementById("resultadoOperacionesSimples").value = resultado;


}


function operacionPotencia() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var resultado = 0;

    resultado =  Math.pow( parseFloat( primerValor ), parseFloat( segundoValor ) );

    casillaResultado = document.getElementById("resultadoOperacionesSimples").value = resultado;


}


function operacionSin() {
    valor = document.getElementById("valorOperacionTrigonometrica").value;

    var resultado = 0;

    resultado = Math.sin( parseFloat( valor ) );

    casillaResultado = document.getElementById("resultadoTrigonometrica").value = resultado;

}

function operacionCos() {
    valor = document.getElementById("valorOperacionTrigonometrica").value;

    var resultado = 0;

    resultado = Math.cos( parseFloat( valor ) );

    casillaResultado = document.getElementById("resultadoTrigonometrica").value = resultado;

}


function operacionTan() {
    valor = document.getElementById("valorOperacionTrigonometrica").value;

    var resultado = 0;

    resultado = Math.tan( parseFloat( valor ) );

    casillaResultado = document.getElementById("resultadoTrigonometrica").value = resultado;

}



