class Texto {
	constructor(){}

	mostrarTabla() {
		$("#Tabla > *").toggle();
		$("#Tabla h2").show();
		this._actualizarIcono("Tabla");
	}

	_actualizarIcono(seccion) {
		var identificadorIcono = "#" + seccion + " span";
		var identificadorComponentes = "#" + seccion + " p";
		if ($(identificadorComponentes).is(":visible"))
			$(identificadorIcono).text("\u25E2");
		else
			$(identificadorIcono).text("\u25B7");
	}

	verTotalGoles() {
		var sumas = [0, 0, 0, 0];
		var num = 0;
		$("#partidos").find("tr").each(function(i) {
			var fila = $(this);
			if (i != 0) {
				var sum = 0;
				fila.find("td").each(function(j) {
					if (j != 0) {
						num = parseInt($(this).text());
						sumas[j - 1] += num;
						sum += num;
					}
				});
		} 
		});
		$("#partidos").append("<tr class='total'><td>Numero total de goles a favor</td><td>" + sumas[0] + "</td></tr>");
		$("#Tabla a").remove();
	}

	inspeccionar() {
		$("*", document.body).each(function() {
    		var etiquetaPadre = $(this).parent().get(0).tagName;
    		$(this).prepend(document.createTextNode( "Padre: <"  + etiquetaPadre + ">  Elemento : <" + $(this).get(0).tagName +"> informacion: "));
		});
		$("#recorrer a").remove();
	}
}

var texto = new Texto();