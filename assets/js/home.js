//código menú desplegable
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

//código carrousel
const main_img = document.querySelector('.main_img');
const thumbnails = document.querySelectorAll('.thumbnail')

thumbnails.forEach(thumb => {
   thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
   })
});