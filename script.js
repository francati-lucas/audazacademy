document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile Toggle
    const menuMobile = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('.nav-menu');

    menuMobile.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100; // Compensação para o header fixo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 