$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3000;
    $('.carousel').bcSwipe({ threshold: 50 }); 
  });