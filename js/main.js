$(document).ready(function(){
    // Select all buttons
    let $btns = $('.project-area .button-group button');

    // When a button is clicked
    $btns.click(function(e){
        // Remove active class from all buttons
        $('.project-area .button-group button').removeClass('active');
        // Target selected button and add active class to it
        e.target.classList.add('active');
        // Get Data-filter attribute corresponding to selected button
        let selector = $(e.target).attr('data-filter');
        // Use isotope to filter grids
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
    });

    // Owl-Carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        // Between viewport 0 to 544, show only one item. More than 544px, show 2 items
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    // Sticky Navigation Menu
    /**Get the Height of the Header Area */
    let nav_offset_top = $('.header_area').height() + 50;
    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main_menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main_menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});