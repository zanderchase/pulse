function changeImage(click_id) {

  if (click_id == 1 ) {
      sessionStorage.image = "img/1.jpg";
      sessionStorage.price = "8.00"
  } 
  else if (click_id == 2) {
      sessionStorage.image = "img/3.jpg";
      sessionStorage.price = "8.00"
  }
  else if (click_id == 3) {
      sessionStorage.image = "img/4.jpg";
      sessionStorage.price = "8.00"
  }
  else if (click_id == 4) {
      sessionStorage.image = "img/7.jpg";
      sessionStorage.price = "8.00"
  }
  else if (click_id == 5) {
      sessionStorage.image = "img/8.jpg";
      sessionStorage.price = "8.00"
  }
  else if (click_id == 6) {
      sessionStorage.image = "img/9.jpg";
      sessionStorage.price = "8.00"
  }
  else if (click_id == 11) {
      sessionStorage.image = "img/big_3.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 12) {
      sessionStorage.image = "img/big_2.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 13) {
      sessionStorage.image = "img/big_1.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 21) {
      sessionStorage.image = "img/fat_2.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 22) {
      sessionStorage.image = "img/fat_5.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 23) {
      sessionStorage.image = "img/fat_6.jpg";
      sessionStorage.price = "10.00"
  }
  else if (click_id == 31) {
      sessionStorage.image = "img/skinny_1.jpg";
      sessionStorage.price = "5.00"
  }
  else if (click_id == 32) {
      sessionStorage.image = "img/skinny_2.jpg";
      sessionStorage.price = "5.00"
  }
  else if (click_id == 33) {
      sessionStorage.image = "img/skinny_3.jpg";
      sessionStorage.price = "5.00"
  }

};

(function($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
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
    offset: 54
  });

})(jQuery); // End of use strict


