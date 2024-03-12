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
let content = document.querySelector('.menu-content');

let button = document.querySelector('button');

button.addEventListener('click', function() {
    content.setAttribute('open', '');
});

button.addEventListener('focusout', function(e) {
    content.setAttribute('closing', '');
    content.removeAttribute('open');

    content.addEventListener('animationend', () => {
        content.removeAttribute('closing');
    });
});
