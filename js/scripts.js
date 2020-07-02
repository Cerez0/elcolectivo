// Menu desplegable

$(function(){

    //ENSALADAS

    $('.ensaladas').on('click', function() {

        $('.contenedor-ensaladas').slideToggle();
    });

    //ENTRANTES

    $('.entrantes').on('click', function() {

        $('.contenedor-entrantes').slideToggle();
    });

    //TOSTAS

    $('.tostas').on('click', function() {

        $('.contenedor-tostas').slideToggle();
    });

    //MINI HAMBURGESAS

    $('.mini-hamburgesas').on('click', function() {

        $('.contenedor-mini-hamburgesas').slideToggle();
    });

    //CARNES

    $('.carnes').on('click', function() {

        $('.contenedor-carnes').slideToggle();
    });

    //BOCADILLOS CALIENTES

    $('.bocadillos-calientes').on('click', function() {

        $('.contenedor-bocadillos-calientes').slideToggle();
    });

    //BOCADILLOS FRIOS

    $('.bocadillos-frios').on('click', function() {

        $('.contenedor-bocadillos-frios').slideToggle();
    });

    //POSTRES

    $('.postres').on('click', function() {

        $('.contenedor-postres').slideToggle();
    });

    //BEBIDAS

    $('.bebidas').on('click', function() {

        $('.contenedor-bebidas').slideToggle();
    });

    // Facebook

    $('.facebook').on('click', function() {

        location.href='https://www.facebook.com/cantina.elcolectivo/';
    });

    $('.instagram').on('click', function() {

        location.href='https://www.instagram.com/cantinaelcolectivo/?hl=es';
    });
});