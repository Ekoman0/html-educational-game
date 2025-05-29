// C oyunları için in-memory leaderboard (Firebase yerine)
    let cScores = JSON.parse(localStorage.getItem('cGameScores') || '[]');
    
    // Skorları göster
    function updateLeaderboard() {
      const leaderboard = document.getElementById("leaderboard");
      leaderboard.innerHTML = "";
      
      // Toplam skorlara göre sırala
      const aggregatedScores = {};
      cScores.forEach(score => {
        if (aggregatedScores[score.name]) {
          aggregatedScores[score.name] += score.score;
        } else {
          aggregatedScores[score.name] = score.score;
        }
      });
      
      const sortedScores = Object.entries(aggregatedScores)
        .map(([name, score]) => ({name, score}))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      
      sortedScores.forEach((entry, index) => {
        let prefix = "";
        if (index === 0) prefix = "🥇 ";
        else if (index === 1) prefix = "🥈 ";
        else if (index === 2) prefix = "🥉 ";
        
        const row = `<tr><td>${prefix}${entry.name}</td><td>${entry.score}</td></tr>`;
        leaderboard.innerHTML += row;
      });
    }
    
    // Sayfa yüklendiğinde skorları güncelle
    updateLeaderboard();
    
    // Leaderboard toggle functionality
    const leaderboardToggle = document.getElementById('leaderboardToggle');
    const leaderboardContainer = document.getElementById('leaderboardContainer');
    
    leaderboardToggle.addEventListener('click', () => {
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
    });
    
    // Skorları localStorage'a kaydetme fonksiyonu (diğer oyun sayfalarından çağrılacak)
    function saveScore(playerName, gameScore, gameType) {
      cScores.push({
        name: playerName,
        score: gameScore,
        game: gameType,
        date: new Date().toISOString()
      });
      localStorage.setItem('cGameScores', JSON.stringify(cScores));
      updateLeaderboard();
    }
    
    // Global fonksiyon olarak tanımla
    window.saveScore = saveScore;