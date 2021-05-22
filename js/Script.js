$(document).ready(function(){
   
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE =======
    $('.categoria .articulo[categoria="Todos"]').addClass('activo')
    
    //FILTRANDO GALERIA =========

    $('.articulo').click(function(){
        var imagenes = $(this).attr('categoria');
        console.log(imagenes);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO =======
        $('.articulo').removeClass('activo');
        $(this).addClass('activo');

        //OCULTANDO GALERIA ======

        $('.imagen').css('transform', 'scale(0)');
        function hideImagen(){
            $('.imagen').hide();
        } setTimeout(hideImagen,450);

        //MOSTRANDO GALERIA ======
        function showImagen(){
             $('.imagen[categoria="'+imagenes+'"]').css('transform', 'scale(1)');
             $('.imagen[categoria="'+imagenes+'"]').show();
        } setTimeout(showImagen,450);

    });
        //MOSTRANDO TODA LA GALERIA ======
    $('.articulo[categoria="Todos"]').click(function(){
        function showTodos(){
            $('.imagen').show();
            $('.imagen').css('transform', 'scale(1)');   
        } setTimeout(showTodos,450);
    });

});

