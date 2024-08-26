
$(document).ready(function() {
    let $header = $("#header");
    let burger = $('.navbar-toggler');
    let menu = $('.full-menu');
    let navItems =$('.nav-item');
    
    // burger.click(function(){
    //   burger.toggleClass('on');
    //   menu.toggleClass('menu--open');
    // });
    
    // navItems.hover(function(){
    //   navItems.not($(this)).toggleClass('nav__item--hover');
    // });

    // $('.navbar-toggler').on('click', function(e){
    //   e.preventDefault();
    //   $(this).toggleClass('active');
    //   $('#lnb').toggleClass('menu--open');
    //   $('body').toggleClass('menu--open');
    // });

  

    $(window).scroll(function(){
      if( $(window).scrollTop() > 50){
          $header.addClass("on");
      } else {
          $header.removeClass("on");
      }

    });

    // $(".navbar-toggler").click(function(){
    //  //   $("#aside").toggleClass("on");
    //     //$(".aside_bg").toggleClass("on");
   
    //     $(this).toggleClass("on");

    //     function toggleClassBasedOnScreenSize() {

    //     if ($(window).width() > 1024) { 
    //       //  $("#aside").removeClass("on");
    //         //$(".aside_bg").removeClass("on");
            
    //         $(".navbar-toggler").removeClass("on");
    //         $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    //       } else {
          
    //       }
    //     }
    //     toggleClassBasedOnScreenSize();

    //     $(window).resize(function() {
    //         toggleClassBasedOnScreenSize();
    //     });

     
    // });
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });


    // $("#aside .navbar-nav_m li .sub").hide();
 
      $('.navbar-toggler').click(function(){
          $(this).toggleClass('on');
          $('#aside').toggleClass('on');
          $('.aside_bg').toggleClass('on');
          $('.call_area').toggleClass('on');
          $('.navbar-nav').toggleClass('on');
      
      })
      $(".aside_bg").click(function(){
          $(this).removeClass('on');
          $("#aside").removeClass('on');
          $(".navbar-toggler").removeClass('on');
          $('.call_area').removeClass('on');
          $('.navbar-nav').removeClass('on');
      })
      $(".aside_bg").click(function(){
          $(".navbar-toggler").removeClass('on');
          $('#aside').removeClass('on');
          $('.call_area').removeClass('on');
          $('.navbar-nav').removeClass('on');
          // $('#header .m-headWrap .mgnb li').removeClass('on');
          // $('#header .m-headWrap .mgnb li .sub-menu').css('display',"none");
      })
      

    // $("#aside .navbar-nav_m li").click(function() {
    //   if (window.innerWidth <= 1024) { // 체크할 화면 너비 값
    //     $(this).toggleClass("on");
    //     $('#aside .navbar-nav_m li').not(this).removeClass('on');
    //     let subElement = $(this).find(".sub");
    
    //     if (subElement.is(":visible")) {
    //       subElement.slideUp();
    //     } else {
    //       $("#aside .navbar-nav_m li .sub").slideUp();
    //       subElement.slideDown();
    //     }
    //   }
    // });

    



    $('#header .inner .navbar-nav').mouseenter(function(){
        $("#header").addClass("active");

    });
    $('#header .inner .navbar-nav').mouseleave(function(){
      $("#header").removeClass("active");

  });
    $('#header .inner .navbar-nav li').mouseenter(function(){
      $(this).addClass("on");
      $(this).find('.sub_menu').addClass("on");

    });
    $('#header .inner .navbar-nav li').mouseleave(function(){
        $(this).removeClass("on");
        $(this).find('.sub_menu').removeClass("on");
   
        
    });
   
});
    

