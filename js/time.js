var cargarPagina = function (){
    setTimeout(splashToHome,4000) 
};

var splashToHome = function(){
	e.preventdefault();
    location.href = "views/home.html";
};
$(document).ready(cargarPagina);
