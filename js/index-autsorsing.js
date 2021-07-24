let servicesCard = document.querySelectorAll('.another-card');
let arrServicesCard = Array.prototype.slice.call(servicesCard);
let menu = document.querySelector('.menu');

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