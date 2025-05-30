const questions = [
      {
        code: "#include <stdio.h>\nint main() {\n    printf(\"Merhaba Dünya\");\n    return 0;\n",
        correct: (code) => code.includes("#include <stdio.h>") && code.includes("printf") && code.includes("return 0;") && code.includes("}")
      },
      {
        code: "int sayi = 10\nprintf(\"%d\", sayi);",
        correct: (code) => code.includes("int sayi = 10;") && code.includes("printf")
      },
      {
        code: "for(int i = 0; i < 5; i++)\n    printf(\"%d \", i);",
        correct: (code) => code.includes("for") && code.includes("{") && code.includes("}")
      },
      {
        code: "if(x > 0)\n    printf(\"Pozitif\");",
        correct: (code) => code.includes("if") && code.includes("{") && code.includes("}")
      },
      {
        code: "int dizi[5] = {1,2,3,4,5}\nprintf(\"%d\", dizi[0]);",
        correct: (code) => code.includes("int dizi[5] = {1,2,3,4,5};") && code.includes("printf")
      },
      {
        code: "while(i < 10)\n    i++;",
        correct: (code) => code.includes("while") && code.includes("{") && code.includes("}")
      },
      {
        code: "char str[20] = \"Hello\"\nprintf(\"%s\", str);",
        correct: (code) => code.includes("char str[20] = \"Hello\";") && code.includes("printf")
      },
      {
        code: "float pi = 3.14\nprintf(\"%.2f\", pi);",
        correct: (code) => code.includes("float pi = 3.14;") && code.includes("printf")
      },
      {
        code: "switch(secim) {\n    case 1:\n        break;\n    default:\n        break;\n",
        correct: (code) => code.includes("switch") && code.includes("case") && code.includes("break;") && code.includes("}")
      },
      {
        code: "do {\n    printf(\"Merhaba\");\n} while(0)",
        correct: (code) => code.includes("do") && code.includes("while") && code.includes(";")
      },
      {
        code: "int toplam(int a, int b) {\n    return a + b;\n",
        correct: (code) => code.includes("int toplam") && code.includes("return") && code.includes("}")
      },
      {
        code: "int *ptr = &sayi\nprintf(\"%d\", *ptr);",
        correct: (code) => code.includes("int *ptr = &sayi;") && code.includes("printf")
      },
      {
        code: "struct Ogrenci {\n    char isim[50];\n    int yas;\n",
        correct: (code) => code.includes("struct") && code.includes("};")
      },
      {
        code: "FILE *dosya = fopen(\"test.txt\", \"r\")\nfclose(dosya);",
        correct: (code) => code.includes("FILE *dosya") && code.includes(";") && code.includes("fclose")
      },
      {
        code: "int arr[] = {1,2,3,4,5}\nfor(int i=0; i<5; i++) printf(\"%d \", arr[i]);",
        correct: (code) => code.includes("int arr[] = {1,2,3,4,5};") && code.includes("for")
      },
      {
        code: "#define MAX 100\nint dizi[MAX];",
        correct: (code) => code.includes("#define MAX 100") && code.includes("int dizi[MAX];")
      },
      {
        code: "else if(x == 0)\n    printf(\"Sıfır\");",
        correct: (code) => code.includes("else if") && code.includes("{") && code.includes("}")
      },
      {
        code: "char c = getchar()\nputchar(c);",
        correct: (code) => code.includes("char c = getchar();") && code.includes("putchar")
      },
      {
        code: "int *malloc_ptr = malloc(sizeof(int) * 10)\nfree(malloc_ptr);",
        correct: (code) => code.includes("malloc") && code.includes("free") && code.includes(";")
      },
      {
        code: "enum Renkler {KIRMIZI, YESIL, MAVI}\nenum Renkler renk = KIRMIZI;",
        correct: (code) => code.includes("enum") && code.includes("};")
      },
      {
        code: "typedef struct {\n    int x, y;\n} Nokta\nNokta p1;",
        correct: (code) => code.includes("typedef") && code.includes("};") && code.includes("Nokta")
      },
      {
        code: "unsigned int sayi = 42\nprintf(\"%u\", sayi);",
        correct: (code) => code.includes("unsigned int sayi = 42;") && code.includes("printf")
      },
      {
        code: "const int SABIT = 100\nprintf(\"%d\", SABIT);",
        correct: (code) => code.includes("const int SABIT = 100;") && code.includes("printf")
      },
      {
        code: "static int fonksiyon() {\n    return 1;\n",
        correct: (code) => code.includes("static") && code.includes("return") && code.includes("}")
      },
      {
        code: "goto etiket;\netiket:\n    printf(\"Buraya geldi\");",
        correct: (code) => code.includes("goto") && code.includes("etiket:") && code.includes("printf")
      },
      {
        code: "double d = 3.14159\nprintf(\"%.2lf\", d);",
        correct: (code) => code.includes("double d = 3.14159;") && code.includes("printf")
      },
      {
        code: "long long buyuk_sayi = 1234567890LL\nprintf(\"%lld\", buyuk_sayi);",
        correct: (code) => code.includes("long long") && code.includes(";") && code.includes("printf")
      },
      {
        code: "union Veri {\n    int i;\n    float f;\n",
        correct: (code) => code.includes("union") && code.includes("};")
      },
      {
        code: "volatile int bayrak = 0\nwhile(bayrak == 0);",
        correct: (code) => code.includes("volatile int bayrak = 0;") && code.includes("while")
      },
      {
        code: "register int hizli_degisken = 10\nprintf(\"%d\", hizli_degisken);",
        correct: (code) => code.includes("register") && code.includes(";") && code.includes("printf")
      },
      {
        code: "extern int global_degisken\nprintf(\"%d\", global_degisken);",
        correct: (code) => code.includes("extern") && code.includes(";") && code.includes("printf")
      },
      {
        code: "sizeof(int)",
        correct: (code) => code.includes("sizeof(int);")
      },
      {
        code: "int a = 5, b = 10\nint sonuc = (a > b) ? a : b;",
        correct: (code) => code.includes("int a = 5, b = 10;") && code.includes("?") && code.includes(":")
      },
      {
        code: "char *str = \"Merhaba\"\nprintf(\"%s\", str);",
        correct: (code) => code.includes("char *str = \"Merhaba\";") && code.includes("printf")
      },
      {
        code: "int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}}\nprintf(\"%d\", matrix[1][1]);",
        correct: (code) => code.includes("int matrix[3][3]") && code.includes(";") && code.includes("printf")
      },
      {
        code: "void fonksiyon(void) {\n    printf(\"Fonksiyon çağrıldı\");\n",
        correct: (code) => code.includes("void fonksiyon(void)") && code.includes("printf") && code.includes("}")
      },
      {
        code: "break",
        correct: (code) => code.includes("break;")
      },
      {
        code: "continue",
        correct: (code) => code.includes("continue;")
      },
      {
        code: "return 0",
        correct: (code) => code.includes("return 0;")
      },
      {
        code: "#include <stdlib.h>\nexit(0)",
        correct: (code) => code.includes("#include <stdlib.h>") && code.includes("exit(0);")
      },
      {
        code: "assert(x > 0)",
        correct: (code) => code.includes("assert(x > 0);")
      },
      {
        code: "int dizi[10]\nmemset(dizi, 0, sizeof(dizi));",
        correct: (code) => code.includes("int dizi[10];") && code.includes("memset")
      },
      {
        code: "strcpy(hedef, kaynak)",
        correct: (code) => code.includes("strcpy(hedef, kaynak);")
      },
      {
        code: "strlen(str)",
        correct: (code) => code.includes("strlen(str);")
      },
      {
        code: "scanf(\"%d\", &sayi)",
        correct: (code) => code.includes("scanf") && code.includes("&sayi") && code.includes(";")
      },
      {
        code: "printf(\"Değer: %d\\n\", 42)",
        correct: (code) => code.includes("printf") && code.includes("\\n") && code.includes(";")
      },
      {
        code: "fgets(buffer, sizeof(buffer), stdin)",
        correct: (code) => code.includes("fgets") && code.includes("stdin") && code.includes(";")
      },
      {
        code: "fprintf(stderr, \"Hata: %s\\n\", hata_mesaji)",
        correct: (code) => code.includes("fprintf") && code.includes("stderr") && code.includes(";")
      },
      {
        code: "int sonuc = atoi(\"123\")",
        correct: (code) => code.includes("atoi") && code.includes(";")
      },
      {
        code: "rand() % 10",
        correct: (code) => code.includes("rand() % 10;")
      }
    ];

let currentIndex = 0; // Şu anki soru indeksini tutar

// Mutlu canavarın SVG görseli (yeşil arka plan, gülümseyen yüz)
const happyMonsterSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%2344FF44' width='200' height='200' rx='10'/%3E%3Ctext x='100' y='120' text-anchor='middle' font-size='60' fill='white'%3E😊%3C/text%3E%3C/svg%3E";

// Kızgın canavarın SVG görseli (kırmızı arka plan, sinirli yüz)
const angryMonsterSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23FF4444' width='200' height='200' rx='10'/%3E%3Ctext x='100' y='120' text-anchor='middle' font-size='60' fill='white'%3E😠%3C/text%3E%3C/svg%3E";

// Soruyu yükleyen fonksiyon
function loadQuestion() {
  document.getElementById("codeInput").value = questions[currentIndex].code; // Kod alanına sorunun başlangıç kodunu yaz
  document.getElementById("monsterImage").src = angryMonsterSVG; // Canavar görselini kızgın olarak ayarla
  const monsterDiv = document.getElementById("monster");
  // Tüm animasyon sınıflarını kaldır (mutlu ya da kızgın olanlar)
  monsterDiv.classList.remove("happy-stars", "happy-shake", "angry-flames", "angry-screen", "happy-screen");
  document.getElementById("message").textContent = ""; // Mesaj alanını temizle
}

// Butona tıklandığında çalacak basit ses efektini oynatan fonksiyon
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

// Kullanıcının yazdığı kodu kontrol eden fonksiyon
function checkCode() {
  playButtonSound(); // Buton sesi çal
  const input = document.getElementById("codeInput").value; // Kullanıcının girdiği kod
  const isCorrect = questions[currentIndex].correct(input); // Doğruluk kontrolü (questions dizisinden)
  const monsterImage = document.getElementById("monsterImage");
  const monsterDiv = document.getElementById("monster");
  const message = document.getElementById("message");

  // Önceki animasyon sınıflarını kaldır
  monsterDiv.classList.remove("happy-stars", "happy-shake", "angry-flames", "angry-screen", "happy-screen");
  monsterImage.style.animation = "none";

  if (isCorrect) {
    // Kod doğruysa mutlu canavar göster
    monsterImage.src = happyMonsterSVG;
    message.textContent = "Harika! Canavar mutlu oldu!";
    // Mutlu animasyon: dönme, yıldız patlama ve zemin titreme efektleri
    monsterImage.style.animation = "spin 1s ease";
    monsterDiv.classList.add("happy-stars", "happy-shake");

    setTimeout(() => {
      currentIndex++; // Sonraki soruya geç
      if (currentIndex < questions.length) {
        loadQuestion(); // Yeni soruyu yükle
      } else {
        // Tüm sorular tamamlandıysa mesaj göster, kod alanını gizle
        message.textContent = "Tüm canavarlar mutlu! C kodlarını mükemmel yazdın! 🎉";
        document.getElementById("codeInput").style.display = "none";
        monsterImage.src = happyMonsterSVG;
        monsterImage.style.animation = "spin 1s ease";
        monsterDiv.classList.add("happy-stars", "happy-shake");
      }
    }, 1500);
  } else {
    // Kod yanlışsa kızgın canavar göster
    monsterImage.src = angryMonsterSVG;
    message.textContent = "Hatalı... Syntax'ı kontrol et!";

    // Önce animasyon sınıflarını kaldır
    monsterImage.style.animation = "none";
    monsterDiv.classList.remove("angry-flames", "angry-screen");

    // DOM'u zorla yeniden boyat (reflow) — animasyonların tekrar tetiklenmesi için önemli!
    void monsterImage.offsetWidth;

    // Sonra animasyonları yeniden uygula
    monsterImage.style.animation = "angry-shake 0.5s ease";
    monsterDiv.classList.add("angry-flames", "angry-screen");
  }
}

// Ana menüye dönmek için sayfayı değiştirir
function goHome() {
  window.location.href = "../CGameMenu/CGameMenu.html";
}

// Sayfa yüklendiğinde ilk soruyu yükle
window.onload = loadQuestion;
