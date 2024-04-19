body {
	font-family: 'pokemon-font', sans-serif;
	font-size: 1em;
	margin: 0;
	padding: 0;
}

a{
    color:#fede84;
}

@font-face {
    font-family: pokemon-font;
    src: url(../fonts/pokemonsolid.ttf);
}

.imagen img{
    width:100%;
}

.col_der{
    position: absolute;
    margin-left: 1%;
    top:0;
    left:15%; 
    width:85%;
    height:1080px;
    background-color: #fede84;
}

.col_izq{
    position:absolute;
    top:0;
    left:0;
    width:15%;
    height:1080px;
    background-color:#00435f;
    color: #ffffff;
    font-family: 'pokemon-font', sans-serif; 
}

.datos_pokemon{
    margin-left: 1%;
    color: #000000;
    width: 35%;
}

.datos_item{
    color: #000000;
}

#googleMap {
height: 300px;
width: 100%;
}

#filtro{
    width: 100%;
}

.nombre_pokemon{
    margin-top: 10%;
    width: 99%;
}

.boton_busqueda{
    width: 100%;
    font-family: 'pokemon-font', sans-serif; 
}

.pokemon img{
    width:200px;
    height: 200px;
}

.item img{
    width:200px;
    height: 200px;
}

.compartir{
    width: 100%;
    font-family: 'pokemon-font', sans-serif;
}

.comentario {
	width: 99%;
}



@media screen and (max-width: 600px){
	.main {
		visibility:hidden; 
		display: none;
	} 
	.col {
		position:absolute;
		top:0;
		width:100%;
		height:1080px;
		background-color:#00435f;
	}
	.datos_pokemon{
	  color:#fede84;
		margin-left: 0%;
	}

	body {
		font-family: 'pokemon-font', sans-serif;
		font-size: 0.8em;
		margin: 0;
		padding: 0;
	}
	
	#filtro2{
	     margin-left: 15%;
	     width: 70%;
	}
	    
	.nombre_res{
	    margin-top: 10%;
	    margin-left: 15%;
	    width: 68%;
	}
	    
	.busqueda_res{
	    margin-left: 15%;
        width: 70%;
	    font-family: 'pokemon-font', sans-serif; 
	}
	#googleMap2 {
		width: 100%;
	}
	.compartir{
		width: 100%;
	}
	.comentario_res{
		width: 90%;
	}
	.email_res{
		width: 90%;
	}    
	
	
	
	nav a:not(:first-child) {display: none;}
	nav a.icon {
	   display: block;
        }
        nav.responsive {position: relative;}
        nav.responsive .icon {
	   position: absolute;
	   right: 0;
	   top: 0;
        }

       nav.responsive a {
	   display: block;
	   text-align: left;
        }

	.titulo {
	    margin-left:30%;
	}
	
	
}
    

@media screen and (min-width: 601px){
	.main2{
        visibility: hidden;
        display: none;
	}
}
