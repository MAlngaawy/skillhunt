$(function(){

  /// Scroll Top For Navbar

  var navScroll =   $(".copyright").scroll()

  console.log(navScroll)

  // Counter By Pluggin
  $(".counter .num").each(function(){
    $(this).numScroll({
      number: $(this).data("number"),
      time: 3000,
      delay: 0
    })
  })
    // Tabs
    $(".tab-titles").children().click(function(e){
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $($(this).data("tab")).addClass("active").siblings().removeClass("active");
    })

    // Start OWL Carousel
    $(".carousel-testimonial").owlCarousel({
      dots: true,
      loop:true,
      margin:10,
      responsivClass: true,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
    });

    $(".carousel-candidates").owlCarousel({
      dots: true,
      loop:true,
      margin:20,
      responsivClass: true,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
    })





  })
    