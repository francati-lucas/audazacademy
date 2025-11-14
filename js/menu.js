document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos
    const menuBtn = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('.nav-menu');

    // Verifica se encontrou os elementos
    console.log('Menu button:', menuBtn);
    console.log('Nav menu:', navMenu);

    // Adiciona o evento de clique
    menuBtn.addEventListener('click', () => {
        console.log('Clicou!');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}); 