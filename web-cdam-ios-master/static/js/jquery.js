//Código jquery
$(document).ready(function () {

    $('.ir_arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 200);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir_arriba').slideDown(200);
        } else {
            $('.ir_arriba').slideUp(200);
        }
    });

});

$(document).ready(function () {

    $(".accordion-titulo").click(function () {

        var contenido = $(this).next(".accordion-content");

        if (contenido.css("display") == "none") { //open		
            contenido.slideDown(250);
            $(this).addClass("open");
        } else { //close		
            contenido.slideUp(250);
            $(this).removeClass("open");
        }

    });

    $(".accordion-titulo-menu").click(function () {

        var contenidoMenu = $(this).next(".accordion-content-menu");

        if (contenidoMenu.css("display") == "none") { //open		
            contenidoMenu.slideDown(250);
            $(this).addClass("open");
        } else { //close		
            contenidoMenu.slideUp(250);
            $(this).removeClass("open");
        }

    });
});
$(window).load(function () {
    cambiar();
});


//Código Js 
var i = 0;
var imagenes = [];
var tiempo = 2000;

imagenes[0] = 'static/medios/foto1.jpg';
imagenes[1] = 'static/medios/foto2.JPG';
imagenes[2] = 'static/medios/foto3.JPG';
imagenes[3] = 'static/medios/foto4.JPG';
imagenes[4] = 'static/medios/foto5.JPG';
imagenes[5] = 'static/medios/foto6.JPG';
imagenes[6] = 'static/medios/foto7.JPG';
imagenes[7] = 'static/medios/foto8.JPG';
imagenes[8] = 'static/medios/foto9.JPG';
imagenes[9] = 'static/medios/foto10.JPG';
imagenes[10] = 'static/medios/foto11.JPG';
imagenes[11] = 'static/medios/foto12.JPG';
imagenes[12] = 'static/medios/foto13.JPG';
imagenes[13] = 'static/medios/foto14.JPG';
imagenes[14] = 'static/medios/foto15.JPG';
imagenes[15] = 'static/medios/foto16.JPG';
imagenes[16] = 'static/medios/foto17.JPG';
imagenes[17] = 'static/medios/foto18.JPG';
imagenes[18] = 'static/medios/foto19.JPG';






function cambiar() {
    document.presentacion.src = imagenes[i];
    if (i < imagenes.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("cambiar()", tiempo);
}