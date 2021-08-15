$(document).ready(function(){
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
            $('.header').css('background','#2B2B51');
            $('.header').css('box-shadow', '0px -16px 20px white');
            $('.logo-image').addClass('logo-image__scroll');
            $('.logo-name').addClass('logo-name__scroll');
        }   
        if( scrolled <= 100 ) {     
            $('.header').css('background','transparent');
            $('.header').css('box-shadow', 'none');
            $('.logo-image').removeClass('logo-image__scroll');
            $('.logo-name').removeClass('logo-name__scroll');
        }
    });
        
    $(window).on('scroll', function(){
        let scrolled = $(this).scrollTop();
        var heightScreen = $(window).height();
        if(scrolled > heightScreen){
            $('.menu-active__content').css('background','rgba(16,16,39, 0.9)');
        }
        if(scrolled < heightScreen){
            $('.menu-active__content').css('background', 'rgba(145,141,154, 0.3)');
        }
    })
});