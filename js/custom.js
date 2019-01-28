/*====================================
            SERVICES
====================================== */
// document.ready method is used to
// make function available after The 
// page is ready 
// $(document).ready(function(){

// })

// short form

$(function(){
    // animate on scroll
    new WOW().init();
})

// $(function(){
//     $("#serve-blue").mouseover(function () {
//         $('#serve-blue').addClass("service-content cw");
//         $('#serve-blue').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laborum ab nam ad nemo molestiae.");
//       });
//       $("#serve-blue").mouseout(function () {
//         $('#serve-blue').removeClass("cw");
//       });
// })

// gallery

$(function(){
    $(".gallery-img").magnificPopup({
        // child items selector,
        // by clicking on it popup will open
        delegate: 'a',
        type: 'image',
        // other options
        gallery:{
            enabled: true
        }
    });
});
// recommendations
$(function(){
    $(".testimonials-section").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
       responsive: {
            // breakpoint form 0 to up
            0: {
                items: 1
            },

            // breakpoint from 480 up
            480: {
                items: 1
            },

            // breakpoint from 768 up

            768: {
                items: 2
            },

            // breakpoint from 992 up

            992: {
                items: 3
            }
        }
    });
});

$(function(){
    //here we have window object and scroll event
    $(window).scroll(function(){
        // this is used to refer current object means
        // this window object
        if($(this).scrollTop() < 80){
            // hide nav
            $("#back-to-top").fadeOut();
        }else{
            // show nav
            $("#back-to-top").fadeIn();
        }
    });
});


