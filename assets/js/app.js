$(document).ready(function () {
  // SHRICK HEADER ON IF WINDOW SCROLL GREATER THEN 100
  function shrinckHeader() {
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".header").addClass("header--shrink");
    } else {
      $(".header").removeClass("header--shrink");
    }
  }

  shrinckHeader();
  $(window).scroll(shrinckHeader);

  // FEATURE TABS
  $(".features-section__tab").click(function () {
    $(".features-section__tab").removeClass("active");
    $(this).addClass("active");
    $(".features-section__tabs-content").removeClass("active");
    $(".features-section__tabs-content." + $(this).attr('id')).addClass("active");
  });

  // FAQ ACCORDION
  $(".faq-section__accordion-icon").click(function () {
    $(this).parents(".faq-section__accordion").toggleClass("active");
  });


  // FEATURES SLIDER ON MOBILE
  function featuresSlider() {
    if ($(window).width() <= 991) {
      $(".carousel-on-mobile").addClass("owl-carousel");
      $(".carousel-on-mobile").addClass("owl-theme");
  
      var $owlEfficacy = $(".carousel-on-mobile.owl-carousel");
  
      $owlEfficacy.owlCarousel({
        loop: false,
        items: 1,
        dots: true,
        nav: false
      });
    } else {
      $(".carousel-on-mobile").trigger("destroy.owl.carousel");
      $(".carousel-on-mobile").removeClass("owl-carousel");
      $(".carousel-on-mobile").removeClass("owl-theme");
    }
  }

  featuresSlider();
  $(window).resize(featuresSlider);
});
