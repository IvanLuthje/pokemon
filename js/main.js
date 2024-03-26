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

$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    type: 'GET',
    dataType: 'json',
    success: function(Buscar){
        $('<h1/>').text(json.title).appendTo('busqueda');
        $('<div class="content"/>')
        .html(index.html).appendTo('body');
    }
})