function iniciarMap(){
    var coord = {lat:-34.922883333333, lng:-57.956316666667};
    var map = new google.maps.Map(document.getElementById('googleMap'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

function navegador() {
    var x = document.getElementById("navegador1");
    if (x.className === "navegador") {
        x.className += " responsive";
    } else {
        x.className = "navegador";
    }
} 

$(document).ready(function(){
    $("#busqueda").click(function(){
        let filtro = document.querySelector('#filtro');
        var nombre_pokemon = $("#nombre").val();
        if (filtro.value == 'nombre'){
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon,
            type: "GET",
            timeout: 0,
            dataType: "json",
            success: function(dato_pokemon){
                let results=dato_pokemon;
                console.log(results); 
               // $(".datos_pokemon").html("<h1>" + dato_pokemon.name + "</h1><img src='" + dato_pokemon.sprites.front_default + "' alt='" + dato_pokemon.name + "'><p>Peso: " + dato_pokemon.weight + "</p><p>Altura: " + dato_pokemon.height + "cm</p>");
               $(".datos_pokemon").html("<h1>" + dato_pokemon.name + "</h1>" + "<div class='pokemon'>" + "<img src='" + dato_pokemon.sprites.front_default + "'>" + "</div>" + "<p>Exp:" + dato_pokemon.base_experience + "</p>" + "<p>Peso:" + dato_pokemon.weight + "Kg</p>"  +  "<p>Altura: " + dato_pokemon.height + "m</p>" + "<button class='compartir'>" + "Compartir" + "</button>");
               localStorage.clear();
            },
            error: function(xhr, status, error) {
                alert("Pokémon no disponible");
            }
        });
      }
      if (filtro.value == 'item'){
        $.ajax({
            url: "https://pokeapi.co/api/v2/item/" + nombre_pokemon, 
            type: "GET",
            dataType: "json",
            success: function(dato_pokemon){

               // $(".datos_pokemon").html("<h1>" + dato_pokemon.name + "</h1><img src='" + dato_pokemon.sprites.front_default + "' alt='" + dato_pokemon.name + "'><p>Peso: " + dato_pokemon.weight + "</p><p>Altura: " + dato_pokemon.height + "cm</p>");
               $(".datos_item").html("<h1>" + dato_pokemon.names[5].name + "</h1>" + "<div class='item'>" + "<img src='" + dato_pokemon.sprites.default + "'>" +  "</div>" + "<p>" + dato_pokemon.flavor_text_entries[13].text + "</p>" + "<button class='compartir'>" + "Compartir" + "</button>");
            },
            error: function(xhr, status, error) {
                alert("Item no encontrado");
            }
           
        });
      }
      if (filtro.value == 'tipos'){
        $.ajax({
            url: "https://pokeapi.co/api/v2/type/" + "nombre_pokemon", 
            type: "GET",
            dataType: "json",
            success: function(dato_pokemon){
               // $(".datos_pokemon").html("<h1>" + dato_pokemon.name + "</h1><img src='" + dato_pokemon.sprites.front_default + "' alt='" + dato_pokemon.name + "'><p>Peso: " + dato_pokemon.weight + "</p><p>Altura: " + dato_pokemon.height + "cm</p>");
               $(".datos_pokemon").html("");
            },
            error: function(xhr, status, error) {
                alert("Tipo no disponible");
            }
        });
      }
    });
 
});

/* $(document).ready(function(){
    $("#compartir").click(function(){
        var nombre_pokemon = $("#nombre").val();
        $.ajax({
            //url: "https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon.toLowerCase(),
            url: "https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon,
            type: "GET",
            dataType: "json",
            success: function(dato_pokemon){
            $(".datos_pokemon").html("<h1>" + dato_pokemon.name + "</h1>" + "<div class='pokemon'>" + "<img src='" + dato_pokemon.sprites.front_default + "'>" + "</div>" + "<p>Peso:" + dato_pokemon.weight + "Kg</p>"  + "<p>Formas:" + dato_pokemon.forms + "Kg</p>" + "<p>Altura: " + dato_pokemon.height + "m</p>");
            },
            error: function(xhr, status, error) {
                alert("Pokémon no disponible");
            }
        });
    });
}); */