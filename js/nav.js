
$(document).ready(function() {
    let $header = $("#header");
    let burger = $('.navbar-toggler');
    let menu = $('.full-menu');
    let navItems =$('.nav-item');    

  
    //서브 헤더 배경 white로 변경  
    $header.addClass("on");
    $('.regular').css('color', 'black');
    $('#header .logo img').attr('src', '../img/logo.png');
    $('#header .hamburger-menu span').addClass("on");
    

    $("#aside .navbar-nav_m li").click(function(){
        $(this).toggleClass("on");
        //$(this).find(".sub").slideDown();
        $('#aside .navbar-nav_m li').not(this).removeClass('on');        
        let subElement = $(this).find(".sub");

        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $("#aside .navbar-nav_m li .sub").stop().slideUp();
          subElement.stop().slideDown();
        }
    });
    
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
      


    $('#header .inner .navbar-nav li').mouseenter(function(){
      $(this).addClass("on");
      $(this).children('.sub_menu').stop().addClass("on");
      $("#navbarNav").addClass("on");
    });
    $('#header .inner .navbar-nav li').mouseleave(function(){
        $(this).removeClass("on");
        $(this).find('.sub_menu').stop().removeClass("on");
    });
    
    $('#header').mouseenter(function(){
        //$(this).addClass('active');
        $('#header .regular').css('color', 'black');
        $('#header .logo img').attr('src', 'https://www.chungwoocon.co.kr/new/img/logo.png');
    })
    $('#header').mouseleave(function(){
        //$(this).removeClass('active');
        $("#navbarNav").removeClass("on");
        if( $(window).scrollTop() <= 50 ){
            $('#header .regular').css('color', 'black');
            $('#header .logo img').attr('src', 'https://www.chungwoocon.co.kr/new/img/logo.png');
        }
    })
    
    function scrollToTop() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
    
    $('#topBtn, #moveTop, #moveTop01').click(scrollToTop);
    
});


function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}

$(document).ready(function(){

    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});


