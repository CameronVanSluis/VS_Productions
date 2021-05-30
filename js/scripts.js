jQuery(function($) {
    $('document').ready(function() {
        $('.trigger').on('click', function(e){
            e.preventDefault();
            $('html').toggleClass('menu-active');
            return false;
        });
    });
});