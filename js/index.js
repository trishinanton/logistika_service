// import '@/css/style.css'
// import '@/css/style.less'

// import * as $ from 'jquery'

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
       el.childNodes[1].style.display = 'block';
        el.style.backgroundSize = '120% 120%';     
    });
    el.addEventListener('mouseout', ()=>{
       el.childNodes[1].style.display = 'none';
       el.style.backgroundSize = '100% 100%'; 
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
    if (clientWidth <= 1024){

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
    if (clientWidth <= 1024){
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

// Отслеживание хедера
function backgroundHeader(differenceWidth){
    if (differenceWidth > 0) $('.header').addClass('header-top')
}
let differenceWidth = $('.header').offset().top
console.log(width)