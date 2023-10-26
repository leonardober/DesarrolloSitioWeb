$(document).ready(function(){

    //Agregaremos la clase active para cuándo seleccionemos un elemento

    $('.category_list .category_item[category="all]').addClass('ct_item-active');

    //Donde empezaremos a desarrollar los filtros de cada una de las categorías

    //Seleccionar todos los elementos con la clase CSS
    $('.category_item').click(function(){
        //Crearemos una variable que me asignará los atributos de la categoría
        //var o let hace referencia a que la variable puede recibir cualquier definición
        //const hace referencia a que la variable solamente recibirá lo que le asignen

        //la función this se refiere al elemento que se despliega en el evento click
        var catProduct = $(this).attr('category');

        //mostraremos el valor de la variable en la consola
        console.log(catProduct);

        //Agregaremos la clase active al enlace seleccionado
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //Ocultaremos los productos

        /*Clase product-item nos selecciona los elementos del HTML que están en esa clase
        
        El método css nos ayuda para cambiar las propiedades y aginarle una transformación a los elementos, para que? para que cuándo seleccionemos una categoría, se muestre y se oculte el anterior*/
        $('.product-item').css('transform', 'scale(0)');

        function hideProduct(){
            //esta línea nos ayuda a ocultar los elementos
            $('.product-item').hide();
            //esta línea nos ayuda a cronometrar el tiempo que durará la transición al ocultarse
        } setTimeout(hideProduct, 400);

        //Muestre productos
        function showProduct(){
            //Esta línea nos ayuda a mostrar los elementos de las categorías
            $('.product-item[category="' + catProduct + '"]').show();
            // Esta línea nos ayuda que los elementos se muestren con el mismo tamaño y personalización
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
            //Esta línea nos ayuda a definir la duración de la transición al mostrarse
        } setTimeout(showProduct, 400);
    });

    //
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    });
});