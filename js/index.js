// import '@/css/style.css'
// import '@/css/style.less'

// import * as $ from 'jquery'

let menu = document.querySelector('.menu');
let excellenceCard = document.querySelectorAll('.excellence-card');
let arrExcellenceCard = Array.prototype.slice.call(excellenceCard);
let servicesCard = document.querySelectorAll('.services-card');
let arrServicesCard = Array.prototype.slice.call(servicesCard);

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
    if(menu.classList.contains('menu-active')){
        document.querySelector('.header__menu').innerHTML = 'Закрыть';
        document.querySelector('.active-content').style.display = 'block';
        document.querySelector('.header__number').style.opacity = '0';
        document.querySelector('.header__button').style.opacity = '0'; 
    }else{
        document.querySelector('.header__menu').innerHTML = 'Меню';
        document.querySelector('.active-content').style.display = 'none';
        document.querySelector('.header__number').style.opacity = '1';
        document.querySelector('.header__button').style.opacity = '1';  
    }
});

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
       el.childNodes[1].style.display = 'block';
        el.style.backgroundSize = '120% 120%';     
    });
    el.addEventListener('mouseout', ()=>{
       el.childNodes[1].style.display = 'none';
       el.style.backgroundSize = '100% 100%'; 
    });
});

/* Инициализация слайдера "О компании"*/
$('.test-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

/*Инициализация слайдера "Наши преимущества"  */
$('.excellence__description').slick({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
document.querySelector('.excellence__description .slick-prev').innerHTML='❮'
document.querySelector('.excellence__description .slick-next').innerHTML='❯'

/* Счетчик слайдеров */  
$(".test-slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".sliders__number-current").text(currentSlide + 1);
});
let totalSlides = $('.test-slider').slick("getSlick").slideCount
document.querySelector('.sliders__number-total').innerHTML=totalSlides

/* Логика кнопок */
document.querySelector('.slick-prev').classList.add('sliders-button__left','button-slide');
document.querySelector('.slick-prev').innerHTML='&lt';

document.querySelector('.slick-next').innerHTML='&gt';
document.querySelector('.slick-next').classList.add('sliders-button__right','button-slide');

/* Плавный скролл */
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
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
        $('.header').fadeOut(400);
      } else {
        $('.header').fadeIn(400);
      }
      
      g_top = top;    
    });
  });