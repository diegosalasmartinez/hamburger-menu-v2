const menu_hamburger = document.querySelector('.buttom-hamburger');
const menu_popup = document.querySelector('.sub-menu');

menu_hamburger.addEventListener('click', e => {
    e.preventDefault();
    menu_hamburger.classList.toggle('open');    
    menu_popup.classList.toggle('openned');
});
