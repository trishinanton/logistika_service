// import '@/css/style.css'
// import '@/css/style.less'

// import * as $ from 'jquery'
$(document).ready(function(){
    $("html").niceScroll({cursorwidth: "6px", zindex: 99,cursoropacitymin: 0, cursoropacitymax: 0.5, cursorcolor:"#424242"});
    $('.nicescroll-rails.nicescroll-rails-hr').remove();
    let menu = document.querySelector('.menu');
    const activeMenu = document.querySelector('.menu-active__wrapper')
    let excellenceCard = document.querySelectorAll('.excellence-card');
    let arrExcellenceCard = Array.prototype.slice.call(excellenceCard);
    let servicesCard = document.querySelectorAll('.services-card');
    let arrServicesCard = Array.prototype.slice.call(servicesCard);
    let clientWidth = document.body.clientWidth; // current width screen for sliders

    let arrExcellenceCardActive = [
        'excellence-card-active__delivery', 
        'excellence-card-active__finance',
        'excellence-card-active__document',
        'excellence-card-active__optimization',
        'excellence-card-active__oneWindow',
        'excellence-card-active__guarantee'
    ]

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

    arrExcellenceCard.map((el,i)=>{
        arrExcellenceCardActive.map((ela,j)=>{
            el.addEventListener('mouseover', ()=>{
                if(i==j) el.classList.add(ela)
            });    
            el.addEventListener('mouseout', ()=>{
            el.classList.remove(ela)
            });
        
        
        })
        
        
    });

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

    /* Инициализация слайдера "О компании"*/
    $('.slider-about').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="sliders-button__left button-slide"> ❮ </button>',
        nextArrow: '<button class="sliders-button__right button-slide"> ❯ </button>'
    });

    /* Счетчик слайдеров */  
    $(".slider-about").on("afterChange", function(event, slick, currentSlide, nextSlide){
        $(".sliders__number-current").text(currentSlide + 1);
    });
    let totalSlides = $('.slider-about').slick("getSlick").slideCount
    document.querySelector('.sliders__number-total').innerHTML=totalSlides


    /*Инициализация слайдера "Наши преимущества"  */

    function resizeExcellenceSlider(clientWidth){
        if (clientWidth <= 102){ //на всякий оставлю, вдруг она опять передумает

            $('.excellence__description').slick({
                dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="excellence-arrow excellence-prev"> ❮ </button>',
                nextArrow: '<button class="excellence-arrow excellence-next"> ❯ </button>'
                
            });
        } else {
            $('.excellence__description').unslick;
        }
    }
    resizeExcellenceSlider(clientWidth)

    /*Инициализация слайдера "Отзывы клиентов"  */
    function resizeReviewsSlider(clientWidth){
        if (clientWidth <= 102){ //на всякий оставлю, вдруг она опять передумает
            $('.reviews__cards').slick({
                dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="reviews-arrow reviews-prev"> ❮ </button>',
                nextArrow: '<button class="reviews-arrow reviews-next"> ❯ </button>'
            });
        } else {
            $('.reviews__cards').unslick
        }
    }
    resizeReviewsSlider(clientWidth)


    /* Плавный скролл меню*/
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });

    /* Плавный скролл по кнопке "О Компании"*/
    $(document).ready(function(){
        $(".main-scroll__wrapper").on("click","a", function (event) {
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


    // Отслеживание хедера
    function backgroundHeader(differenceWidth){
        if (differenceWidth > 0) $('.header').addClass('header-top');
    }
    let differenceWidth = $('.header').offset().top;
    console.log(width);
});