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
    	this.mostrarSalida();;
    }
	
	añadirNumero(numero) {
    	if (this.pantalla == "0" || this.reset == true)
    		this.pantalla = numero;
    	else
        	this.pantalla += numero;
        this.mostrarSalida();;
        this.reset = false;
    }
	
	añadirOperacion(operacion) {
    	this.pantalla += operacion;
    	this.mostrarSalida();;
    	this.reset = false;
    }
	
	removeAll() {
    	this.pantalla = "0";
    	this.mostrarSalida();
    }
	
    realizarOperacion() {
    	this.pantalla = eval(this.pantalla);
    	this.mostrarSalida();
    	this.reset = true;
    }
	
	mostrarSalida() {
    	document.getElementsByClassName("calculadora")[0].getElementsByTagName("p")[0].innerHTML = this.pantalla;
    }
}

class CalculadoraCientifica extends Calculadora {
	
    constructor() {
        super();
    }
	
	clearAll() {
        this.removeAll();
        this.removeMemoria();
    }
	
	añadirOperacionAvanzada(operacion) {
        var op = operacion + "(" + this.getUltimoNumero() + ")";
        this.pantalla += op;
        this.mostrarSalida();
        this.reset = false;
    }

    añadirOperacionAvanzadaDerecha(operacion, segundo) {
        this.añadirOperacionAvanzadaAbierta(operacion);
        this.pantalla +=  segundo + ")";
        this.mostrarSalida();
    }
	
	añadirOperacionAvanzadaAbierta(operacion) {
        var op = operacion + "(" + this.getUltimoNumero() + ",";
        this.pantalla += op;
        this.mostrarSalida();
        this.reset = false;
    }

    añadirOperacionAvanzadaIzquierda(operacion, primero) {
        var op = operacion + "(" + primero + "," + this.getUltimoNumero() + ")";
        this.pantalla += op
        this.mostrarSalida();
        this.reset = false;
    }
	
	getUltimoNumero() {
        var i = this.pantalla.length - 1;
        while (i >= 0 && "+-*/%".indexOf(this.pantalla.charAt(i)) < 0)
            i--;
        i++
        var num = this.pantalla.substring(i);
        this.pantalla = this.pantalla.substring(0, i);
        return num;
    }
	
	borrarUltimo() {
        if (this.pantalla !== "0"){
			this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
			if (this.pantalla == "")
				this.pantalla = 0;
			super.mostrarSalida();
		}
    }
	
	masMenos() {
        if (this.pantalla.charAt(0) == '-')
            this.pantalla = this.pantalla.substring(1);
        else
            this.pantalla = "-" + this.pantalla;
    }

    fact(num) {
        var fact = 1;
        while (num > 1)
            fact *= num--;
        return fact;
    }
	
	borrarMemoria() {
        this.memoria = 0;
        this.mostrarSalida();
    }
	
	guardarMemoria() {
        this.realizarOperacion();
        this.memoria = parseInt(this.pantalla);
        this.mostrarSalida();
    }
	
	replace(funciones, reemplazo) {
        for (var i = 0 ; i < funciones.length ; i++)
            this.pantalla = this.pantalla.replace(funciones[i], reemplazo + "." + funciones[i]);
    }

    ajustarFuncionesMath() {
        this.replace(["sin", "cos", "tan", "sqrt", "log", "exp", "pow", "PI", "mod"], "Math");  
    }

    ajustarFuncionesPropias() {
        this.replace(["fact"], "this");
    }

    ajustarFunciones() {
        this.ajustarFuncionesMath();
        this.ajustarFuncionesPropias();
    }
	
	realizarOperacion() {
		this.ajustarFunciones();
    	super.realizarOperacion();
    }	
	
}

var calculadora = new CalculadoraCientifica();
calculadora.mostrarSalida();