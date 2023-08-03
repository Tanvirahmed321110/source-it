
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    lazyLoad:true,
    smartSpeed:3000,
    autoplay:true,
    stagePadding:100,
    autoplayTimeour:4000,
    autoPlaySpeed: 5000,
    // autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            stagePadding:0,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
