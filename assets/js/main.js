
$(document).ready(function(){
  $('#nav').onePageNav({
    currentClass: 'current',
  });
  $('#nav').slicknav();
  $('.project-img').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    }
  });
  $('.counter-up').counterUp({
    time: 2000
  });
  $('.video-popup').magnificPopup({
    type:'iframe',
  });

  $('.testimonial').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    
    dots: false,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: false,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
        arrows: false,
      }

    }, {

      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        arrows: false,
      }
    }]
  });

  $('.partner-slide').slick({
    slidesToShow: 6,
    autoplay: true,
    dots: false,
    responsive: [{

      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        infinite: true
      }

    }, {

      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        dots: false
      }

    },{

      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: false
      }

    },{

      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    }]
  });
});

$(window).on('scroll', function(){
if ($(this).scrollTop() > 25 ){
   $('.header-area').addClass('sticky');
} else {
  $('.header-area').removeClass('sticky');
}
});