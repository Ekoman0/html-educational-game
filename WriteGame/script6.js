

const questions = [
      { question: "HTML'de başlık etiketi nedir?", answer: "<h1>" },
      { question: "Paragraf etiketi nedir?", answer: "<p>" },
      { question: "Resim eklemek için hangi etiket kullanılır?", answer: "<img>" },
      { question: "Kalın yazı için hangi etiket kullanılır?", answer: "<b>" },
      { question: "Link oluşturmak için hangi etiket kullanılır?", answer: "<a>" },
      { question: "HTML dosyasının kök elemanı nedir?", answer: "<html>" },
      { question: "Sayfa başlığını tanımlamak için hangi etiket kullanılır?", answer: "<title>" },
      { question: "HTML'de liste öğelerini tanımlamak için hangi etiket kullanılır?", answer: "<li>" },
      { question: "Sırasız liste oluşturmak için hangi etiket kullanılır?", answer: "<ul>" },
      { question: "Sıralı liste oluşturmak için hangi etiket kullanılır?", answer: "<ol>" },
      { question: "Tabloyu tanımlamak için hangi etiket kullanılır?", answer: "<table>" },
      { question: "Tabloda satır oluşturmak için hangi etiket kullanılır?", answer: "<tr>" },
      { question: "Tabloda hücre oluşturmak için hangi etiket kullanılır?", answer: "<td>" },
      { question: "Tabloda başlık hücresi oluşturmak için hangi etiket kullanılır?", answer: "<th>" },
      { question: "Form oluşturmak için hangi etiket kullanılır?", answer: "<form>" },
      { question: "Form içinde girdi alanı oluşturmak için hangi etiket kullanılır?", answer: "<input>" },
      { question: "HTML dosyasının karakter kodlamasını belirtmek için hangi etiket kullanılır?", answer: "<meta>" },
      { question: "Stil bilgilerini tanımlamak için hangi etiket kullanılır?", answer: "<style>" },
      { question: "Harici stil dosyası bağlamak için hangi etiket kullanılır?", answer: "<link>" },
      { question: "JavaScript kodu eklemek için hangi etiket kullanılır?", answer: "<script>" },
      { question: "Yorum satırını başlatmak için hangi etiket kullanılır?", answer: "<!--" },
      { question: "Sayfanın baş bölümünü tanımlamak için hangi etiket kullanılır?", answer: "<head>" },
      { question: "Sayfanın gövde bölümünü tanımlamak için hangi etiket kullanılır?", answer: "<body>" },
      { question: "Açılır liste (dropdown) oluşturmak için hangi etiket kullanılır?", answer: "<select>" },
      { question: "Açılır listedeki seçenekleri tanımlamak için hangi etiket kullanılır?", answer: "<option>" },
      { question: "İtalik yazı için hangi etiket kullanılır?", answer: "<i>" },
      { question: "Altı çizili yazı için hangi etiket kullanılır?", answer: "<u>" },
      { question: "Üstü çizili yazı için hangi etiket kullanılır?", answer: "<s>" },
      { question: "Alt simge için hangi etiket kullanılır?", answer: "<sub>" },
      { question: "Üst simge için hangi etiket kullanılır?", answer: "<sup>" },
      { question: "Çizgi çekmek için hangi etiket kullanılır?", answer: "<hr>" },
      { question: "Satır sonu eklemek için hangi etiket kullanılır?", answer: "<br>" },
      { question: "Önemli metni vurgulamak için hangi semantik etiket kullanılır?", answer: "<strong>" },
      { question: "Vurgulanmış metin için hangi semantik etiket kullanılır?", answer: "<em>" },
      { question: "HTML5'te makale içeriği için hangi semantik etiket kullanılır?", answer: "<article>" },
      { question: "HTML5'te ana içerik alanı için hangi semantik etiket kullanılır?", answer: "<main>" },
      { question: "HTML5'te üstbilgi için hangi semantik etiket kullanılır?", answer: "<header>" },
      { question: "HTML5'te altbilgi için hangi semantik etiket kullanılır?", answer: "<footer>" },
      { question: "HTML5'te yan içerik için hangi semantik etiket kullanılır?", answer: "<aside>" },
      { question: "HTML5'te navigasyon bölümü için hangi semantik etiket kullanılır?", answer: "<nav>" },
      { question: "Çoklu ortam (video) için hangi etiket kullanılır?", answer: "<video>" },
      { question: "Çoklu ortam (ses) için hangi etiket kullanılır?", answer: "<audio>" },
      { question: "Metni grup halinde biçimlendirmek için hangi etiket kullanılır?", answer: "<div>" },
      { question: "Satır içi metni grup halinde biçimlendirmek için hangi etiket kullanılır?", answer: "<span>" },
      { question: "Resim için alternatif metin tanımlamada hangi özellik kullanılır?", answer: "alt" },
      { question: "Form gönderme düğmesi oluşturmak için hangi input türü kullanılır?", answer: "submit" },
      { question: "Çoklu satır girişi için hangi form elemanı kullanılır?", answer: "<textarea>" },
      { question: "Etiketli form elemanları için hangi etiket kullanılır?", answer: "<label>" },
      { question: "HTML5'te bölümlere ayırmak için hangi etiket kullanılır?", answer: "<section>" },
      { question: "HTML dosyasının doküman tipini belirtmek için ne kullanılır?", answer: "<!DOCTYPE html>" }
    ];
    
    let current = 0;
    let score = 0;
    let streakCount = 0;
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

   
    
    
    // Particles için renkler
    const colors = ['#6366f1', '#ec4899', '#10b981', '#eab308', '#3b82f6'];
    
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
    
    function updateProgress() {
      const progressPercent = (current / questions.length) * 100;
      document.getElementById("progressFill").style.width = progressPercent + "%";
      document.getElementById("questionNumber").innerText = current + 1;
    }
    
    function showFeedback(isCorrect) {
      const feedback = document.getElementById("feedback");
      feedback.classList.remove('success', 'error', 'show');
      
      setTimeout(() => {
        if (isCorrect) {
          feedback.textContent = "✅ Doğru!";
          feedback.classList.add('success', 'show');
        } else {
          feedback.textContent = "❌ Yanlış! Tekrar dene.";
          feedback.classList.add('error', 'show');
        }
      }, 10);
    }
    
    function updateStreak(correct) {
      const streakElement = document.getElementById("streak");
      
      if (correct) {
        streakCount++;
        document.getElementById("streakCount").textContent = streakCount;
        
        if (streakCount >= 3) {
          streakElement.classList.add('show');
        }
      } else {
        streakCount = 0;
        document.getElementById("streakCount").textContent = streakCount;
        streakElement.classList.remove('show');
      }
    }
    
    function animateScoreChange() {
      const scoreElement = document.getElementById("score");
      scoreElement.classList.add('pulse');
      
      setTimeout(() => {
        scoreElement.classList.remove('pulse');
      }, 500);
    }
    
    function animateQuestion() {
      const questionElement = document.getElementById("question");
      questionElement.classList.add('animate');
      
      setTimeout(() => {
        questionElement.classList.remove('animate');
      }, 1500);
    }
    
    function checkAnswer() {
        playButtonSound();
      const input = document.getElementById("answer").value.trim().toLowerCase();
      const correct = questions[current].answer.toLowerCase();
      
      if (input === correct) {
        score += 10;
        document.getElementById("score").innerText = score;
        animateScoreChange();
        showFeedback(true);
        updateStreak(true);
        
        // Eğer streak 3 ve katlarındaysa parçacıkları çalıştır
        if (streakCount >= 3 && streakCount % 3 === 0) {
          createParticles();
          animateParticles();
        }
        
        current++;
        
        if (current < questions.length) {
          setTimeout(() => {
            document.getElementById("question").innerText = questions[current].question;
            document.getElementById("answer").value = "";
            document.getElementById("feedback").classList.remove('show');
            updateProgress();
            animateQuestion();
          }, 1200);
        } else {
          completeGame();
        }
      } else {
        showFeedback(false);
        updateStreak(false);
      }
    }
    
    function completeGame() {
      // Tüm oyun tamamlandığında
      const gameCard = document.getElementById("gameCard");
      gameCard.innerHTML = `
        <div class="completion">
          <div class="completion-emoji">🎉</div>
          <div class="completion-message">Tebrikler! Tüm soruları bitirdin!</div>
          <div class="completion-score">Toplam Puan: ${score} / ${questions.length * 10}</div>
          <button class="restart-btn" onclick="location.reload()">Tekrar Oyna</button>
        </div>
      `;
      
      // Kutlama parçacıkları
      createParticles();
      animateParticles();
    }
    
    // Enter tuşu ile cevap verme
    document.getElementById("answer").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });
    
    // İlk yükleme için ilerleme çubuğunu güncelle
    document.addEventListener('DOMContentLoaded', () => {
      updateProgress();
      animateQuestion();
      
      // Form elemanlarını animasyonlu getir
      const elements = [
        document.querySelector('.input-container'),
        document.querySelector('button'),
        document.querySelector('.progress')
      ];
      
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
      });
    });