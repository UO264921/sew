class Datos {
	constructor(ciudad, contenedor) {
		this.contenedor = contenedor;
		var key = "e02022059dd55b4fcea037da09c82635";
        var pais = "ES";
		var tipo = "&mode=xml";
        var unidades = "&units=metric";
        var idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" 
        	+ ciudad + "," + pais + tipo + unidades + idioma + "&APPID=" + key;
	}
	
	pedirDatos() {
		$.ajax({
			dataType: "xml", 
			url: this.url, 
			method: 'GET', 
			success: this.mostrarDatos.bind(this),
		});
	}

	mostrarDatos(datos) {
		var html = "<div>";
		html += this._getCabeceraDatos(datos);
		html += this._getCuerpoDatos(datos);
		contenedor.append(html + "</div>");
	}

	_getCabeceraDatos(datos) {
		var html = "";

		html += "<img src='http://openweathermap.org/img/w/" + $('weather',datos).attr("icon") + ".png' alt='Icono " + $('weather',datos).attr("value") + "'</img>"
		html += "<h1>" + $('city',datos).attr("name") + "</h1>";

		return html;
	}

	_getCuerpoDatos(datos) {
		var html = "<dl>";

		html += "<dt>Temperatura</dt>";
		html += "<dd>" + $('temperature',datos).attr("value") + "</dd>";
		
		html += "<dt>Nubes</dt>";
		html += "<dd>" + $('clouds',datos).attr("value") + " %</dd>";

		html += "<dt>Humedad</dt>";
		html += "<dd>" + $('humidity',datos).attr("value") + " " + $('humidity',datos).attr("unit") + "</dd>";

		html += "<dt>Viento(m/s)</dt>";
		html += "<dd> " + $('speed',datos).attr("value") + " </dd>";

		var minutosZonaHoraria = new Date().getTimezoneOffset()
		
		html += "<dt>Amanecer</dt>";
		var amanecer = Date.parse($('sun',datos).attr("rise")) - minutosZonaHoraria * 60 * 1000;
		html += "<dd>" + new Date(amanecer).toLocaleTimeString() + "</dd>";
		
		html += "<dt>Atardecer</dt>";
		var atardecer = Date.parse($('sun',datos).attr("set")) - minutosZonaHoraria * 60 * 1000;
		html += "<dd>" + new Date(atardecer).toLocaleTimeString() + "</dd>";

		html += "<dt>Coordenadas</dt>";
		html += "<dd> Latitud: " + $('coord',datos).attr("lat") + "</dd>";
		html += "<dd> Longitud: " + $('coord',datos).attr("lon") + "</dd>";
		return html + "</dl>";
	}

}

var contenedor = $("main");
new Datos("Llanes", contenedor).pedirDatos();
new Datos("El Berrón", contenedor).pedirDatos();
new Datos("Langreo", contenedor).pedirDatos();
new Datos("Oviedo", contenedor).pedirDatos();
new Datos("Gijon", contenedor).pedirDatos();