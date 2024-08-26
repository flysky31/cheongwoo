$(document).ready(function() {
    var swiper = new Swiper(".main_Swiper", {
      spaceBetween: 30,
      centeredSlides: true,
        autoplay: {
         delay: 5000,
          disableOnInteraction: false,
        },
      loop:true,
      effect:"fade",
      //speed:4000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper = new Swiper(".deps03_Swiper", {
      spaceBetween: 0,
      slidesPerView: 1.3,
        autoplay: {
         delay: 5000,
          disableOnInteraction: false,
        },
      loop:true,
      //effect:"fade",
      speed:2000,
      
    });
    var swiper = new Swiper(".deps04_Swiper", {
      spaceBetween: 0,
   
      slidesPerView: 1.3,
        autoplay: {
         delay: 5000,
          disableOnInteraction: false,
        },
      loop:true,
      //effect:"fade",
      speed:2000,
      
    });
    var swiper = new Swiper(".deps05_Swiper", {
      spaceBetween: 0,
      slidesPerView: 1.3,
        autoplay: {
         delay: 5000,
          disableOnInteraction: false,
        },
      loop:true,
      //effect:"fade",
      speed:2000,
      
    });
  
});





var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }      
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

var swiper = new Swiper(".swiper-container", swiperOptions);





