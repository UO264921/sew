class AnalizadorDeFicheros {
	constructor(salida) {
		this.salida = salida;
		this.tipo = "";
		this.reader;
	}

	getDatosFichero(fichero) {
		if (fichero != undefined) {
			this.salida.children().each(function(){(this).remove();});
			this.mostrarDatosDelFichero(fichero);
		}
	}

	mostrarDatosDelFichero(fichero) {
		this.reader = new FileReader();
		var dateOptions = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
		var html = "<section>";
		html += "<p>Nombre del fichero: " + fichero.name + "</p>";
		html += "<p>Tamaño del fichero: " + fichero.size + "</p>";
		html += "<p>Fecha de la ultima modificacion: " + fichero.lastModifiedDate.toLocaleTimeString('es-ES', dateOptions) + "</p>";
		html += "<p>Tipo de fichero: " + fichero.type + "</p>";
		
		this.salida.append("<h2>Datos del fichero</h2>", html + "</section>");
		
		this.reader.onload = this.mostrarContenido.bind(this);
		this.reader.readAsText(fichero);
		
	}

	mostrarContenido() {
		var contenido = this.reader.result;
		this.salida.append("<h2>Contenido del fichero</h2>", "<pre>" + this.replaceChars(contenido) + "</pre>");
	}

	replaceChars(c) {
    	return String(c).replace(/</, '&lt;').replace(/"/, '&quot;').replace(/&/, '&amp;').replace(/>/, '&gt;');
	}
}

var analizador = new AnalizadorDeFicheros($("div"));