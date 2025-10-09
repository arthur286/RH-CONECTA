// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre seções
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links e seções
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Mostra a seção correspondente
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    // Manipular o envio do formulário
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject');
            const subjectText = subject.options[subject.selectedIndex].text;
            const message = document.getElementById('message').value;
            
            // Validação simples
            if (!name || !email || !subject.value || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Validação de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }
            
            // Simular envio (em um caso real, aqui teria uma requisição AJAX)
            alert(`Obrigado, ${name}! Sua mensagem sobre "${subjectText}" foi enviada com sucesso. Entraremos em contato em breve.`);
            
            // Limpar o formulário
            contactForm.reset();
        });
    }
    
    // Animação da barra de progresso
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '41%';
        }, 500);
    }
    
    // Adicionar animação aos elementos details
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
    
    // Adicionar efeito de digitação ao título da seção ativa
    function typeWriterEffect() {
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            const title = activeSection.querySelector('h2');
            if (title && !title.classList.contains('typed')) {
                const originalText = title.textContent;
                title.textContent = '';
                title.classList.add('typed');
                
                let i = 0;
                const typeWriter = () => {
                    if (i < originalText.length) {
                        title.textContent += originalText.charAt(i);
                        i++;
                        setTimeout(typeWriter, 50);
                    }
                };
                
                setTimeout(typeWriter, 300);
            }
        }
    }
    
    // Observar mudanças nas seções para aplicar efeito de digitação
    typeWriterEffect();
    
    // Reaplicar efeito quando mudar de seção
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(typeWriterEffect, 500);
        });
    });
    
    // Animar estatísticas quando a seção Quem Somos ficar visível
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat-number');
                stats.forEach(stat => {
                    const finalValue = stat.textContent;
                    stat.textContent = '0';
                    
                    let current = 0;
                    const increment = parseInt(finalValue.replace('+', '').replace('%', '')) / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= parseInt(finalValue.replace('+', '').replace('%', ''))) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            if (finalValue.includes('+')) {
                                stat.textContent = '+' + Math.floor(current);
                            } else if (finalValue.includes('%')) {
                                stat.textContent = Math.floor(current) + '%';
                            } else {
                                stat.textContent = Math.floor(current);
                            }
                        }
                    }, 50);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const quemSomosSection = document.getElementById('quem-somos');
    if (quemSomosSection) {
        observer.observe(quemSomosSection);
    }
});
