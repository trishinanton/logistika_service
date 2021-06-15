let menu = document.querySelector('.menu');
let excellenceCard = document.querySelectorAll('.excellence-card');
let arrExcellenceCard = Array.prototype.slice.call(excellenceCard);
let servicesCard = document.querySelectorAll('.services-card');
let arrServicesCard = Array.prototype.slice.call(servicesCard);

menu.addEventListener('click',()=>{
    menu.classList.toggle('menu-active');
    if(menu.classList.contains('menu-active')){
        document.querySelector('.header__menu').innerHTML = 'Закрыть';
        document.querySelector('.active-content').style.display = 'block'; 
    }else{
        document.querySelector('.header__menu').innerHTML = 'Меню';
        document.querySelector('.active-content').style.display = 'none';
    }
});

arrExcellenceCard.map((el,i)=>{
    el.addEventListener('mouseover', ()=>{
        el.classList.add('excellence-card-active')
    });
    el.addEventListener('mouseout', ()=>{
        el.classList.remove('excellence-card-active')
    });
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