$(document).ready(function () {
    const retratos = $("#CarouselRetratos");
    const btnRetratos = $("#Retratos");
    const eventos = $("#CarouselEventos");
    const btnEventos = $("#Eventos");
    const videosBtn = $("#VideosBtn");
    const videos = $(".Videos");
    const viewSize = window.matchMedia("(max-width: 480px)");
    const imagenes = document.querySelector("img");
    
    
    eventos.hide();
    videos.hide();

    
    btnRetratos.on("click",function(){
        eventos.hide();
        videos.hide()
        retratos.toggle();
    });
    btnEventos.on("click", function(){
        retratos.hide();
        videos.hide();
        eventos.toggle();
    });

    videosBtn.on("click", function(){
        //alert("Funciona");
        retratos.hide()
        eventos.hide()
        videos.toggle()
    });
    
});