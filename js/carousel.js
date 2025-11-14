document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let interval;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        currentSlide = index;
        const translation = -index * 100;
        
        // Transição mais suave
        carouselContainer.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        carouselContainer.style.transform = `translateX(${translation}%)`;
        
        // Atualiza os indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Função para avançar para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Adiciona eventos de clique aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(interval); // Limpa o intervalo atual
            showSlide(index);
            startAutoPlay(); // Reinicia o autoplay
        });
    });
    
    // Função para iniciar o autoplay
    function startAutoPlay() {
        clearInterval(interval); // Limpa qualquer intervalo existente
        interval = setInterval(nextSlide, 3000); // Reduzido para 3 segundos
    }
    
    // Pausa o autoplay quando o mouse está sobre o carrossel
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    // Reinicia o autoplay quando o mouse sai do carrossel
    carouselContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
    
    // Adiciona transição suave ao CSS do container
    carouselContainer.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Inicializa o carrossel
    showSlide(0);
    startAutoPlay();
}); 