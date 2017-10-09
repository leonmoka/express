(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log('* * * * ' + target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 40)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 48
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '50px',
    reset:true
  }, 200);
  sr.reveal('.btn.btn-primary.btn-xl.js-scroll-trigger', {
    duration: 600,
    scale: 0.5,
    distance: '50px',
    reset:true
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200,
    reset:true
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.5,
    distance: '0px',
    reset:true
  }, 500);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('.portfolio-box').hover(function(){
    var o = Math.round, r = Math.random, s = 255;
    var color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.9' + ')';
    $(this).children('.portfolio-box-caption').css({'background':color});
  });

})(jQuery); // End of use strict

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goTopBtn").style.opacity = 1;
      // document.getElementById("goTopBtn").style.display = "block";
  } else {
      document.getElementById("goTopBtn").style.opacity = 0;
      // document.getElementById("goTopBtn").style.display = "none";
  }
}

// Add class to item lang
$(document).ready(function(){
  if (document.cookie.split('i18n=').length > 1) {
    var currentlang = document.cookie.split('i18n=')[1];
    $('[data-lang=' + currentlang + '] > a').addClass('choosen');  
  } 
});
