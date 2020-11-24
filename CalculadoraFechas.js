
	
	function restarFechas(){
		if (document.getElementById('inicial1').value == "" && document.getElementById('inicial2').value == "") 
			alert("Las fechas no pueden ser vacias");
		else if (document.getElementById('inicial1').value == "") 
			alert("La fecha inicial no puede ser vacia");
		else if (document.getElementById('inicial2').value == "") 
			alert("La segunda fecha no puede ser vacia");
		else{
			var fechaInicio = new Date(document.getElementById('inicial1').value).getTime();
			var fechaFin    = new Date(document.getElementById('inicial2').value).getTime();
			var diff = fechaInicio - fechaFin;
			var textArea = document.getElementById('final').innerHTML = diff/(1000*60*60*24) + " días";
			}
		}

	function sumarFechas(){
		if (document.getElementById('inicial1').value == "" && document.getElementById('inicial2').value == "") 
			alert("Las fechas no pueden ser vacias");
		else if (document.getElementById('inicial1').value == "") 
			alert("La fecha inicial no puede ser vacia");
		else if (document.getElementById('inicial2').value == "") 
			alert("La segunda fecha no puede ser vacia");
		else{
			var fechaInicio = new Date(document.getElementById('inicial1').value).getTime();
			var fechaFin    = new Date(document.getElementById('inicial2').value).getTime();
			var diff = fechaInicio + fechaFin;
			var textArea = document.getElementById('final').innerHTML = diff/(1000*60*60*24) + " días";
		}
	}

	function hoy(){
		var todayDate = new Date().toISOString().slice(0,10);
		var textArea = document.getElementById('inicial1').innerHTML = todayDate;
	}

	function hoy2(){
		var todayDate = new Date().toISOString().slice(0,10);
		var textArea = document.getElementById('inicial2').innerHTML = todayDate;
	}


