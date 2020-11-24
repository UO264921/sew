	var miCanvas = document.querySelector('#pizarra');
    var lineas = [];
    var pulsando = false;
    var posicion = miCanvas.getBoundingClientRect()
	var ctx = miCanvas.getContext('2d')
	var tipoDrag = 0;
	var color = "white";
	var pizarraLlena = false;
	var line = 2;
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "41f7f0e8a1msh09644b5b0ee9dddp1eb110jsn5c2838b17d68",
        "content-type": "application/x-www-form-urlencoded"
      },
      "data": {
        "source": "es",
        "q": "¡Dibuja en la pizarra! | Arrastra la goma a la pizarra para borrar todo y ¡arrastra el color antes de empezar a dibujar!",
        "target": ""
      }
      
    }
    $(document).ready(function(){
		
        $(".dropdown-item").click(function(e){
            settings.data.target = $(this).attr("id");
            fetchTranslation();
            $('button').html($(this).html());
        });
    });
    function fetchTranslation(){
      $.ajax(settings).done(function (response) {
        console.log(response);
        var translatedText = response.data.translations[0].translatedText;
        updatePlaceholders(translatedText);
        
      });
    }
    function updatePlaceholders(updateString){
		var c = updateString.split('|');
      $('h1').each(function(i){
        $(this).prop("innerHTML", c[0].trim());
      });
	  $('h2').each(function(i){
        $(this).prop("innerHTML", c[1].trim());
      });
      $("#formHeading").html(updateString);
    }

    miCanvas.width = 1200;
    miCanvas.height = 600;

    function start () {
        pulsando = true;
		pizarraLlena = true;
        lineas.push([]);
    };
	
	function stop () {
        pulsando = false;
		lineas[lineas.length - 1].push({
                x: event.layerX,
                y: event.layerY
        });
    }

    function draw (event) {
        event.preventDefault();
        if (pulsando) {
            ctx.lineJoin = ctx.lineCap = 'square';
            ctx.lineWidth = line;
			ctx.strokeStyle = color;
            var nuevaPosicionX = 0;
            var nuevaPosicionY = 0;
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
            lineas[lineas.length - 1].push({
                x: nuevaPosicionX,
                y: nuevaPosicionY
            });
			putLines(ctx);
        }
    }
	
	function putLines(ctx){
		 ctx.beginPath();
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();
			ctx.reload();
	}
	
	function allowDrop(ev) {
	  event.preventDefault();
	}

	function dragGoma(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=1;
	}
	
	function dragNegro(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=2;
	}
	function dragRojo(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=3;
	}
	function dragNaranja(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=4;
	}
	function dragAzul(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=5;
	}
	function dragTiza(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  tipoDrag=6;
	}

	function drop(ev) {
	  if (tipoDrag == 1){
		  lineas = [];
		  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
		  pizarraLlena = false;
	  }
	  else if (tipoDrag == 2){
		   if (color != "black"){
			  if (pizarraLlena == true) alert("Solo puedes dibujar con un color de cada vez, borra la pizarra para cambiar.");
			  else{
				lineas = [];
				ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
				color = "black";
				line = 2;
			  }
		   }
	  }
	  else if (tipoDrag == 3){
		  if (color != "red"){
			  if (pizarraLlena == true) alert("Solo puedes dibujar con un color de cada vez, borra la pizarra para cambiar.");
			  else{
			  lineas = [];
			  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
			  color = "red";
			  line = 3;
			  }
		  }
	  }
	  else if (tipoDrag == 4){
		   if (color != "orange"){
			  if (pizarraLlena == true) alert("Solo puedes dibujar con un color de cada vez, borra la pizarra para cambiar.");
			  else{
			  lineas = [];
			  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
			  color = "orange";
			  line = 3;
			}
		   }
	  }
	  else if (tipoDrag == 5){
		   if (color != "blue"){
			  if (pizarraLlena == true) alert("Solo puedes dibujar con un color de cada vez, borra la pizarra para cambiar.");
			  else{
			  lineas = [];
			  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
			  color = "blue";
			  line = 3;
			  }
		   }
	  }
	  else if (tipoDrag == 6){
		   if (color != "white"){
			  if (pizarraLlena == true) alert("Solo puedes dibujar con un color de cada vez, borra la pizarra para cambiar.");
			  else{
			  lineas = [];
			  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
			  color = "white";
			  line = 2;
			  }
		   }
	  }
	}

    miCanvas.addEventListener('mousedown', start, false);
    miCanvas.addEventListener('mousemove', draw, false);
    miCanvas.addEventListener('mouseup', stop, false);