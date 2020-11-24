class Datos {
	constructor(ciudad, contenedor) {
		this.contenedor = contenedor;
		var key = "e02022059dd55b4fcea037da09c82635";
        var pais = "ES";
        var unidades = "&units=metric";
        var idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" 
        	+ ciudad + "," + pais + unidades + idioma + "&APPID=" + key;
	}
	
	pedirDatos() {
		$.ajax({
			dataType: "json", 
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

		html += "<img src='http://openweathermap.org/img/w/" + datos.weather[0].icon + ".png' alt='Icono " + datos.weather[0].description + "'</img>"
		html += "<h1>" + datos.name + "</h1>";

		return html;
	}

	_getCuerpoDatos(datos) {
		var html = "<dl>";

		html += "<dt>Temperatura</dt>";
		html += "<dd>" + datos.main.temp + "</dd>";
		
		html += "<dt>Nubes</dt>";
		html += "<dd>" + datos.clouds.all + " %</dd>";

		html += "<dt>Humedad</dt>";
		html += "<dd>" + datos.main.humidity + " %</dd>";

		html += "<dt>Viento(m/s)</dt>";
		html += "<dd>" + datos.wind.speed + "</dd>";

		html += "<dt>Amanecer</dt>";
		html += "<dd>" + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</dd>";

		html += "<dt>Atardecer</dt>";
		html += "<dd>" + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</dd>";

		html += "<dt>Coordenadas</dt>";
		html += "<dd>Latitud: " + datos.coord.lat + "</dd>";
		html += "<dd>Longitud: " + datos.coord.lon + "</dd>";

		return html + "</dl>";
	}

}

var contenedor = $("main");
new Datos("Llanes", contenedor).pedirDatos();
new Datos("El Berrón", contenedor).pedirDatos();
new Datos("Langreo", contenedor).pedirDatos();