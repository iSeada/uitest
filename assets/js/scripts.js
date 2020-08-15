(function($) {
    "use strict";
    // SlickJS
    jQuery(document).ready(function($) {
      $('.slick.slick__home-style-carousel').slick({
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        focusOnSelect: false
      });

    });
    // Mobile navigation
    $("label[for='mobile-navigation__icon']").on("click", function() {
        $('body').toggleClass('mobile-navigation_active');
    }); // data-filter
})(jQuery);