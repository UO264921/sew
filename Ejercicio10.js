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
        "q": "",
        "target": ""
      }
      
    }
    $(document).ready(function(){
		
        $(".dropdown-item").click(function(e){
            settings.data.target = $(this).attr("id");
            settings.data.q = document.getElementById("txt").value;
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
      $('form > input').each(function(){
        $(this).prop("value", updateString.trim());
      });
      $("#formHeading").html(updateString);
    }