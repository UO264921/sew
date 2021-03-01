class Calculadora {
    constructor() {
        this.niveles = [];
        this.pila = [0];
        this.nuevo = true;
		this.count = 0;
    }

    añadirNivel(nivel) {
        this.niveles.push(nivel);
    }

    añadirNumeros() {
		for (var i = 0; i < niveles.length; i++){
			this.niveles[i].innerHTML = this.mostrarNivel(this.pila.length - this.niveles.length + i);
		}
    }
	
	mostrarNivel(indice) {
		if (indice < this.pila.length && indice >= 0)
			return this.pila[indice];
		else
			return 0;
    }

    añadirNumero(numero) {
        this.pila.push(numero);
    }

    getNumero() {
		if (this.pila.length == 0)
			return 0;
		else return parseFloat(this.pila.pop());
    }


    numero(numero) {
		if (typeof(numero) !== 'string')
            numero = numero.toString();
        if (this.pila[this.pila.length - 1] == 0)
            this.pila[this.pila.length - 1] = numero;
        else
            this.pila[this.pila.length - 1] += numero;
        this.añadirNumeros();
    }
	
	sumar() {
        this.añadirNumero(this.getNumero() + this.getNumero());
        this.añadirNumeros();
    }

    restar() {
        var y = this.getNumero();
        this.añadirNumero(this.getNumero() - y);
        this.añadirNumeros();
    }

    multiplicar() {
        this.añadirNumero(this.getNumero() * this.getNumero());
        this.añadirNumeros();
    }

    dividir() {
        var y = this.getNumero();
        this.añadirNumero(this.getNumero() / y);
        this.añadirNumeros();
    }
	
	seno() {
        this.añadirNumero(Math.sin(this.getNumero()));
        this.añadirNumeros();
    }

    coseno() {
        this.añadirNumero(Math.cos(this.getNumero()));
        this.añadirNumeros();
    }

    tangente() {
        this.añadirNumero(Math.tan(this.getNumero()));
        this.añadirNumeros();
    }

    raiz() {
        this.añadirNumero(Math.sqrt(this.getNumero()));
        this.añadirNumeros();
    }

    cuadrado() {
        this.añadirNumero(Math.pow(this.getNumero(), 2));
        this.añadirNumeros();
    }

    potencia() {
        var y = this.getNumero();
        this.añadirNumero(Math.pow(this.getNumero(), y));
        this.añadirNumeros();
    }

    log() {
        this.añadirNumero(Math.log(this.getNumero()));
        this.añadirNumeros();
    }

    clear() {
        this.pila = [0];
        this.añadirNumeros();
    }

    enter() {
        this.añadirNumero(0);
        this.añadirNumeros();
    }
	
	//<----------------------------------------------------------------
}

var calculadora = new Calculadora();
var niveles = document.getElementsByClassName("niveles")[0].getElementsByTagName("p");
for (var i = 1 ; i < niveles.length ; i += 2)
    calculadora.añadirNivel(niveles[i]);