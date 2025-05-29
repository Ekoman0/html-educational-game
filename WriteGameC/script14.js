 const questions = [
      { question: "C dilinde tam sayı değişkeni tanımlamak için hangi anahtar kelime kullanılır?", answer: "int" },
      { question: "C dilinde ondalık sayı değişkeni tanımlamak için hangi anahtar kelime kullanılır?", answer: "float" },
      { question: "C dilinde karakter değişkeni tanımlamak için hangi anahtar kelime kullanılır?", answer: "char" },
      { question: "C dilinde çift hassasiyetli ondalık sayı için hangi anahtar kelime kullanılır?", answer: "double" },
      { question: "C dilinde main fonksiyonunun geri dönüş değeri ne olmalıdır?", answer: "int" },
      { question: "C dilinde standart girdi/çıktı kütüphanesini dahil etmek için hangi komut kullanılır?", answer: "#include <stdio.h>" },
      { question: "C dilinde ekrana yazdırmak için hangi fonksiyon kullanılır?", answer: "printf" },
      { question: "C dilinde kullanıcıdan girdi almak için hangi fonksiyon kullanılır?", answer: "scanf" },
      { question: "C dilinde for döngüsünün başlangıç söz dizimi nasıldır?", answer: "for" },
      { question: "C dilinde while döngüsünün başlangıç söz dizimi nasıldır?", answer: "while" },
      { question: "C dilinde koşullu ifade için hangi anahtar kelime kullanılır?", answer: "if" },
      { question: "C dilinde alternatif koşul için hangi anahtar kelime kullanılır?", answer: "else" },
      { question: "C dilinde çoklu koşul kontrolü için hangi yapı kullanılır?", answer: "switch" },
      { question: "C dilinde switch yapısında her durumu sonlandırmak için hangi komut kullanılır?", answer: "break" },
      { question: "C dilinde değişkenin bellek adresini almak için hangi operatör kullanılır?", answer: "&" },
      { question: "C dilinde pointer tanımlamak için hangi operatör kullanılır?", answer: "*" },
      { question: "C dilinde dizi tanımlamak için hangi sembolleri kullanılır?", answer: "[]" },
      { question: "C dilinde string tanımlamak için hangi veri tipi kullanılır?", answer: "char*" },
      { question: "C dilinde fonksiyon tanımlamak için hangi anahtar kelime kullanılır (geri dönüş değeri yoksa)?", answer: "void" },
      { question: "C dilinde sabitler tanımlamak için hangi anahtar kelime kullanılır?", answer: "const" },
      { question: "C dilinde makro tanımlamak için hangi ön işlemci komutu kullanılır?", answer: "#define" },
      { question: "C dilinde yorum satırı başlatmak için hangi semboller kullanılır?", answer: "//" },
      { question: "C dilinde çok satırlı yorum başlatmak için hangi semboller kullanılır?", answer: "/*" },
      { question: "C dilinde dinamik bellek ayırmak için hangi fonksiyon kullanılır?", answer: "malloc" },
      { question: "C dilinde belleği serbest bırakmak için hangi fonksiyon kullanılır?", answer: "free" },
      { question: "C dilinde string kopyalamak için hangi fonksiyon kullanılır?", answer: "strcpy" },
      { question: "C dilinde string uzunluğunu bulmak için hangi fonksiyon kullanılır?", answer: "strlen" },
      { question: "C dilinde random sayı üretmek için hangi fonksiyon kullanılır?", answer: "rand" },
      { question: "C dilinde mutlak değer almak için hangi fonksiyon kullanılır?", answer: "abs" },
      { question: "C dilinde karekök almak için hangi fonksiyon kullanılır?", answer: "sqrt" },
      { question: "C dilinde struct (yapı) tanımlamak için hangi anahtar kelime kullanılır?", answer: "struct" },
      { question: "C dilinde enum (numaralama) tanımlamak için hangi anahtar kelime kullanılır?", answer: "enum" },
      { question: "C dilinde typedef ile yeni veri tipi tanımlamak için hangi anahtar kelime kullanılır?", answer: "typedef" },
      { question: "C dilinde dosya işlemleri için hangi veri tipi kullanılır?", answer: "FILE" },
      { question: "C dilinde dosya açmak için hangi fonksiyon kullanılır?", answer: "fopen" },
      { question: "C dilinde dosya kapatmak için hangi fonksiyon kullanılır?", answer: "fclose" },
      { question: "C dilinde dosyaya yazmak için hangi fonksiyon kullanılır?", answer: "fprintf" },
      { question: "C dilinde dosyadan okumak için hangi fonksiyon kullanılır?", answer: "fscanf" },
      { question: "C dilinde do-while döngüsünün başlangıç anahtar kelimesi nedir?", answer: "do" },
      { question: "C dilinde değişkenin boyutunu öğrenmek için hangi operatör kullanılır?", answer: "sizeof" },
      { question: "C dilinde global değişken tanımlamak için hangi anahtar kelime kullanılır?", answer: "extern" },
      { question: "C dilinde sadece o dosyada kullanılacak değişken için hangi anahtar kelime kullanılır?", answer: "static" },
      { question: "C dilinde otomatik değişken için hangi anahtar kelime kullanılır?", answer: "auto" },
      { question: "C dilinde değişkenin değerini değiştirilemez yapmak için hangi anahtar kelime kullanılır?", answer: "const" },
      { question: "C dilinde volatile değişken tanımlamak için hangi anahtar kelime kullanılır?", answer: "volatile" },
      { question: "C dilinde union (birleşim) tanımlamak için hangi anahtar kelime kullanılır?", answer: "union" },
      { question: "C dilinde goto ile etiket tanımlamak için hangi sembol kullanılır?", answer: ":" },
      { question: "C dilinde koşullu atama operatörü nasıl yazılır?", answer: "?:" },
      { question: "C dilinde bitwise AND operatörü nedir?", answer: "&" },
      { question: "C dilinde logical AND operatörü nedir?", answer: "&&" }
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
      playButtonSound() ;
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
          <div class="completion-message">Tebrikler! Tüm C dili sorularını bitirdin!</div>
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