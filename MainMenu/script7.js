// Ses Sistemi - Oyun müzikleri ve efektlerini yöneten sınıf
class AudioManager {
  constructor() {
    // Varsayılan ses ayarları
    this.musicEnabled = true;  // Müzik açık mı?
    this.soundEnabled = true;  // Ses efektleri açık mı?
    
    // HTML'deki arkaplan müziği elementini al
    this.backgroundMusic = document.getElementById('backgroundMusic');
    
    // Ses yöneticisini başlat
    this.init();
  }

  // Ses yöneticisini başlatan ana fonksiyon
  init() {
    // Kullanıcının önceki tercihlerini localStorage'dan yükle
    this.musicEnabled = localStorage.getItem('musicEnabled') !== 'false';
    this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    
    // Buton durumlarını güncelle (sesli/sessiz göstergeleri)
    this.updateButtonStates();
    
    // Arkaplan müziğinin ses seviyesini ayarla (0-1 arası)
    this.backgroundMusic.volume = 0.6;
    
    // Eğer müzik etkinse çalmaya başla (kullanıcı etkileşimi sonrası)
    if (this.musicEnabled) {
      this.startBackgroundMusic();
    }
  }

  // Web Audio API kullanarak tıklama sesi oluştur
  createClickSound() {
    // Ses efektleri kapalıysa hiçbir şey yapma
    if (!this.soundEnabled) return;
    
    try {
      // Ses bağlamı oluştur (farklı tarayıcılar için uyumluluk)
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Osilatör (ses dalgası üretici) oluştur
      const oscillator = audioContext.createOscillator();
      
      // Ses seviyesi kontrolü için gain node oluştur
      const gainNode = audioContext.createGain();
      
      // Ses yolunu bağla: osilatör -> gain -> hoparlör
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Başlangıç frekansı 800Hz olarak ayarla
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      
      // 0.1 saniyede frekansı 400Hz'e düşür (tıklama sesi efekti)
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      // Başlangıç ses seviyesi (0.3 = %30)
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      
      // Ses seviyesini yavaşça düşür (fade out efekti)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      // Sesi başlat ve 0.1 saniye sonra durdur
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Web Audio API desteklenmiyorsa hata mesajı yazdır
      console.log('Web Audio API desteklenmiyor');
    }
  }

  // Arkaplan müziğini çalmaya başlatan fonksiyon
  startBackgroundMusic() {
    // Müzik kapalıysa hiçbir şey yapma
    if (!this.musicEnabled) return;
    
    try {
      // Modern tarayıcılar autoplay policy gereği kullanıcı etkileşimi bekler
      const playPromise = this.backgroundMusic.play();
      
      // play() fonksiyonu Promise döndürüyorsa
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Müzik başarıyla başlatıldı
            console.log('Arkaplan müziği başlatıldı');
          })
          .catch(error => {
            // Autoplay engellenirse bu hata alınır
            console.log('Müzik otomatik başlatılamadı, kullanıcı etkileşimi gerekiyor:', error);
          });
      }
    } catch (e) {
      // Genel müzik hatası
      console.log('Müzik çalınamadı:', e);
    }
  }

  // Arkaplan müziğini durduran fonksiyon
  stopBackgroundMusic() {
    try {
      // Müziği duraklat
      this.backgroundMusic.pause();
      // Müziği başa sar
      this.backgroundMusic.currentTime = 0;
    } catch (e) {
      // Müzik durdurma hatası
      console.log('Müzik durdurulamadı:', e);
    }
  }

  // Müzik açma/kapama toggle fonksiyonu
  toggleMusic() {
    // Müzik durumunu tersine çevir
    this.musicEnabled = !this.musicEnabled;
    
    // Yeni durumu localStorage'a kaydet
    localStorage.setItem('musicEnabled', this.musicEnabled);
    
    // Buton görünümlerini güncelle
    this.updateButtonStates();
    
    // Müzik durumuna göre başlat veya durdur
    if (this.musicEnabled) {
      this.startBackgroundMusic();
    } else {
      this.stopBackgroundMusic();
    }
  }

  // Ses efektleri açma/kapama toggle fonksiyonu
  toggleSound() {
    // Ses durumunu tersine çevir
    this.soundEnabled = !this.soundEnabled;
    
    // Yeni durumu localStorage'a kaydet
    localStorage.setItem('soundEnabled', this.soundEnabled);
    
    // Buton görünümlerini güncelle
    this.updateButtonStates();
  }

  // Müzik ve ses butonlarının görünümünü güncelleyen fonksiyon
  updateButtonStates() {
    // HTML'den butonları al
    const musicBtn = document.getElementById('musicToggle');
    const soundBtn = document.getElementById('soundToggle');
    
    // Müzik butonunun emoji ve CSS sınıfını ayarla
    musicBtn.textContent = this.musicEnabled ? '🎵' : '🔇';  // Sesli/sessiz emoji
    musicBtn.classList.toggle('muted', !this.musicEnabled);  // CSS sınıfı ekle/çıkar
    
    // Ses butonu için aynı işlemi yap
    soundBtn.textContent = this.soundEnabled ? '🔊' : '🔇';
    soundBtn.classList.toggle('muted', !this.soundEnabled);
  }
}

// Ses yöneticisi örneği oluştur (global kullanım için)
const audioManager = new AudioManager();

// Firebase yapılandırması - Veritabanı bağlantısı için gerekli bilgiler
const firebaseConfig = {
  apiKey: "AIzaSyAIfrsCikknBrkiocDdY_8vGtth2c20Hao",              // API anahtarı
  authDomain: "learnhtmlgame.firebaseapp.com",                    // Kimlik doğrulama domain'i
  databaseURL: "https://learnhtmlgame-default-rtdb.firebaseio.com", // Veritabanı URL'si
  projectId: "learnhtmlgame",                                     // Proje ID'si
  storageBucket: "learnhtmlgame.appspot.com",                    // Depolama bucket'ı
  messagingSenderId: "58028478626",                               // Mesajlaşma servis ID'si
  appId: "1:58028478626:web:a9897fa9c57b36afa987fb",             // Uygulama ID'si
  measurementId: "G-77PDPX66EH"                                  // Analytics ölçüm ID'si
};

// Firebase'i yapılandırma ile başlat
firebase.initializeApp(firebaseConfig);

// Veritabanı referansını al
const db = firebase.database();

// Oyuna ses efekti ile yönlendiren fonksiyon
function navigateToGame(url) {
  // Tıklama sesi çal
  audioManager.createClickSound();
  
  // 100ms bekleyip sayfayı değiştir (ses efektinin duyulması için)
  setTimeout(() => {
    window.location.href = url;
  }, 100);
}

// Skorları veritabanından oku ve liderlik tablosunu güncelle
db.ref("scores")                    // "scores" node'una git
  .orderByChild("score")            // "score" alanına göre sırala
  .limitToLast(10)                  // Son 10 kaydı al (en yüksek skorlar)
  .on("value", snapshot => {        // Veri değişikliklerini dinle
    
    // HTML'deki liderlik tablosu elementini al
    const leaderboard = document.getElementById("leaderboard");
    
    // Tabloyu temizle
    leaderboard.innerHTML = "";
    
    // Verileri geçici diziye aktar
    const entries = [];
    snapshot.forEach(child => {
      entries.push(child.val());    // Her veri kaydını diziye ekle
    });
    
    // Skorlara göre büyükten küçüğe sırala
    entries.sort((a, b) => b.score - a.score);
    
    // Her skor kaydı için tablo satırı oluştur
    entries.forEach((entry, index) => {
      // İlk 3 sıra için özel emoji ekle
      let prefix = "";
      if (index === 0) prefix = "🥇 ";        // Altın madalya
      else if (index === 1) prefix = "🥈 ";   // Gümüş madalya
      else if (index === 2) prefix = "🥉 ";   // Bronz madalya
      
      // Tablo satırını HTML olarak oluştur
      const row = `<tr><td>${prefix}${entry.name}</td><td>${entry.score}</td></tr>`;
      
      // Satırı tabloya ekle
      leaderboard.innerHTML += row;
    });
  });

// Olay Dinleyicileri (Event Listeners)

// Müzik toggle butonu için tıklama dinleyicisi
document.getElementById('musicToggle').addEventListener('click', () => {
  audioManager.createClickSound();  // Tıklama sesi çal
  audioManager.toggleMusic();       // Müziği aç/kapat
});

// Ses toggle butonu için tıklama dinleyicisi
document.getElementById('soundToggle').addEventListener('click', () => {
  audioManager.toggleSound();       // Sesi aç/kapat (tıklama sesi çalmıyor çünkü ses kapatılıyor olabilir)
});

// Liderlik tablosu toggle işlevselliği
const leaderboardToggle = document.getElementById('leaderboardToggle');      // Toggle butonu
const leaderboardContainer = document.getElementById('leaderboardContainer'); // Tablo konteyneri

// Liderlik tablosu toggle butonu için tıklama dinleyicisi
leaderboardToggle.addEventListener('click', () => {
  audioManager.createClickSound();  // Tıklama sesi çal
  
  // Tabloyu aç/kapat (CSS sınıfı ile)
  leaderboardContainer.classList.toggle('open');
  
  // Buton tıklama efekti - butonu küçült ve geri büyüt
  leaderboardToggle.style.transform = 'scale(0.9)';  // %90 boyutuna küçült
  setTimeout(() => {
    leaderboardToggle.style.transform = '';          // Normal boyutuna dön
  }, 150);  // 150ms sonra
});

// Sayfa yüklendiğinde çalışacak animasyon ve ses sistemi
document.addEventListener('DOMContentLoaded', () => {
  
  // Ana konteyneri al
  const container = document.querySelector('.container');
  
  // Başlangıçta görünmez ve aşağıda konumlandır
  container.style.opacity = '0';              // Şeffaf yap
  container.style.transform = 'translateY(20px)';  // 20px aşağı kaydır
  
  // 100ms sonra görünür animasyonu başlat
  setTimeout(() => {
    // Geçiş efektlerini ayarla
    container.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // Görünür yap ve yukarı kaydır
    container.style.opacity = '1';            // Tamamen görünür
    container.style.transform = 'translateY(0)';  // Normal konuma getir
  }, 100);

  // İlk kullanıcı etkileşiminde arkaplan müziğini başlatan fonksiyon
  const startAudio = () => {
    // Müzik etkinse başlat
    if (audioManager.musicEnabled) {
      audioManager.startBackgroundMusic();
    }
    
    // Bu dinleyicileri kaldır (sadece bir kez çalışsın)
    document.removeEventListener('click', startAudio);
    document.removeEventListener('keydown', startAudio);
  };
  
  // İlk tıklama veya tuş basımında müziği başlat
  document.addEventListener('click', startAudio);    // Mouse tıklaması
  document.addEventListener('keydown', startAudio);  // Klavye tuşu
});