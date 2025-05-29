const questions = [
      {
        code: "<ul><li>Item 1<li>Item 2</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      },
      {
        code: "<a href='tel:+905555555555'>Ara",
        correct: (code) => code.includes("<a") && code.includes("</a>")
      },
      {
        code: "<p>Merhaba Canavar",
        correct: (code) => code.includes("<p>") && code.includes("</p>")
      },
      {
        code: "<h1>Başlık",
        correct: (code) => code.includes("<h1>") && code.includes("</h1>")
      },
      {
        code: "<ul><li>Öğe 1<li>Öğe 2</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      },
      {
        code: "<a href='https://ornek.com'>Link",
        correct: (code) => code.includes("<a") && code.includes("</a>")
      },
      {
        code: "<div>İçerik",
        correct: (code) => code.includes("<div>") && code.includes("</div>")
      },
      {
        code: "<h2>Alt Başlık",
        correct: (code) => code.includes("<h2>") && code.includes("</h2>")
      },
      {
        code: "<p>Bu bir paragraf",
        correct: (code) => code.includes("<p>") && code.includes("</p>")
      },
      {
        code: "<span>Metin",
        correct: (code) => code.includes("<span>") && code.includes("</span>")
      },
      
      {
        code: "<img src='resim.jpg'>Alt Metin",
        correct: (code) => code.includes("<img") && code.includes("alt=")
      },
      {
        code: "<h3>Üçüncü Seviye",
        correct: (code) => code.includes("<h3>") && code.includes("</h3>")
      },
      {
        code: "<p><strong>Bold",
        correct: (code) => code.includes("<strong>") && code.includes("</strong>")
      },
      {
        code: "<em>İtalik Metin",
        correct: (code) => code.includes("<em>") && code.includes("</em>")
      },
      {
        code: "<ol><li>Adım 1<li>Adım 2</ol>",
        correct: (code) => code.includes("<ol>") && code.includes("</ol>") && code.includes("</li>")
      },
      {
        code: "<table><tr><td>Hücre",
        correct: (code) => code.includes("<table>") && code.includes("</table>") && code.includes("</td>")
      },
      {
        code: "<h4>Dördüncü Seviye",
        correct: (code) => code.includes("<h4>") && code.includes("</h4>")
      },
      {
        code: "<p><i>İtalik",
        correct: (code) => code.includes("<i>") && code.includes("</i>")
      },
      {
        code: "<div><p>İç İçerik",
        correct: (code) => code.includes("<div>") && code.includes("</div>") && code.includes("</p>")
      },
      {
        code: "<a href='mailto:ornek@ornek.com'>E-posta",
        correct: (code) => code.includes("<a") && code.includes("</a>")
      },
      {
        code: "<ul><li>Bir<li>İki<li>Üç</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      },
      {
        code: "<h5>Beşinci Seviye",
        correct: (code) => code.includes("<h5>") && code.includes("</h5>")
      },
      {
        code: "<p><b>Kalın Metin",
        correct: (code) => code.includes("<b>") && code.includes("</b>")
      },
      {
        code: "<blockquote>Alıntı",
        correct: (code) => code.includes("<blockquote>") && code.includes("</blockquote>")
      },
      {
        code: "<ol><li>İlk<li>İkinci</ol>",
        correct: (code) => code.includes("<ol>") && code.includes("</ol>") && code.includes("</li>")
      },
      {
        code: "<img src='foto.jpg' Alt Metin",
        correct: (code) => code.includes("<img") && code.includes("alt=")
      },
      {
        code: "<h6>Altıncı Seviye",
        correct: (code) => code.includes("<h6>") && code.includes("</h6>")
      },
      {
        code: "<p><u>Altı Çizili",
        correct: (code) => code.includes("<u>") && code.includes("</u>")
      },
      {
        code: "<div><span>İç Metin",
        correct: (code) => code.includes("<div>") && code.includes("</div>") && code.includes("</span>")
      },
      {
        code: "<a href='#section'>Bağlantı",
        correct: (code) => code.includes("<a") && code.includes("</a>")
      },
      {
        code: "<ul><li>A<li>B<li>C</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      },
      {
        code: "<h2>İkinci Başlık",
        correct: (code) => code.includes("<h2>") && code.includes("</h2>")
      },
      {
        code: "<p><strong>Önemli",
        correct: (code) => code.includes("<strong>") && code.includes("</strong>")
      },
      {
        code: "<em>Öne Çıkan",
        correct: (code) => code.includes("<em>") && code.includes("</em>")
      },
      {
        code: "<ol><li>1<li>2<li>3</ol>",
        correct: (code) => code.includes("<ol>") && code.includes("</ol>") && code.includes("</li>")
      },
      {
        code: "<table><tr><td>Veri",
        correct: (code) => code.includes("<table>") && code.includes("</table>") && code.includes("</td>")
      },
      {
        code: "<h3>Üçüncü Başlık",
        correct: (code) => code.includes("<h3>") && code.includes("</h3>")
      },
      {
        code: "<p><i>İtalik Metin",
        correct: (code) => code.includes("<i>") && code.includes("</i>")
      },
      {
        code: "<div><p>İçerik",
        correct: (code) => code.includes("<div>") && code.includes("</div>") && code.includes("</p>")
      },
      
      {
        code: "<ul><li>X<li>Y<li>Z</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      },
      {
        code: "<h4>Dördüncü Başlık",
        correct: (code) => code.includes("<h4>") && code.includes("</h4>")
      },
      {
        code: "<p><b>Kalın",
        correct: (code) => code.includes("<b>") && code.includes("</b>")
      },
      {
        code: "<blockquote>Özel Alıntı",
        correct: (code) => code.includes("<blockquote>") && code.includes("</blockquote>")
      },
      {
        code: "<ol><li>Alpha<li>Beta</ol>",
        correct: (code) => code.includes("<ol>") && code.includes("</ol>") && code.includes("</li>")
      },
      {
        code: "<img src='resim.png' Alt Metin",
        correct: (code) => code.includes("<img") && code.includes("alt=")
      },
      {
        code: "<h5>Beşinci Başlık",
        correct: (code) => code.includes("<h5>") && code.includes("</h5>")
      },
      {
        code: "<p><u>Alt Çizgili",
        correct: (code) => code.includes("<u>") && code.includes("</u>")
      },
      {
        code: "<div><span>İç Metin",
        correct: (code) => code.includes("<div>") && code.includes("</div>") && code.includes("</span>")
      },
      {
        code: "<a href='https://ornek2.com'>Link 2",
        correct: (code) => code.includes("<a") && code.includes("</a>")
      },
      {
        code: "<ul><li>Son<li>Öğe</ul>",
        correct: (code) => code.includes("<ul>") && code.includes("</ul>") && code.includes("</li>")
      }
    ];

    let currentIndex = 0;

    function loadQuestion() {
      document.getElementById("codeInput").value = questions[currentIndex].code;
      document.getElementById("monsterImage").src = "kizgin.png";
      const monsterDiv = document.getElementById("monster");
      monsterDiv.classList.remove("happy-stars", "happy-shake", "angry-flames", "angry-screen","happy-screen");
      document.getElementById("message").textContent = "";
    }

    // Butona basma sesi çalma fonksiyonu
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

    function checkCode() {
      // Butona basma sesi çal
      playButtonSound();
      
      const input = document.getElementById("codeInput").value;
      const isCorrect = questions[currentIndex].correct(input);
      const monsterImage = document.getElementById("monsterImage");
      const monsterDiv = document.getElementById("monster");
      const message = document.getElementById("message");

      // Önceki animasyon sınıflarını kaldır
      monsterDiv.classList.remove("happy-stars", "happy-shake", "angry-flames", "angry-screen","happy-screen");
      monsterImage.style.animation = "none";

      if (isCorrect) {
        monsterImage.src = "mutlu.png";
        message.textContent = "Harika! Canavar mutlu oldu!";
        // Mutlu animasyonu: dönme, yıldız patlama ve zemin titreme
        monsterImage.style.animation = "spin 1s ease";
        monsterDiv.classList.add("happy-stars", "happy-shake");

        setTimeout(() => {
          currentIndex++;
          if (currentIndex < questions.length) {
            loadQuestion();
          } else {
            message.textContent = "Tüm canavarlar mutlu! 🎉";
            document.getElementById("codeInput").style.display = "none";
            monsterImage.src = "mutlu.png";
            monsterImage.style.animation = "spin 1s ease";
            monsterDiv.classList.add("happy-stars", "happy-shake");
          }
        }, 1500);
      } else {
        monsterImage.src = "kizgin.png";
        message.textContent = "Hatalı... Etiketleri kontrol et!";

        // Önce animasyon sınıflarını kaldır
        monsterImage.style.animation = "none";
        monsterDiv.classList.remove("angry-flames", "angry-screen");

        // DOM'u zorla yeniden boyat (reflow) — önemli!
        void monsterImage.offsetWidth;

        // Sonra animasyonları yeniden uygula
        monsterImage.style.animation = "angry-shake 0.5s ease";
        monsterDiv.classList.add("angry-flames", "angry-screen");
      }
    }

  function goHome() {
  window.location.href = "../MainMenu/MainMenu.html"; 
}


    window.onload = loadQuestion;