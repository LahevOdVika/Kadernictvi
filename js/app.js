document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
        });
        
    });
});
document.querySelector('.menu-button').addEventListener('click', function() {
    let content = document.querySelector('.menu-content');
    if (content.classList.contains('menu-content-active')) {

        content.classList.remove('menu-content-active');
        content.classList.add('menu-content-close');
        
    } else {
        content.classList.add('menu-content-active');
        content.classList.remove('menu-content-close');
    }
})