// Oyun verileri - her seviye için görevler
     function playButtonSound() {
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
    
        const levels = [
            {
                title: "Temel Program Yapısı",
                instruction: "<strong>Görev:</strong> C programının temel yapısını oluşturun. <code>#include &lt;stdio.h&gt;</code> kütüphanesini dahil edin ve <code>main()</code> fonksiyonunu yazın.",
                hint: "İpucu: <code>#include &lt;stdio.h&gt;<br>int main() {<br>&nbsp;&nbsp;return 0;<br>}</code>",
                solution: "#include <stdio.h>\nint main() {\n    return 0;\n}",
                check: function(code) {
                    return code.includes("#include <stdio.h>") && code.includes("int main()") && code.includes("return 0;");
                }
            },
            {
                title: "İlk Ekran Çıktısı",
                instruction: "<strong>Görev:</strong> Programınıza ilk ekran çıktısını ekleyin. <code>printf()</code> fonksiyonu ile \"Hesap Makinesi Programı\" yazdırın.",
                hint: "İpucu: <code>printf(\"Hesap Makinesi Programı\\n\");</code> komutunu main fonksiyonu içine yazın.",
                solution: "printf(\"Hesap Makinesi Programı\\n\");",
                check: function(code) {
                    return code.includes("printf(\"Hesap Makinesi Programı\\n\");");
                }
            },
            {
                title: "Değişken Tanımlama",
                instruction: "<strong>Görev:</strong> Hesap makinesi için gerekli değişkenleri tanımlayın. İki adet <code>float</code> tipinde sayı değişkeni (<code>sayi1</code>, <code>sayi2</code>) ve bir adet <code>char</code> tipinde işlem değişkeni (<code>islem</code>) tanımlayın.",
                hint: "İpucu: <code>float sayi1, sayi2;<br>char islem;</code>",
                solution: "float sayi1, sayi2;\nchar islem;",
                check: function(code) {
                    return code.includes("float sayi1") && code.includes("sayi2") && code.includes("char islem");
                }
            },
            {
                title: "Kullanıcıdan Girdi Alma",
                instruction: "<strong>Görev:</strong> Kullanıcıdan ilk sayıyı alın. <code>printf()</code> ile \"Birinci sayıyı girin: \" mesajını yazdırın ve <code>scanf()</code> ile <code>sayi1</code> değişkenine değer atayın.",
                hint: "İpucu: <code>printf(\"Birinci sayıyı girin: \");<br>scanf(\"%f\", &sayi1);</code>",
                solution: "printf(\"Birinci sayıyı girin: \");\nscanf(\"%f\", &sayi1);",
                check: function(code) {
                    return code.includes("printf(\"Birinci sayıyı girin: \");") && code.includes("scanf(\"%f\", &sayi1);");
                }
            },
            {
                title: "İşlem Seçimi",
                instruction: "<strong>Görev:</strong> Kullanıcıdan hangi işlemi yapmak istediğini sorun. <code>printf()</code> ile \"İşlem seçin (+, -, *, /): \" yazdırın ve <code>scanf()</code> ile <code>islem</code> değişkenine atayın.",
                hint: "İpucu: <code>printf(\"İşlem seçin (+, -, *, /): \");<br>scanf(\" %c\", &islem);</code> (Boşluğa dikkat edin!)",
                solution: "printf(\"İşlem seçin (+, -, *, /): \");\nscanf(\" %c\", &islem);",
                check: function(code) {
                    return code.includes("printf(\"İşlem seçin (+, -, *, /): \");") && code.includes("scanf(\" %c\", &islem);");
                }
            },
            {
                title: "İkinci Sayı Girişi",
                instruction: "<strong>Görev:</strong> Kullanıcıdan ikinci sayıyı alın. <code>printf()</code> ile \"İkinci sayıyı girin: \" mesajını yazdırın ve <code>scanf()</code> ile <code>sayi2</code> değişkenine değer atayın.",
                hint: "İpucu: <code>printf(\"İkinci sayıyı girin: \");<br>scanf(\"%f\", &sayi2);</code>",
                solution: "printf(\"İkinci sayıyı girin: \");\nscanf(\"%f\", &sayi2);",
                check: function(code) {
                    return code.includes("printf(\"İkinci sayıyı girin: \");") && code.includes("scanf(\"%f\", &sayi2);");
                }
            },
            {
                title: "Switch-Case Yapısı",
                instruction: "<strong>Görev:</strong> İşlem türüne göre hesaplama yapmak için <code>switch-case</code> yapısını oluşturun. <code>switch(islem)</code> ile başlayın ve <code>case '+':</code> için toplama işlemini ekleyin.",
                hint: "İpucu: <code>switch(islem) {<br>&nbsp;&nbsp;case '+':<br>&nbsp;&nbsp;&nbsp;&nbsp;printf(\"Sonuç: %.2f\\n\", sayi1 + sayi2);<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</code>",
                solution: "switch(islem) {\n    case '+':\n        printf(\"Sonuç: %.2f\\n\", sayi1 + sayi2);\n        break;\n}",
                check: function(code) {
                    return code.includes("switch(islem)") && code.includes("case '+'") && code.includes("sayi1 + sayi2") && code.includes("break;");
                }
            },
            {
                title: "Diğer İşlemler",
                instruction: "<strong>Görev:</strong> Switch-case yapısına çıkarma, çarpma ve bölme işlemlerini ekleyin. <code>case '-':</code>, <code>case '*':</code> ve <code>case '/':</code> durumlarını ekleyin.",
                hint: "İpucu: <code>case '-':<br>&nbsp;&nbsp;printf(\"Sonuç: %.2f\\n\", sayi1 - sayi2);<br>&nbsp;&nbsp;break;<br>case '*':<br>&nbsp;&nbsp;printf(\"Sonuç: %.2f\\n\", sayi1 * sayi2);<br>&nbsp;&nbsp;break;<br>case '/':<br>&nbsp;&nbsp;printf(\"Sonuç: %.2f\\n\", sayi1 / sayi2);<br>&nbsp;&nbsp;break;</code>",
                solution: "case '-':\n    printf(\"Sonuç: %.2f\\n\", sayi1 - sayi2);\n    break;\ncase '*':\n    printf(\"Sonuç: %.2f\\n\", sayi1 * sayi2);\n    break;\ncase '/':\n    printf(\"Sonuç: %.2f\\n\", sayi1 / sayi2);\n    break;",
                check: function(code) {
                    return code.includes("case '-'") && code.includes("case '*'") && code.includes("case '/'") && 
                           code.includes("sayi1 - sayi2") && code.includes("sayi1 * sayi2") && code.includes("sayi1 / sayi2");
                }
            },
            {
                title: "Hata Kontrolü",
                instruction: "<strong>Görev:</strong> Geçersiz işlem girişi için hata kontrolü ekleyin. <code>default:</code> durumunu ekleyerek \"Geçersiz işlem!\" mesajını yazdırın.",
                hint: "İpucu: <code>default:<br>&nbsp;&nbsp;printf(\"Geçersiz işlem!\\n\");</code>",
                solution: "default:\n    printf(\"Geçersiz işlem!\\n\");",
                check: function(code) {
                    return code.includes("default:") && code.includes("printf(\"Geçersiz işlem!\\n\");");
                }
            },
            {
                title: "Bölme Sıfır Kontrolü",
                instruction: "<strong>Son Görev:</strong> Bölme işleminde sıfıra bölme hatası kontrolü ekleyin. Bölme case'ini güncelleyerek <code>if(sayi2 != 0)</code> kontrolü yapın, değilse \"Sıfıra bölme hatası!\" yazdırın.",
                hint: "İpucu: <code>case '/':<br>&nbsp;&nbsp;if(sayi2 != 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;printf(\"Sonuç: %.2f\\n\", sayi1 / sayi2);<br>&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;printf(\"Sıfıra bölme hatası!\\n\");<br>&nbsp;&nbsp;break;</code>",
                solution: "if(sayi2 != 0)\n    printf(\"Sonuç: %.2f\\n\", sayi1 / sayi2);\nelse\n    printf(\"Sıfıra bölme hatası!\\n\");",
                check: function(code) {
                    return code.includes("if(sayi2 != 0)") && code.includes("else") && code.includes("Sıfıra bölme hatası!");
                }
            }
        ];

        // DOM elementlerini seçme
        const codeEditor = document.getElementById('code-editor');
        const previewContainer = document.getElementById('preview-container');
        const levelNumber = document.getElementById('level-number');
        const levelTitle = document.getElementById('level-title');
        const instruction = document.getElementById('instruction');
        const hintButton = document.getElementById('hint-button');
        const checkButton = document.getElementById('check-button');
        const nextButton = document.getElementById('next-button');
        const hintDiv = document.getElementById('hint');
        const successMessage = document.getElementById('success-message');

        // Mevcut seviye ve toplam C kodu
        let currentLevel = 0;
        let totalCCode = "";

        // İlk seviyeyi yükle
        loadLevel(currentLevel);

        // Seviye yükleme fonksiyonu
        function loadLevel(levelIndex) {
            const level = levels[levelIndex];
            levelNumber.textContent = levelIndex + 1;
            levelTitle.textContent = level.title;
            instruction.innerHTML = level.instruction;
            hintDiv.innerHTML = level.hint;
            codeEditor.value = "";
            successMessage.style.display = "none";
            successMessage.classList.remove("show");
            hintDiv.style.display = "none";
            hintDiv.classList.remove("show");
            nextButton.disabled = true;
            
            // Son seviyede butonun metnini değiştir
            if (levelIndex === levels.length - 1) {
                nextButton.textContent = "Tamamla";
            } else {
                nextButton.textContent = "Sonraki Seviye";
            }

            // Seviye geçiş animasyonu için opacity sıfırlama
            instruction.style.opacity = 0;
            setTimeout(() => {
                instruction.style.opacity = 1;
            }, 100);
        }

        // Önizleme güncelleme
        codeEditor.addEventListener('input', function() {
            updatePreview(totalCCode + codeEditor.value);
        });

        // Önizleme fonksiyonu
        function updatePreview(code) {
            previewContainer.textContent = code;
        }

        // İpucu gösterme
        hintButton.addEventListener('click', function() {
            playButtonSound();
            hintDiv.style.display = "block";
            hintDiv.classList.add("show");
        });

        // Kontrol etme
        checkButton.addEventListener('click', function() {
            playButtonSound();
            const level = levels[currentLevel];
            const userCode = codeEditor.value;
            
            if (level.check(userCode)) {
                // Toplam koda ekle
                totalCCode += userCode + "\n";
                
                // Önizlemeyi güncelle
                updatePreview(totalCCode);
                
                successMessage.style.display = "block";
                successMessage.classList.add("show");
                nextButton.disabled = false;
            } else {
                alert("Henüz doğru değil. Tekrar deneyin veya ipucu alın!");
            }
        });

        // Sonraki seviye
        nextButton.addEventListener('click', function() {
            playButtonSound();
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                loadLevel(currentLevel);
            } else {
                // Oyun bitti
                instruction.innerHTML = "<strong>Tebrikler!</strong> Tüm seviyeleri tamamladınız ve kendi hesap makinenizi oluşturdunuz! Şimdi bu C kodunu bir dosyaya kaydedip derleyebilirsiniz.";
                codeEditor.value = totalCCode;
                successMessage.style.display = "none";
                checkButton.disabled = true;
                nextButton.disabled = true;
                hintButton.disabled = true;
            }
        });