class Calculadora {
	
    constructor() {
        this.pantalla = "0";
        this.memoria = 0;
        this.reset = false;
    }

    añadirMemoria() {
    	this.memoria += parseInt(this.pantalla);
    	this.reset = true;
    }

    quitarMemoria() {
    	this.memoria -= parseInt(this.pantalla);
    	this.reset = true;
    }

    llamarMemoria() {
        if (this.pantalla == "0" || this.reset == true)
    		this.pantalla = this.memoria;
    	else
    	    this.pantalla += this.memoria;
    	this.mostrarSalida();
    }
	
	añadirNumero(numero) {
    	if (this.pantalla == "0" || this.reset == true)
    		this.pantalla = numero;
    	else
        	this.pantalla += numero;
        this.mostrarSalida();
        this.reset = false;
    }
	
	añadirOperacion(operacion) {
    	this.pantalla += operacion;
    	this.mostrarSalida();
    	this.reset = false;
    }
	
    realizarOperacion() {
    	this.pantalla = eval(this.pantalla);
    	this.mostrarSalida();
    	this.reset = true;
    }

    removeAll() {
    	this.pantalla = "0";
    	this.mostrarSalida();
    }
	
    mostrarSalida() {
    	document.getElementsByClassName("calculadora")[0].getElementsByTagName("p")[0].innerHTML = this.pantalla;
    }
	
}
var calculadora = new Calculadora();
calculadora.mostrarSalida();