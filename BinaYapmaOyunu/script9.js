
// Ses sistemini yöneten sınıf
class AudioManager {
  constructor() {
    this.soundEnabled = true;
    this.init();
  }

  init() {
     // localStorage'dan ses tercihlerini yükle
    this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
  }

  // Tıklama sesi üret (Web Audio API kullanır)
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

  
  // Başarı sesi üret
  createSuccessSound() {
    if (!this.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C note
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E note
      oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2); // G note
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      console.log('Web Audio API desteklenmiyor');
    }
  }

  // Hata sesi
  createErrorSound() {
    if (!this.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
      console.log('Web Audio API desteklenmiyor');
    }
  }
}

// AudioManager sınıfını başlat
const audioManager = new AudioManager();
// Oyun değişkenleri
        let currentLevel = 1;
        let lives = 3;
        let currentQuestionIndex = 0;
        let towerHeight = 0;

        // C Dili Soruları
        const questions = [
            {
                code: '#include <span class="blank" data-answer="stdio">[?]</span>.h>\nint main() {\n    return 0;\n}',
                options: ['stdio', 'stdlib', 'string', 'math'],
                correct: 'stdio'
            },
            {
                code: 'int main() {\n    printf("Merhaba Dünya\\n");\n    return <span class="blank" data-answer="0">[?]</span>;\n}',
                options: ['0', '1', '-1', 'NULL'],
                correct: '0'
            },
            {
                code: 'int x = 10;\nint *p = <span class="blank" data-answer="&x">[?]</span>;\nprintf("%d", *p);',
                options: ['&x', 'x', '*x', 'x*'],
                correct: '&x'
            },
            {
                code: 'for(int i = 0; i < 5; <span class="blank" data-answer="i++">[?]</span>) {\n    printf("%d ", i);\n}',
                options: ['i++', 'i--', '++i', 'i+=2'],
                correct: 'i++'
            },
            {
                code: 'char str[20];\n<span class="blank" data-answer="strcpy">[?]</span>(str, "Merhaba");',
                options: ['strcpy', 'strcat', 'strcmp', 'strlen'],
                correct: 'strcpy'
            },
            {
                code: 'int arr[5] = {1, 2, 3, 4, 5};\nprintf("%d", arr[<span class="blank" data-answer="0">[?]</span>]);',
                options: ['0', '1', '5', '-1'],
                correct: '0'
            },
            {
                code: '<span class="blank" data-answer="int">[?]</span> factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}',
                options: ['int', 'void', 'char', 'float'],
                correct: 'int'
            },
            {
                code: 'FILE *fp = fopen("dosya.txt", "<span class="blank" data-answer="r">[?]</span>");',
                options: ['r', 'w', 'a', 'rb'],
                correct: 'r'
            },
            {
                code: 'struct Ogrenci {\n    char ad[50];\n    int yas;\n};\nstruct Ogrenci ogr;\nstrcpy(ogr.<span class="blank" data-answer="ad">[?]</span>, "Ali");',
                options: ['ad', 'yas', 'Ogrenci', 'ogr'],
                correct: 'ad'
            },
            {
                code: 'int *ptr = <span class="blank" data-answer="malloc">[?]</span>(sizeof(int) * 10);',
                options: ['malloc', 'calloc', 'free', 'realloc'],
                correct: 'malloc'
            },
            {
                code: 'switch(x) {\n    case 1: printf("Bir"); <span class="blank" data-answer="break">[?]</span>;\n    case 2: printf("İki"); break;\n}',
                options: ['break', 'continue', 'return', 'exit'],
                correct: 'break'
            },
            {
                code: 'while(x > 0) {\n    printf("%d ", x);\n    x<span class="blank" data-answer="--">[?]</span>;\n}',
                options: ['--', '++', '+=2', '*=2'],
                correct: '--'
            },
            {
                code: '<span class="blank" data-answer="const double">[?]</span> PI = 3.14159;',
                options: ['const double', 'int', 'char', 'static'],
                correct: 'const double'
            },
            {
                code: 'enum Gunler {PAZARTESİ, SALI, ÇARŞAMBA};\nenum Gunler gun = <span class="blank" data-answer="PAZARTESİ">[?]</span>;',
                options: ['PAZARTESİ', '0', '1', 'GÜNLER'],
                correct: 'PAZARTESİ'
            },
            {
                code: 'void func(int arr[], int <span class="blank" data-answer="size">[?]</span>) {\n    for(int i = 0; i < size; i++)\n        printf("%d ", arr[i]);\n}',
                options: ['size', 'length', 'count', 'index'],
                correct: 'size'
            }
        ];

        // Yıldızları oluştur
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Soruyu göster
        function showQuestion() {
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0;
                currentLevel++;
                document.getElementById('level').textContent = `Seviye: ${currentLevel}`;
            }

            const question = questions[currentQuestionIndex];
            const container = document.getElementById('question-container');
            
            container.innerHTML = `
                <div class="question">
                    <h3>C Dili Kod Tamamlama - Soru ${currentQuestionIndex + 1}</h3>
                    <div class="code-container">
                        <div class="code-line">${question.code}</div>
                    </div>
                    <div class="options">
                        ${question.options.map(option => `
                            <div class="option" onclick="checkAnswer('${option}')">${option}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Cevabı kontrol et
        function checkAnswer(answer) {
             audioManager.createClickSound();
            const question = questions[currentQuestionIndex];
            const blank = document.querySelector('.blank');
            
            if (answer === question.correct) {
                blank.classList.add('correct');
                blank.innerHTML = answer;

                  audioManager.createSuccessSound();
        
                // Başarı efekti
                const successEffect = document.createElement('div');
                successEffect.className = 'success-effect';
                successEffect.textContent = '✓';
                document.querySelector('.right-panel').appendChild(successEffect);
                setTimeout(() => successEffect.remove(), 1000);
                
                // Yeni kat ekle
                setTimeout(() => {
                    addFloor();
                    currentQuestionIndex++;
                    showQuestion();
                }, 1000);
            } else {
                blank.classList.add('wrong');
                setTimeout(() => blank.classList.remove('wrong'), 500);
                
                lives--;
                updateLives();
                
                if (lives === 0) {
                    gameOver();
                }
            }
        }

        // Yeni kat ekle
        function addFloor() {
            const towerContainer = document.getElementById('towerContainer');
            const floor = document.createElement('div');
            floor.className = 'floor';
            towerContainer.insertBefore(floor, towerContainer.firstChild);
            
            towerHeight++;
            
            // Kamerayı hareket ettir - daha büyük artışlarla
            const gameView = document.getElementById('gameView');
            const cameraHeight = towerHeight * 65; // Her kat yüksekliği kadar
            gameView.style.transform = `translateY(${cameraHeight}px)`;
        }

        // Can durumunu güncelle
        function updateLives() {
            const hearts = document.querySelectorAll('.heart');
            hearts.forEach((heart, index) => {
                if (index >= lives) {
                    heart.classList.add('lost');
                } else {
                    heart.classList.remove('lost');
                }
            });
        }

        // Oyun bitti
        function gameOver() {
              audioManager.createErrorSound();
            document.getElementById('gameOver').style.display = 'block';
            
            // Kuleyi yık
            const floors = document.querySelectorAll('.floor');
            floors.forEach((floor, index) => {
                setTimeout(() => {
                    floor.style.transform = 'rotate(' + (Math.random() * 90 - 45) + 'deg) translateY(500px)';
                    floor.style.opacity = '0';
                    floor.style.transition = 'all 1s ease-out';
                }, index * 100);
            });
        }

        // Oyunu yeniden başlat
        function restartGame() {
             audioManager.createClickSound();
            lives = 3;
            currentLevel = 1;
            currentQuestionIndex = 0;
            towerHeight = 0;
            
            document.getElementById('gameOver').style.display = 'none';
            document.getElementById('towerContainer').innerHTML = '';
            document.getElementById('gameView').style.transform = 'translateY(0)';
            document.getElementById('level').textContent = 'Seviye: 1';
            
            const hearts = document.querySelectorAll('.heart');
            hearts.forEach(heart => heart.classList.remove('lost'));
            
            showQuestion();
        }

        // Oyunu başlat
        createStars();
        showQuestion();