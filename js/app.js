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
    
    if (content.hasAttribute('open')) {
        content.setAttribute('closing', '');
        content.removeAttribute('open');

        content.addEventListener('animationend', () => {
            content.removeAttribute('closing');
        });
    } else {
        content.setAttribute('open', '');
    }
});