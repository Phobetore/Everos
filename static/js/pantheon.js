// Script pour l'interaction avec le panthéon divin

document.addEventListener('DOMContentLoaded', function() {
    const deityIcons = document.querySelectorAll('.deity-icon');
    
    if (!deityIcons.length) return;
    
    // Ajout des écouteurs d'événements pour chaque icône
    deityIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const deity = this.getAttribute('data-deity');
            window.location.href = `pages/deities/${deity}.html`;
        });
    });
    
    // Animation subtile de flottement pour les icônes
    function animateIcons() {
        deityIcons.forEach((icon, index) => {
            // Récupérer la classe pour savoir si c'est l'icône elzeryn
            const isHovered = icon.matches(':hover');
            
            // Ne pas appliquer l'animation si l'élément est survolé
            if (!isHovered) {
                const randomY = Math.sin(Date.now() / 1000 + index) * 5;
                const randomRotate = Math.sin(Date.now() / 2000 + index) * 2;
                
                // Stockons la transformation originale pour éviter de l'écraser
                icon.style.transform = `translateY(${randomY}px) rotate(${randomRotate}deg)`;
            }
        });
        
        requestAnimationFrame(animateIcons);
    }
    
    animateIcons();
    
    // Effet de particules pour le panthéon (version simplifiée)
    const pantheonSection = document.querySelector('.pantheon-preview');
    
    if (pantheonSection && window.innerWidth > 768) { // Seulement sur les écrans larges
        // Création de l'élément canvas
        const canvas = document.createElement('canvas');
        canvas.className = 'pantheon-particles';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        
        pantheonSection.style.position = 'relative';
        pantheonSection.insertBefore(canvas, pantheonSection.firstChild);
        
        // Ajuster les dimensions du canvas
        function resizeCanvas() {
            canvas.width = pantheonSection.offsetWidth;
            canvas.height = pantheonSection.offsetHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Création des particules
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(201, 169, 110, ${Math.random() * 0.6 + 0.2})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function createParticles() {
            const particleCount = Math.min(50, canvas.width / 20);
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Dessiner des lignes entre les particules proches
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(201, 169, 110, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animateParticles);
        }
        
        createParticles();
        animateParticles();
    }
});
