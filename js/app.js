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

document.querySelector('.menu-button').addEventListener('focusin', function() {
    content.setAttribute('open', '');
});

document.querySelector('.menu-button').addEventListener('focusout', function() {
        content.setAttribute('closing', '');
        content.removeAttribute('open');

        content.addEventListener('animationend', () => {
            content.removeAttribute('closing');
        });
});