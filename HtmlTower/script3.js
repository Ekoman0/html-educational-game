  // Oyun değişkenleri
        let currentLevel = 1;
        let lives = 3;
        let currentQuestionIndex = 0;
        let towerHeight = 0;
           
        
        // Sorular
        const questions = [
            {
                code: '&lt;html&gt;\n  &lt;head&gt;\n    <span class="blank" data-answer="title">[?]</span>Sayfa Başlığı&lt;/title&gt;\n  &lt;/head&gt;\n&lt;/html&gt;',
                options: ['&lt;title&gt;', '&lt;header&gt;', '&lt;h1&gt;', '&lt;name&gt;'],
                correct: '&lt;title&gt;'
            },
            {
                code: '&lt;body&gt;\n  <span class="blank" data-answer="&lt;h1&gt;">[?]</span>Ana Başlık&lt;/h1&gt;\n&lt;/body&gt;',
                options: ['&lt;h1&gt;', '&lt;title&gt;', '&lt;header&gt;', '&lt;p&gt;'],
                correct: '&lt;h1&gt;'
            },
            {
                code: '&lt;div&gt;\n  &lt;p&gt;Paragraf&lt;/p&gt;\n  <span class="blank" data-answer="&lt;/div&gt;">[?]</span>',
                options: ['&lt;/div&gt;', '&lt;/p&gt;', '&lt;/body&gt;', '&lt;div&gt;'],
                correct: '&lt;/div&gt;'
            },
            {
                code: '&lt;ul&gt;\n  <span class="blank" data-answer="&lt;li&gt;">[?]</span>Liste Öğesi&lt;/li&gt;\n&lt;/ul&gt;',
                options: ['&lt;li&gt;', '&lt;ul&gt;', '&lt;ol&gt;', '&lt;list&gt;'],
                correct: '&lt;li&gt;'
            },
            {
                code: '&lt;a <span class="blank" data-answer="href">[?]</span>="https://example.com"&gt;Link&lt;/a&gt;',
                options: ['href', 'url', 'link', 'src'],
                correct: 'href'
            },
            {
                code: '&lt;img <span class="blank" data-answer="src">[?]</span>="image.jpg" alt="Resim"&gt;',
                options: ['src', 'href', 'url', 'image'],
                correct: 'src'
            },
            {
                code: '&lt;form&gt;\n  &lt;input <span class="blank" data-answer="type">[?]</span>="text" name="ad"&gt;\n&lt;/form&gt;',
                options: ['type', 'kind', 'format', 'style'],
                correct: 'type'
            },
            {
                code: '&lt;table&gt;\n  &lt;tr&gt;\n    <span class="blank" data-answer="&lt;td&gt;">[?]</span>Hücre&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;',
                options: ['&lt;td&gt;', '&lt;th&gt;', '&lt;tr&gt;', '&lt;cell&gt;'],
                correct: '&lt;td&gt;'
            },
            {
                code: '&lt;!DOCTYPE <span class="blank" data-answer="html">[?]</span>&gt;\n&lt;html lang="tr"&gt;\n&lt;/html&gt;',
                options: ['html', 'HTML', 'page', 'document'],
                correct: 'html'
            },
            {
                code: '&lt;meta <span class="blank" data-answer="charset">[?]</span>="UTF-8"&gt;',
                options: ['charset', 'encoding', 'type', 'format'],
                correct: 'charset'
            },
            {
                code: '&lt;div <span class="blank" data-answer="class">[?]</span>="container"&gt;&lt;/div&gt;',
                options: ['class', 'id', 'name', 'type'],
                correct: 'class'
            },
            {
                code: '&lt;button <span class="blank" data-answer="onclick">[?]</span>="myFunction()"&gt;Tıkla&lt;/button&gt;',
                options: ['onclick', 'click', 'onpress', 'action'],
                correct: 'onclick'
            },
            {
                code: '&lt;link rel="stylesheet" <span class="blank" data-answer="href">[?]</span>="style.css"&gt;',
                options: ['href', 'src', 'url', 'path'],
                correct: 'href'
            },
            {
                code: '&lt;script <span class="blank" data-answer="src">[?]</span>="script.js"&gt;&lt;/script&gt;',
                options: ['src', 'href', 'url', 'path'],
                correct: 'src'
            },
            {
                code: '&lt;meta name="viewport" <span class="blank" data-answer="content">[?]</span>="width=device-width"&gt;',
                options: ['content', 'value', 'data', 'property'],
                correct: 'content'
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
                    <h3>Kod Tamamlama - Soru ${currentQuestionIndex + 1}</h3>
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
            const question = questions[currentQuestionIndex];
            const blank = document.querySelector('.blank');
            
            // HTML entity'leri decode et
            const decodedAnswer = decodeHTMLEntities(answer);
            const decodedCorrect = decodeHTMLEntities(question.correct);
            
            if (decodedAnswer === decodedCorrect) {
                blank.classList.add('correct');
                blank.innerHTML = answer;
                
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

        // HTML entity'leri decode et
        function decodeHTMLEntities(text) {
            const textArea = document.createElement('textarea');
            textArea.innerHTML = text;
            return textArea.value;
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