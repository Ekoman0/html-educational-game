// Code rain effect
    function createCodeRain() {
      const codeSnippets = [
        '<html>',
        '</div>',
        'printf("Hello");',
        'int main()',
        '<head>',
        'scanf("%d", &x);',
        '</body>',
        'for(i=0; i<10; i++)',
        '<style>',
        'malloc(sizeof(int));',
        '</html>',
        'struct data {',
        '<script>',
        'return 0;',
        '<p>',
        'char str[100];'
      ];
      
      const codeRainContainer = document.getElementById('codeRain');
      
      setInterval(() => {
        const drop = document.createElement('div');
        drop.className = 'code-drop';
        drop.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 3 + 5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        
        codeRainContainer.appendChild(drop);
        
        setTimeout(() => {
          drop.remove();
        }, 8000);
      }, 300);
    }
    
    // Start code rain effect immediately
    createCodeRain();
    
    // Navigation functions
    function navigateToHtmlGames(event) {
      // Add click animation
      const card = event.target.closest('.game-card');
      if (card) {
        card.style.transform = 'scale(0.95)';
      }
      setTimeout(() => {
         window.location.href = "../MainMenu/MainMenu.html"; 
      }, 200);
    }
    
    function navigateToCGames(event) {
      // Add click animation
      const card = event.target.closest('.game-card');
      if (card) {
        card.style.transform = 'scale(0.95)';
      }
      setTimeout(() => {
        window.location.href = 'CGameMenu.html';
      }, 200);
    }
    
    // Animated counters
    function animateCounter(elementId, target, duration = 2000) {
      const element = document.getElementById(elementId);
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target + (elementId === 'activePlayers' || elementId === 'completedLessons' ? '+' : '');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + (elementId === 'activePlayers' || elementId === 'completedLessons' ? '+' : '');
        }
      }, 16);
    }
    
    // Start counter animations after delay
    setTimeout(() => {
      animateCounter('totalGames', 12);
      animateCounter('activePlayers', 500);
      animateCounter('completedLessons', 1000);
    }, 1800);
    
    // Add hover sound effects (optional - requires audio files)
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        // You can add hover sound here if desired
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });
    });
    
    // Parallax effect for particles
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 50;
        const yOffset = (y - 0.5) * speed * 50;
        
        particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });