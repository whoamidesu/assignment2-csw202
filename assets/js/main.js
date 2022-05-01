// ===== Sticky Navbar Script =====
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



window.addEventListener('scroll', function(){
    let heading = document.querySelector('.about__h1');
    if(window.scrollY > 0){
        heading.style.opacity = 1;
    }
});
