$(function(){

    'use strict'

    // slick slider part start

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // slick slider part end






    // VenoBox part start

    $('.venobox').venobox(); 

    // VenoBox part end
    
    // VenoBox in Gal part start

    $('.venobox').venobox(); 

    // VenoBox in Gal part end
    
    
    
    // Slick Slider in testimonial start

    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767.95,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

    // Slick Slider in testimonial end




    // Client Slider in testimonial start
    
    // Client Slider in testimonial end



    //   Counter up js start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    

    //   Counter up js  end


    // Client slider start
    
    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arr"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            }
          }
        ]
      });
    
    // Client slider end

    // Fixed Menu start
    var navoff= $('.main_menu').offset().top;
    // window.alert(navoff);

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      
      if(scrolling> navoff){
        $('.main_menu').addClass('menu_fix');
      }
      else{
        $('.main_menu').removeClass('menu_fix');
      }
    })
    
    // Fixed Menu end

})