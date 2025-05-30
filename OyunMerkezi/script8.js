// Kod yağmuru efektini oluşturma fonksiyonu
function createCodeRain() {
  // Ekranda rastgele düşecek kod parçacıkları
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
  
  // Kod yağmuru konteyneri
  const codeRainContainer = document.getElementById('codeRain');
  
  // Belirli aralıklarla yeni kod parçacıkları oluştur ve ekrana bırak
  setInterval(() => {
    const drop = document.createElement('div');
    drop.className = 'code-drop'; // CSS animasyonu için sınıf
    // Kod parçacığını rastgele seç
    drop.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    // Yağmurun yatay pozisyonunu rastgele ayarla
    drop.style.left = Math.random() * 100 + '%';
    // Animasyon süresini rastgele ayarla (5-8 saniye arası)
    drop.style.animationDuration = (Math.random() * 3 + 5) + 's';
    // Animasyon gecikmesini rastgele ayarla (0-2 saniye arası)
    drop.style.animationDelay = Math.random() * 2 + 's';
    
    // Yağmur parçasını ekrana ekle
    codeRainContainer.appendChild(drop);
    
    // 8 saniye sonra öğeyi kaldır (temizlik)
    setTimeout(() => {
      drop.remove();
    }, 8000);
  }, 300); // Her 300 ms bir yeni parçacık ekle
}

// Kod yağmuru efektini hemen başlat
createCodeRain();


// Sayfa gezinme fonksiyonları
function navigateToHtmlGames(event) {
  // Tıklanan oyunun kartını bul ve küçültme animasyonu uygula
  const card = event.target.closest('.game-card');
  if (card) {
    card.style.transform = 'scale(0.95)';
  }
  // 200 ms sonra yeni sayfaya yönlendir
  setTimeout(() => {
    window.location.href = "../MainMenu/MainMenu.html"; 
  }, 200);
}

function navigateToCGames(event) {
  // Tıklanan oyunun kartını bul ve küçültme animasyonu uygula
  const card = event.target.closest('.game-card');
  if (card) {
    card.style.transform = 'scale(0.95)';
  }
  // 200 ms sonra yeni sayfaya yönlendir
  setTimeout(() => {
   window.location.href = "../CGameMenu/CGameMenu.html"; 
  }, 200);
}


// Sayacı animasyonlu şekilde artıran fonksiyon
function animateCounter(elementId, target, duration = 2000) {
  const element = document.getElementById(elementId);
  const start = 0;
  // Her 16 ms'de yapılacak artış miktarı (60fps varsayılarak)
  const increment = target / (duration / 16);
  let current = start;
  
  // Aralıklı artış işlemi
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      // Hedef değere ulaşınca son değeri yaz ve sayacı durdur
      element.textContent = target + (elementId === 'activePlayers' || elementId === 'completedLessons' ? '+' : '');
      clearInterval(timer);
    } else {
      // Güncel değeri yaz (tam sayı olarak)
      element.textContent = Math.floor(current) + (elementId === 'activePlayers' || elementId === 'completedLessons' ? '+' : '');
    }
  }, 16);
}

// Sayaç animasyonlarını 1.8 saniye gecikmeyle başlat
setTimeout(() => {
  animateCounter('totalGames', 12);
  animateCounter('activePlayers', 500);
  animateCounter('completedLessons', 1000);
}, 1800);


// Kartlara hover (üzerine gelme) efekti ve ses efektleri (isteğe bağlı)
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    // İstersen hover sesi ekleyebilirsin
    card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
});


// Parallax efektini fare hareketine göre uygulama
document.addEventListener('mousemove', (e) => {
  const particles = document.querySelectorAll('.particle');
  const x = e.clientX / window.innerWidth;  // Fare X oranı (0-1)
  const y = e.clientY / window.innerHeight; // Fare Y oranı (0-1)
  
  // Her parçacığı indeksine göre farklı hızda hareket ettir
  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.5; // Hız katsayısı
    const xOffset = (x - 0.5) * speed * 50; // X ekseninde kaydırma
    const yOffset = (y - 0.5) * speed * 50; // Y ekseninde kaydırma
    
    // Parçacığı kaydır
    particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
});
