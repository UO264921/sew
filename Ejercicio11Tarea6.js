class Mapa {
	constructor() {
		this.centro = {
			lat: 40.4167,
			lng: -3.70325
		};
	}

	cargarDatos() {
		$.ajax({
			dataType: "json", 
			url: "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/PostesMaritimos/",
			method: 'GET',
			success: this.cargarMapa.bind(this),
			error: function(){
				alert("No se ha podido encontrar el fichero json");
			}
		});
	}

	cargarMapa(datos) {
		var mapa = new google.maps.Map(document.getElementById('mapa'), {zoom: 5,center: this.centro});
		this.markerCluster = new MarkerClusterer(mapa, [], {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
		datos.ListaEESSPrecio.forEach(this.addGasolinera, this);
	}
	
	addGasolinera(gasolinera, index) {
		var marker = new google.maps.Marker({position:{
				lat: parseFloat(gasolinera["Latitud"].replace(",", ".")),
				lng: parseFloat(gasolinera["Longitud (WGS84)"].replace(",", ".")) }
				,icon: "img/imagen.png"});
		this.markerCluster.addMarker(marker);
	}
}
var mapa = new Mapa();