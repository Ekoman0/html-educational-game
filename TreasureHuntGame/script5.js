let currentLevel = 1;
    let completedLevels = 0;
    const totalLevels = 5;
    
    // Particles için renkler
    const colors = ['#6366f1', '#ec4899', '#10b981', '#eab308', '#3b82f6'];
    function playButtonSound() {
      const audio = new Audio();
      // Web Audio API kullanarak basit bir 'click' sesi oluştur
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }

    function createParticles() {
      const particles = document.getElementById('particles');
      particles.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Rastgele özellikler
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Stil
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        
        particles.appendChild(particle);
      }
    }
    
    function animateParticles() {
      const particles = document.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        // Rastgele zamanlama ve pozisyon
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        
        // Animasyon
        particle.style.animation = `celebrate ${duration}s ease-out ${delay}s forwards`;
      });
      
      // Reset after animation completes
      setTimeout(() => {
        particles.forEach(particle => {
          particle.style.animation = '';
          particle.style.opacity = '0';
        });
      }, 5000);
    }

    function showHint(hintId) {
      playButtonSound();
      const hintBox = document.getElementById(hintId);
      hintBox.classList.add('show');
    }

    function checkAnswer(inputId, correctAnswer) {
        playButtonSound();
      const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
      
      if (userAnswer === correctAnswer) {
        completedLevels++;
        updateProgressBar();
        
        // Doğru cevap için konfeti
        if (completedLevels % 1 === 0) { // Her doğru cevapta konfeti
          createParticles();
          animateParticles();
        }
        
        // Sonraki seviyeye geç
        if (currentLevel < totalLevels) {
          document.getElementById(`level${currentLevel}`).classList.add('hidden');
          currentLevel++;
          document.getElementById(`level${currentLevel}`).classList.remove('hidden');
          document.getElementById(`level${currentLevel}`).classList.add('animate');
        } else {
          // Oyun bitti
          document.getElementById(`level${currentLevel}`).classList.add('hidden');
          document.getElementById('final').classList.remove('hidden');
          
          // Büyük kutlama
          createParticles();
          animateParticles();
        }
      } else {
        // Yanlış cevap animasyonu
        const inputElement = document.getElementById(inputId);
        inputElement.style.borderColor = 'var(--error)';
        inputElement.style.animation = 'pulse 0.5s';
        
        setTimeout(() => {
          inputElement.style.borderColor = 'var(--border)';
          inputElement.style.animation = '';
        }, 1000);
        
        alert('Yanlış cevap, tekrar dene!');
      }
    }

    function updateProgressBar() {
      const percentage = (completedLevels / totalLevels) * 100;
      const progressBar = document.getElementById('progress-bar');
      progressBar.style.width = percentage + '%';
      progressBar.innerText = Math.round(percentage) + '%';
    }

    function revealLastTreasure() {
      console.log('%cSon hazineyi buldun! 🎉', 'color: #6366f1; font-size: 20px; font-weight: bold');
      console.log('%cŞifre: "js-interaktif"', 'color: #ec4899; font-size: 18px; font-weight: bold');
      alert('Konsolu kontrol et (F12 > Console)');
    }

    // Geliştirici konsolunda gizli bir mesaj gösterelim
    console.log('%cHTML Hazine Avı Oyunu', 'color: #6366f1; font-size: 20px; font-weight: bold');
    console.log('%cKonsolu açmayı biliyorsun, çok iyi!', 'color: #10b981; font-size: 16px');
    
    // Sayfa yüklendiğinde animasyonlu giriş
    document.addEventListener('DOMContentLoaded', () => {
      // İlk yükleme için ilerleme çubuğunu güncelle
      updateProgressBar();
      
      // Form elemanlarını animasyonlu getir
      const elements = [
        document.querySelector('h1'),
        document.querySelector('#progress-container'),
        document.querySelector('#level1'),
        document.querySelector('button')
      ];
      
      elements.forEach((el, index) => {
        if (el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 300 + (index * 150));
        }
      });
    });