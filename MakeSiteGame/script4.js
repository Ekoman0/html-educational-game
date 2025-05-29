 // Oyun verileri - her seviye için görevler
        const levels = [
            {
                title: "Başlık Ekleme",
                instruction: "<strong>Görev:</strong> Blogunuz için bir ana başlık ekleyin. <code>&lt;h1&gt;</code> etiketini kullanarak \"Benim Kişisel Blogum\" başlığını ekleyin.",
                hint: "İpucu: <code>&lt;h1&gt;Benim Kişisel Blogum&lt;/h1&gt;</code> şeklinde yazmalısınız.",
                solution: "<h1>Benim Kişisel Blogum</h1>",
                startCode: "",
                check: function(code) {
                    return code.toLowerCase().includes("<h1>benim kişisel blogum</h1>");
                }
            },
            {
                title: "Profil Resmi Ekleme",
                instruction: "<strong>Görev:</strong> Blogunuza bir profil resmi ekleyin. <code>&lt;img&gt;</code> etiketini kullanarak kaynak olarak \"profil.jpeg\" adresini belirtin ve alternatif metin olarak \"Profil Resmi\" yazın.",
                hint: "İpucu: <code>&lt;img src=\"profil.jpeg\" alt=\"Profil Resmi\"&gt;</code> şeklinde yazmalısınız.",
                solution: "<img src=\"profil.jpeg\" alt=\"Profil Resmi\">",
                check: function(code) {
                    return code.toLowerCase().includes("<img src=\"profil.jpeg\" alt=\"profil resmi\">");
                }
            },
            {
                title: "Hakkımda Bölümü",
                instruction: "<strong>Görev:</strong> Bir alt başlık ve onun altında bir paragraf ekleyin. <code>&lt;h2&gt;</code> etiketi ile \"Hakkımda\" başlığını ve <code>&lt;p&gt;</code> etiketi ile \"Teknoloji ve kodlama konularında yazan bir blog yazarıyım.\" paragrafını ekleyin.",
                hint: "İpucu: <code>&lt;h2&gt;Hakkımda&lt;/h2&gt;<br>&lt;p&gt;Teknoloji ve kodlama konularında yazan bir blog yazarıyım.&lt;/p&gt;</code>",
                solution: "<h2>Hakkımda</h2>\n<p>Teknoloji ve kodlama konularında yazan bir blog yazarıyım.</p>",
                check: function(code) {
                    return code.toLowerCase().includes("<h2>hakkımda</h2>") && 
                           code.toLowerCase().includes("<p>teknoloji ve kodlama konularında yazan bir blog yazarıyım.</p>");
                }
            },
            {
                title: "İlgi Alanları Listesi",
                instruction: "<strong>Görev:</strong> İlgi alanlarınızı gösteren sırasız bir liste oluşturun. <code>&lt;h2&gt;</code> başlığıyla \"İlgi Alanlarım\" yazın ve altına <code>&lt;ul&gt;</code> ve <code>&lt;li&gt;</code> etiketlerini kullanarak \"Yazılım\", \"Web Tasarım\" ve \"Oyun Geliştirme\" maddelerini içeren bir liste yapın.",
                hint: "İpucu: <code>&lt;h2&gt;İlgi Alanlarım&lt;/h2&gt;<br>&lt;ul&gt;<br>&nbsp;&nbsp;&lt;li&gt;Yazılım&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Web Tasarım&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Oyun Geliştirme&lt;/li&gt;<br>&lt;/ul&gt;</code>",
                solution: "<h2>İlgi Alanlarım</h2>\n<ul>\n<li>Yazılım</li>\n<li>Web Tasarım</li>\n<li>Oyun Geliştirme</li>\n</ul>",
                check: function(code) {
                    return code.toLowerCase().includes("<h2>i̇lgi alanlarım</h2>") && 
                           code.toLowerCase().includes("<ul>") && 
                           code.toLowerCase().includes("<li>yazılım</li>") && 
                           code.toLowerCase().includes("<li>web tasarım</li>") && 
                           code.toLowerCase().includes("<li>oyun geliştirme</li>");
                }
            },
            {
                title: "Sosyal Medya Linkleri",
                instruction: "<strong>Görev:</strong> Sosyal medya profilleriniz için linkler ekleyin. <code>&lt;h2&gt;</code> başlığıyla \"Sosyal Medya\" yazın ve altına <code>&lt;a&gt;</code> etiketi kullanarak \"GitHub Profilim\" ve \"LinkedIn Profilim\" için iki ayrı link oluşturun. Link adresi olarak \"#\" kullanın.",
                hint: "İpucu: <code>&lt;h2&gt;Sosyal Medya&lt;/h2&gt;<br>&lt;p&gt;<br>&nbsp;&nbsp;&lt;a href=\"#\"&gt;GitHub Profilim&lt;/a&gt;<br>&nbsp;&nbsp;&lt;br&gt;<br>&nbsp;&nbsp;&lt;a href=\"#\"&gt;LinkedIn Profilim&lt;/a&gt;<br>&lt;/p&gt;</code>",
                solution: "<h2>Sosyal Medya</h2>\n<p>\n<a href=\"#\">GitHub Profilim</a>\n<br>\n<a href=\"#\">LinkedIn Profilim</a>\n</p>",
                check: function(code) {
                    return code.toLowerCase().includes("<h2>sosyal medya</h2>") && 
                           code.toLowerCase().includes("<a href=\"#\">github profilim</a>") && 
                           code.toLowerCase().includes("<a href=\"#\">linkedin profilim</a>");
                }
            },
            {
                title: "Blog Yazısı Bölümü",
                instruction: "<strong>Görev:</strong> Bir blog yazısı bölümü oluşturun. <code>&lt;article&gt;</code> etiketi içinde bir başlık (<code>&lt;h2&gt;</code>) ve iki paragraf (<code>&lt;p&gt;</code>) ekleyin. Başlık: \"İlk Blog Yazım\", İlk Paragraf: \"Bu benim ilk blog yazım. HTML öğrenmeye başladım ve kendi sitemi oluşturuyorum.\" İkinci paragraf: \"HTML öğrenmek <strong>çok eğlenceli</strong> ve <em>yaratıcı</em> bir süreç!\"",
                hint: "İpucu: <code>&lt;article&gt;<br>&nbsp;&nbsp;&lt;h2&gt;İlk Blog Yazım&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Bu benim ilk blog yazım. HTML öğrenmeye başladım ve kendi sitemi oluşturuyorum.&lt;/p&gt;<br>&nbsp;&nbsp;&lt;p&gt;HTML öğrenmek &lt;strong&gt;çok eğlenceli&lt;/strong&gt; ve &lt;em&gt;yaratıcı&lt;/em&gt; bir süreç!&lt;/p&gt;<br>&lt;/article&gt;</code>",
                solution: "<article>\n<h2>İlk Blog Yazım</h2>\n<p>Bu benim ilk blog yazım. HTML öğrenmeye başladım ve kendi sitemi oluşturuyorum.</p>\n<p>HTML öğrenmek <strong>çok eğlenceli</strong> ve <em>yaratıcı</em> bir süreç!</p>\n</article>",
                check: function(code) {
                    return code.toLowerCase().includes("<article>") && 
                           code.toLowerCase().includes("<h2>i̇lk blog yazım</h2>") && 
                           code.toLowerCase().includes("html öğrenmek <strong>çok eğlenceli</strong> ve <em>yaratıcı</em> bir süreç!");
                }
            },
            {
                title: "İkinci Blog Yazısı",
                instruction: "<strong>Görev:</strong> İkinci bir blog yazısı ekleyin. Yine <code>&lt;article&gt;</code> etiketi içinde başlık ve paragraf kullanın. Başlık: \"HTML Yolculuğum\", Paragraf: \"Bu blogda HTML öğrenirken edindiğim tecrübeleri paylaşacağım. Yakında CSS ve JavaScript konularına da başlayacağım.\"",
                hint: "İpucu: <code>&lt;article&gt;<br>&nbsp;&nbsp;&lt;h2&gt;HTML Yolculuğum&lt;/h2&gt;<br>&nbsp;&nbsp;&lt;p&gt;Bu blogda HTML öğrenirken edindiğim tecrübeleri paylaşacağım. Yakında CSS ve JavaScript konularına da başlayacağım.&lt;/p&gt;<br>&lt;/article&gt;</code>",
                solution: "<article>\n<h2>HTML Yolculuğum</h2>\n<p>Bu blogda HTML öğrenirken edindiğim tecrübeleri paylaşacağım. Yakında CSS ve JavaScript konularına da başlayacağım.</p>\n</article>",
                check: function(code) {
                    return code.toLowerCase().includes("<h2>html yolculuğum</h2>") && 
                           code.toLowerCase().includes("yakında css ve javascript konularına da başlayacağım");
                }
            },
            {
                title: "İletişim Formu",
                instruction: "<strong>Görev:</strong> Basit bir iletişim formu ekleyin. <code>&lt;h2&gt;</code> başlığıyla \"İletişim\" yazın ve altına <code>&lt;form&gt;</code> etiketi içinde bir ad girişi için <code>&lt;input&gt;</code> ve bir mesaj için <code>&lt;textarea&gt;</code> ekleyin. Son olarak bir <code>&lt;button&gt;</code> ile \"Gönder\" butonu ekleyin.",
                hint: "İpucu: <code>&lt;h2&gt;İletişim&lt;/h2&gt;<br>&lt;form&gt;<br>&nbsp;&nbsp;&lt;p&gt;Ad: &lt;input type=\"text\" placeholder=\"Adınız\"&gt;&lt;/p&gt;<br>&nbsp;&nbsp;&lt;p&gt;Mesaj: &lt;textarea placeholder=\"Mesajınız\"&gt;&lt;/textarea&gt;&lt;/p&gt;<br>&nbsp;&nbsp;&lt;button type=\"submit\"&gt;Gönder&lt;/button&gt;<br>&lt;/form&gt;</code>",
                solution: "<h2>İletişim</h2>\n<form>\n<p>Ad: <input type=\"text\" placeholder=\"Adınız\"></p>\n<p>Mesaj: <textarea placeholder=\"Mesajınız\"></textarea></p>\n<button type=\"submit\">Gönder</button>\n</form>",
                check: function(code) {
                    return code.toLowerCase().includes("<h2>i̇letişim</h2>") && 
                           code.toLowerCase().includes("<form>") && 
                           code.toLowerCase().includes("<input") && 
                           code.toLowerCase().includes("<textarea") && 
                           code.toLowerCase().includes("<button");
                }
            },
            {
                title: "Footer Ekleme",
                instruction: "<strong>Son Görev:</strong> Blogunuz için bir alt bilgi (footer) ekleyin. <code>&lt;footer&gt;</code> etiketi içinde \"© 2025 Benim Blogum - Tüm Hakları Saklıdır.\" yazısını bir paragraf olarak ekleyin.",
                hint: "İpucu: <code>&lt;footer&gt;<br>&nbsp;&nbsp;&lt;p&gt;© 2025 Benim Blogum - Tüm Hakları Saklıdır.&lt;/p&gt;<br>&lt;/footer&gt;</code>",
                solution: "<footer>\n<p>© 2025 Benim Blogum - Tüm Hakları Saklıdır.</p>\n</footer>",
                check: function(code) {
                    return code.toLowerCase().includes("<footer>") && 
                           code.toLowerCase().includes("© 2025 benim blogum - tüm hakları saklıdır.");
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

        // Mevcut seviye ve toplam HTML kodu
        let currentLevel = 0;
        let totalHtmlCode = "";

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
            updatePreview(totalHtmlCode + codeEditor.value);
        });

        // Önizleme fonksiyonu
        function updatePreview(code) {
            previewContainer.innerHTML = code;
        }

        // İpucu gösterme
        hintButton.addEventListener('click', function() {
            hintDiv.style.display = "block";
            hintDiv.classList.add("show");
        });

        // Kontrol etme
        checkButton.addEventListener('click', function() {
            const level = levels[currentLevel];
            const userCode = codeEditor.value;
            
            if (level.check(userCode)) {
                // Toplam koda ekle
                totalHtmlCode += userCode + "\n";
                
                // Önizlemeyi güncelle
                updatePreview(totalHtmlCode);
                
                successMessage.style.display = "block";
                successMessage.classList.add("show");
                nextButton.disabled = false;
            } else {
                alert("Henüz doğru değil. Tekrar deneyin veya ipucu alın!");
            }
        });

        // Sonraki seviye
        nextButton.addEventListener('click', function() {
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                loadLevel(currentLevel);
            } else {
                // Oyun bitti
                instruction.innerHTML = "<strong>Tebrikler!</strong> Tüm seviyeleri tamamladınız ve kendi blogunuzu oluşturdunuz! Şimdi bu HTML kodunu bir dosyaya kaydedip tarayıcınızda açabilirsiniz.";
                codeEditor.value = totalHtmlCode;
                successMessage.style.display = "none";
                checkButton.disabled = true;
                nextButton.disabled = true;
                hintButton.disabled = true;
            }
        });