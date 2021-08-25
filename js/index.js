$(document).ready(function(){
    let windowWidth= window.outerWidth ;
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
    ];
    

    // Nice scroll - кастомный скролбар (полоса прокрутки)
    $("html").niceScroll({cursorwidth: "6px", zindex: 99,cursoropacitymin: 0, cursoropacitymax: 0.5, cursorcolor:"#424242"});
    // if(windowWidth > 421){
        $('.nicescroll-rails.nicescroll-rails-hr').remove();
    // }
    
    menu.addEventListener('click',()=>{
        menu.classList.add('menu-active');
        if(windowWidth < 421){
            $('body').css('overflow', 'hidden');
        }
        menu.style.animation = 'none';
        document.querySelector('.active-content').style.display = 'block';
        activeMenu.style.transition = 'transition: 2s linear';
    });

    activeMenu.addEventListener('click',()=>{
        document.querySelector('.active-content').style.display = 'none';
        menu.style.animation = 'open_menu 2s';
        menu.classList.remove('menu-active');
        if(windowWidth < 421){
            $('body').css('overflow-y', 'scroll ');
            $('body').css('height', 'auto');
        }
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
        adaptiveHeight: true,
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
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /* Плавный скролл по кнопке "О Компании"*/
    $(".main-scroll__wrapper").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /* Плавный скролл по кнопке "Заказать звонок"*/
    $(".button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    /* Фиксированное меню */
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

    // скрыть хедер если страница загружается не на первом экране, а ниже
    if($(this).scrollTop() > 0){
        $('.header').fadeOut(10);
    }
    
    // Маска для поля с телефоном
    $("#form__phone").mask("+7(999) 999-99-99");

    /* <движение ромбов за мышкой> */
    var sectionsWithRombs = []
    sectionsWithRombs.push($('.cooperation'))
    sectionsWithRombs.push($('.about'))
    
    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    // .cooperation
    // --float-before: rotate(-45deg);
    // --float-after: rotate(-45deg);
    
    // .cooperation:after
    // transform: var(--float-before);
    // transform: var(--float-after);
    function moving (section, pseudo, speed) {
        var deviation = pseudo == 'after' ? 30 : 0;
        var customCSSRule = '--float-' + pseudo;	
        var defaultValue = section.css(customCSSRule)
        console.log('def: ', defaultValue);
        
        section.on('mousemove', function(event) {
            console.log('event.pageX:', event.pageX)
            console.log('event.pageY:', event.pageY)
            var X = Math.floor((event.pageX.toString().slice(-3,-1)/1+(10+deviation))) + "px";
            var Y = Math.floor((event.pageY.toString().slice(-3,-1)/1+10)) + "px";
            console.log('X:', X)
            console.log('Y:', Y)
            section.css(customCSSRule, defaultValue + ' translate('+X+' , '+Y+')');
        });
        section.on('mouseleave', function(event) {
            section.css(customCSSRule, defaultValue + ' translate(0px , 0px)');
        });
    }
    // работает криво, пока отключил
    // sectionsWithRombs.forEach(function (section) {
    //     moving(section, 'before', getRandomFloat(50,150));
    //     moving(section, 'after', getRandomFloat(50,150));
    // });

    /* </движение ромбов за мышкой> */

    /* <Animations> */
    const splitTextparams = {
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
        stagger: 0.3
    }

    const childSplit = new SplitText(".split-text", {
        type: "lines",
        linesClass: "split-child"
    });
    const parentSplit = new SplitText(".split-text", {
        linesClass: "split-parent"
    });
    
    var tl = new TimelineLite({
        paused: true
    })
    tl.from(childSplit.lines, splitTextparams);
    
    function mainScreenLoad(){
        $('.main-screen').addClass('animated');
        tl.play()
        setTimeout(function() {
            $('.main-body__name').addClass('animated');
        }, 2000);
        setTimeout(function() {
            $('.main-footer .fade-text').addClass('animated');
        }, 2500);
    }

    var observer = new MutationObserver(function (mutation) {
        // console.log(mutation[0].target.classList.contains('init'));
        if(mutation[0].target.classList.contains('init')) mainScreenLoad();
    });
    observer.observe(document.querySelector('body'), {attributes: true});
    // init controller
	var controller = new ScrollMagic.Controller({
        // globalSceneOptions: {duration: 100}
    });
    const scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .setClassToggle("#test", "active") // add class toggle
    .addIndicators()
    // .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
    // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

    /* </Animations> */

});