// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Scroll Suave para os links do Menu
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === "#") return;
            
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Contador Regressivo para as Inscrições (08 de Junho de 2026)
    const deadline = new Date("June 8, 2026 23:59:59").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const diff = deadline - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            // Você pode exibir isso em uma div específica se desejar
            console.log(`Faltam ${days} dias para o fim das inscrições do Agrinho!`);
        }
    };

    setInterval(updateCountdown, 1000);

    // 3. Animação de entrada (Reveal) ao rolar a página
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // 4. Interação do Botão de Inscrição
    const btnInscricao = document.querySelector('.btn-main');
    btnInscricao.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirecionando para o sistema oficial de inscrições do SENAR-PR 2026...");
    });
});
