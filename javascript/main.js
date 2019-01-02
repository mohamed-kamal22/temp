$(document).ready(function(){

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 100) {
            $('.scrollTop').show()
        } else {
            $('.scrollTop').hide()
        }
    });

});


$(function() { 
    $("#datepicker").datepicker(); 
});


$('.scrollTop').click(function(){
    $('body,html').animate({
        scrollTop : 0
    },500)
});

