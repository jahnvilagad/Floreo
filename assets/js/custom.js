 (function () {
        window.onload = function () {
          const preloader = document.querySelector('.page-loading');
          preloader.classList.remove('active');
          setTimeout(function () {
            preloader.remove();
          }, 1500);
        };
      })();


      $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.navigation').addClass('fixed-header');
        }
        else {
            $('.navigation').removeClass('fixed-header');
        }
    });