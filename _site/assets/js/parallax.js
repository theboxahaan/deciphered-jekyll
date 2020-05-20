$(document).ready(function(){

    var $nav = $('.navbar'),
        $body = $('body'),
        $window = $(window),
        navOffsetTop = $nav.offset().top,
        headerOffsetTop = $('.header').offset().top,
        $document = $(document);

    function init(){
        $window.on('scroll', parallax);
    }

    function parallax(){
        console.log($('.header').css('background-position'))
        $('.header').css('background-position', function(){ return ($window.scrollTop()/9).toString() +'px ,' + ($window.scrollTop()/9).toString() +'px' })
    }

    init();
});