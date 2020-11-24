class Mapa {
	constructor() {
		this.pos = {
			lat: 0,
			lng: 0
		};
	}

	mostrarPunto() {
		this.mapa = new google.maps.Map(document.getElementById('mapa'), {zoom: 12,center: this.pos});
    	this.getLocalizacion();
	}

	getLocalizacion() {
		navigator.geolocation.getCurrentPosition(this.mostrarme.bind(this));
	}

	mostrarme(position) {
		this.pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		var w = new google.maps.InfoWindow;
		w.setPosition(this.pos);
		w.setContent("Ahora estás en este punto");
		w.open(this.mapa);
		this.mapa.setCenter(this.pos);
	}
}

var mapa = new Mapa();