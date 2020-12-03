$(document).ready(function() {
    // Image Carousel 
    $('.photo-carousel').owlCarousel({
        margin: 15,
        items: 2,
        loop: true,
        touchDrag: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            }
        }
    });

    // Testimonial Carousel 
    $('.testimonial-slide').owlCarousel({
        margin: 15,
        items: 1,
        loop: true,
        touchDrag: true,
        lazyLoad: true,
        // autoplay: true,
        // autoplayTimeout: 5000
    });
})