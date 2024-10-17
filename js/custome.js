$(document).ready(function(){
    $(".slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000

    });
    $(".catagory-slider").owlCarousel({
        items:6,
        margin:50,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000
    });
    $(".cart-slider").owlCarousel({
        items:5,
        margin:50,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000
    });
    $(".cart-info").owlCarousel({
        items:4,
        margin:50,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000
    });
    $(".customer").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000
    });
    // $(".brand-name").owlCarousel({
    //     items:7,
    //     margin:0,
    //     loop:true,
    //     autoplay:true,
    //     autoplayTimeout:5000
    // });
  
  
  });