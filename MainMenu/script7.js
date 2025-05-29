// Audio System
    class AudioManager {
      constructor() {
        this.musicEnabled = true;
        this.soundEnabled = true;
        this.backgroundMusic = document.getElementById('backgroundMusic');
        this.init();
      }

      init() {
        // Load preferences from localStorage
        this.musicEnabled = localStorage.getItem('musicEnabled') !== 'false';
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        
        this.updateButtonStates();
        
        // Ses seviyesini ayarla
        this.backgroundMusic.volume = 0.6;
        
        // Müzik etkinse çalmaya başla (kullanıcı etkileşimi sonrası)
        if (this.musicEnabled) {
          this.startBackgroundMusic();
        }
      }

      // Web Audio API ile click sesi oluştur
      createClickSound() {
        if (!this.soundEnabled) return;
        
        try {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
          
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
          console.log('Web Audio API desteklenmiyor');
        }
      }

      // Arkaplan müziği çalmaya başla
      startBackgroundMusic() {
        if (!this.musicEnabled) return;
        
        try {
          // Modern tarayıcılar için autoplay policy gereği kullanıcı etkileşimi gerekiyor
          const playPromise = this.backgroundMusic.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Arkaplan müziği başlatıldı');
              })
              .catch(error => {
                console.log('Müzik otomatik başlatılamadı, kullanıcı etkileşimi gerekiyor:', error);
              });
          }
        } catch (e) {
          console.log('Müzik çalınamadı:', e);
        }
      }

      // Arkaplan müziğini durdur
      stopBackgroundMusic() {
        try {
          this.backgroundMusic.pause();
          this.backgroundMusic.currentTime = 0;
        } catch (e) {
          console.log('Müzik durdurulamadı:', e);
        }
      }

      toggleMusic() {
        this.musicEnabled = !this.musicEnabled;
        localStorage.setItem('musicEnabled', this.musicEnabled);
        this.updateButtonStates();
        
        if (this.musicEnabled) {
          this.startBackgroundMusic();
        } else {
          this.stopBackgroundMusic();
        }
      }

      toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('soundEnabled', this.soundEnabled);
        this.updateButtonStates();
      }

      updateButtonStates() {
        const musicBtn = document.getElementById('musicToggle');
        const soundBtn = document.getElementById('soundToggle');
        
        musicBtn.textContent = this.musicEnabled ? '🎵' : '🔇';
        musicBtn.classList.toggle('muted', !this.musicEnabled);
        
        soundBtn.textContent = this.soundEnabled ? '🔊' : '🔇';
        soundBtn.classList.toggle('muted', !this.soundEnabled);
      }
    }

    // Initialize audio manager
    const audioManager = new AudioManager();

    // Firebase yapılandırması
    const firebaseConfig = {
      apiKey: "AIzaSyAIfrsCikknBrkiocDdY_8vGtth2c20Hao",
      authDomain: "learnhtmlgame.firebaseapp.com",
      databaseURL: "https://learnhtmlgame-default-rtdb.firebaseio.com",
      projectId: "learnhtmlgame",
      storageBucket: "learnhtmlgame.appspot.com",
      messagingSenderId: "58028478626",
      appId: "1:58028478626:web:a9897fa9c57b36afa987fb",
      measurementId: "G-77PDPX66EH"
    };
    
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    
    // Navigate to game with sound effect
    function navigateToGame(url) {
      audioManager.createClickSound();
      setTimeout(() => {
        window.location.href = url;
      }, 100);
    }

    // Skorları oku ve göster
    db.ref("scores").orderByChild("score").limitToLast(10).on("value", snapshot => {
      const leaderboard = document.getElementById("leaderboard");
      leaderboard.innerHTML = "";
      
      const entries = [];
      snapshot.forEach(child => {
        entries.push(child.val());
      });
      
      entries.sort((a, b) => b.score - a.score);
      
      entries.forEach((entry, index) => {
        // Emoji ekleyelim ilk 3 sıra için
        let prefix = "";
        if (index === 0) prefix = "🥇 ";
        else if (index === 1) prefix = "🥈 ";
        else if (index === 2) prefix = "🥉 ";
        
        const row = `<tr><td>${prefix}${entry.name}</td><td>${entry.score}</td></tr>`;
        leaderboard.innerHTML += row;
      });
    });
    
    // Event Listeners
    document.getElementById('musicToggle').addEventListener('click', () => {
      audioManager.createClickSound();
      audioManager.toggleMusic();
    });

    document.getElementById('soundToggle').addEventListener('click', () => {
      audioManager.toggleSound();
    });

    // Leaderboard toggle functionality
    const leaderboardToggle = document.getElementById('leaderboardToggle');
    const leaderboardContainer = document.getElementById('leaderboardContainer');
    
    leaderboardToggle.addEventListener('click', () => {
      audioManager.createClickSound();
      leaderboardContainer.classList.toggle('open');
      
      // Buton efekti
      leaderboardToggle.style.transform = 'scale(0.9)';
      setTimeout(() => {
        leaderboardToggle.style.transform = '';
      }, 150);
    });
    
    // Sayfa yüklendiğinde animasyon efekti
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.container');
      container.style.opacity = '0';
      container.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        container.style.transition = 'opacity 1s ease, transform 1s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 100);

      // İlk kullanıcı etkileşiminde arkaplan müziğini başlat
      const startAudio = () => {
        if (audioManager.musicEnabled) {
          audioManager.startBackgroundMusic();
        }
        document.removeEventListener('click', startAudio);
        document.removeEventListener('keydown', startAudio);
      };
      
      document.addEventListener('click', startAudio);
      document.addEventListener('keydown', startAudio);
    });