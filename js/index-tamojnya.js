$(document).ready(function(){

    let servicesCard = document.querySelectorAll('.services-card');
    let arrServicesCard = Array.prototype.slice.call(servicesCard);


    $("html").niceScroll({cursorwidth: "6px", zindex: 99,cursoropacitymin: 0, cursoropacitymax: 0.5, cursorcolor:"#424242"});
    $('.nicescroll-rails.nicescroll-rails-hr').remove();
    let menu = document.querySelector('.menu');
    const activeMenu = document.querySelector('.menu-active__wrapper')
    
    menu.addEventListener('click',()=>{
        menu.classList.toggle('menu-active');
        menu.style.animation = 'none';
        document.querySelector('.active-content').style.display = 'block';
        activeMenu.style.transition = 'transition: 2s linear'
    });

    activeMenu.addEventListener('click',()=>{
        document.querySelector('.active-content').style.display = 'none';
        menu.style.animation = 'open_menu 2s';
    })
  
     /* Плавный скролл меню*/
     $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });

        /* Плавный скролл по кнопке "Заказать звонок"*/
    $(document).ready(function(){
        $(".button").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });

        /* Фиксированное меню */
    $(document).ready(function($) {
        var g_top = 0;
        $(window).scroll(function() {
        var top = $(this).scrollTop();
        
        if ( top > g_top ) {
            $('.header').fadeOut(300);
        } else {
            $('.header').fadeIn(300);
        }
        
        g_top = top;    
        });
    });
    $(window).on("scroll", function () {
        var scrolled = $(this).scrollTop();
        if( scrolled > 200 ) {
            $('.header').addClass('header--scroll');
            // $('.header').css('background','#2B2B51');
            $('.header').css('box-shadow', '0px -16px 20px white');
            $('.logo-image').addClass('logo-image__scroll');
            $('.logo-name').addClass('logo-name__scroll');
        }   
        if( scrolled <= 100 ) {     
            // $('.header').css('background','#2B2B51');
            $('.header').css('box-shadow', 'none');
            $('.logo-image').removeClass('logo-image__scroll');
            $('.logo-name').removeClass('logo-name__scroll');
        }
    });
        
    

    

    /* Счетчик слайдеров */  
    // $(".slider-about").on("afterChange", function(event, slick, currentSlide, nextSlide){
    //     $(".sliders__number-current").text(currentSlide + 1);
    // });
    // let totalSlides = $('.slider-about').slick("getSlick").slideCount
    // document.querySelector('.sliders__number-total').innerHTML=totalSlides

    /* Блок с другими услугами компании */
    arrServicesCard.map((el,i)=>{
        el.addEventListener('mouseover', ()=>{
            el.style.backgroundSize = '120% 120%';     
            el.classList.add('services-card--hover');
        });
        el.addEventListener('mouseout', ()=>{
            el.style.backgroundSize = '100% 100%'; 
            el.classList.remove('services-card--hover');

        });
    });
    // Маска для поля с телефоном
    $("#form__phone").mask("+7(999) 999-99-99");

    /* График и сроки доставки, движение грузовика */
function consoleBG() {

  }
 
  $(window).scroll(function() {
      let scroll = $('#graph').offset().top 
      let winScroll = $(window).scrollTop()
      let right = winScroll-scroll
        if (winScroll>=scroll) $('.graph__truck').css({'right':right})
  });
});

