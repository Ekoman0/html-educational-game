const questions = [
  {
  id: 1,
  text: '1. C dilinde bir programın başlangıç noktası olan main fonksiyonunu doğru şekilde oluştur.',
  draggables: ['int', 'main()', '{', '}'],
  ids: ['int', 'main()', '{', '}'],
  html: `
    <span class="dropzone" data-accept="int"></span> 
    <span class="dropzone" data-accept="main()"></span> 
    <span class="dropzone" data-accept="{"></span>
    // kodlar
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'int' &&
      zones[1].textContent === 'main()' &&
      zones[2].textContent === '{' &&
      zones[3].textContent === '}'
    ) {
      preview.innerText = `int main() {\n  // kodlar\n}`;
      return true;
    }
    return false;
  }
},
{
  id: 2,
  text: '2. Ekrana "Merhaba" yazdırmak için doğru printf ifadesini oluştur.',
  draggables: ['printf', '(', '"Merhaba"', ');'],
  ids: ['printf', '(', '"Merhaba"', ');'],
  html: `
    <span class="dropzone" data-accept="printf"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept='"Merhaba"'></span>
    <span class="dropzone" data-accept=");"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'printf' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === '"Merhaba"' &&
      zones[3].textContent === ');'
    ) {
      preview.innerText = `printf("Merhaba");`;
      return true;
    }
    return false;
  }
},
{
  id: 3,
  text: '3. Bir tamsayı değişkeni tanımlamak için uygun ifadeleri yerleştir.',
  draggables: ['int', 'sayi', '=', '5;'],
  ids: ['int', 'sayi', '=', '5;'],
  html: `
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept="sayi"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="5;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'int' &&
      zones[1].textContent === 'sayi' &&
      zones[2].textContent === '=' &&
      zones[3].textContent === '5;'
    ) {
      preview.innerText = `int sayi = 5;`;
      return true;
    }
    return false;
  }
},{
  id: 4,
  text: '4. Bir karakter değişkeni tanımlamak için doğru ifadeleri yerleştir.',
  draggables: ['char', 'harf', '=', `'A';`],
  ids: ['char', 'harf', '=', `'A';`],
  html: `
    <span class="dropzone" data-accept="char"></span>
    <span class="dropzone" data-accept="harf"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="'A';"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'char' &&
      zones[1].textContent === 'harf' &&
      zones[2].textContent === '=' &&
      zones[3].textContent === `'A';`
    ) {
      preview.innerText = `char harf = 'A';`;
      return true;
    }
    return false;
  }
},
{
  id: 5,
  text: '5. scanf fonksiyonu ile sayı girişini alacak doğru yapıyı oluştur.',
  draggables: ['scanf', '(', '%d', ',', '&sayi', ');'],
  ids: ['scanf', '(', '%d', ',', '&sayi', ');'],
  html: `
    <span class="dropzone" data-accept="scanf"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="%d"></span>
    <span class="dropzone" data-accept=","></span>
    <span class="dropzone" data-accept="&sayi"></span>
    <span class="dropzone" data-accept=");"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'scanf' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === '%d' &&
      zones[3].textContent === ',' &&
      zones[4].textContent === '&sayi' &&
      zones[5].textContent === ');'
    ) {
      preview.innerText = `scanf("%d", &sayi);`;
      return true;
    }
    return false;
  }
}
,

{
  id: 6,
  text: '6. Koşullu if ifadesini oluştur.',
  draggables: ['if', '(', 'sayi > 0', ')', '{', '}'],
  ids: ['if', '(', 'sayi > 0', ')', '{', '}'],
  html: `
    <span class="dropzone" data-accept="if"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="sayi > 0"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept="{"></span>
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'if' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === 'sayi > 0' &&
      zones[3].textContent === ')' &&
      zones[4].textContent === '{' &&
      zones[5].textContent === '}'
    ) {
      preview.innerText = `if (sayi > 0) {\n  \n}`;
      return true;
    }
    return false;
  }
},
{
  id: 7,
  text: '7. Bir döngü oluştur: 0’dan 9’a kadar yazdır.',
  draggables: ['for', '(', 'int i = 0;', 'i < 10;', 'i++', ')', '{', '}'],
  ids: ['for', '(', 'int i = 0;', 'i < 10;', 'i++', ')', '{', '}'],
  html: `
    <span class="dropzone" data-accept="for"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="int i = 0;"></span>
    <span class="dropzone" data-accept="i < 10;"></span>
    <span class="dropzone" data-accept="i++"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept="{"></span>
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'for' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === 'int i = 0;' &&
      zones[3].textContent === 'i < 10;' &&
      zones[4].textContent === 'i++' &&
      zones[5].textContent === ')' &&
      zones[6].textContent === '{' &&
      zones[7].textContent === '}'
    ) {
      preview.innerText = `for (int i = 0; i < 10; i++) {\n  \n}`;
      return true;
    }
    return false;
  }
},
{
  id: 8,
  text: '8. return ifadesini doğru şekilde yerleştir.',
  draggables: ['return', '0;'],
  ids: ['return', '0;'],
  html: `
    <span class="dropzone" data-accept="return"></span>
    <span class="dropzone" data-accept="0;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'return' &&
      zones[1].textContent === '0;'
    ) {
      preview.innerText = `return 0;`;
      return true;
    }
    return false;
  }
},
{
  id: 9,
  text: '9. Toplama işlemi yapan bir satırı tamamla.',
  draggables: ['int', 'toplam', '=', 'a + b;'],
  ids: ['int', 'toplam', '=', 'a + b;'],
  html: `
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept="toplam"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="a + b;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'int' &&
      zones[1].textContent === 'toplam' &&
      zones[2].textContent === '=' &&
      zones[3].textContent === 'a + b;'
    ) {
      preview.innerText = `int toplam = a + b;`;
      return true;
    }
    return false;
  }
},
{
  id: 10,
  text: '10. Bir fonksiyon tanımı oluştur.',
  draggables: ['void', 'yazdir()', '{', '}'],
  ids: ['void', 'yazdir()', '{', '}'],
  html: `
    <span class="dropzone" data-accept="void"></span>
    <span class="dropzone" data-accept="yazdir()"></span>
    <span class="dropzone" data-accept="{"></span>
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'void' &&
      zones[1].textContent === 'yazdir()' &&
      zones[2].textContent === '{' &&
      zones[3].textContent === '}'
    ) {
      preview.innerText = `void yazdir() {\n  \n}`;
      return true;
    }
    return false;
  }
},
{
  id: 11,
  text: '11. Bir float değişken tanımlamak için uygun yapıyı oluştur.',
  draggables: ['float', 'puan', '=', '85.5;'],
  ids: ['float', 'puan', '=', '85.5;'],
  html: `
    <span class="dropzone" data-accept="float"></span>
    <span class="dropzone" data-accept="puan"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="85.5;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'float' &&
      zones[1].textContent === 'puan' &&
      zones[2].textContent === '=' &&
      zones[3].textContent === '85.5;'
    ) {
      preview.innerText = `float puan = 85.5;`;
      return true;
    }
    return false;
  }
},
{
  id: 12,
  text: '12. Mantıksal bir karşılaştırma ifadesi oluştur.',
  draggables: ['if', '(', 'a != b', ')', '{', '}'],
  ids: ['if', '(', 'a != b', ')', '{', '}'],
  html: `
    <span class="dropzone" data-accept="if"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="a != b"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept="{"></span>
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'if' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === 'a != b' &&
      zones[3].textContent === ')' &&
      zones[4].textContent === '{' &&
      zones[5].textContent === '}'
    ) {
      preview.innerText = `if (a != b) {\n  \n}`;
      return true;
    }
    return false;
  }
},
{
  id: 13,
  text: '13. Fonksiyon çağrısını doğru sırayla oluştur.',
  draggables: ['topla', '(', '3', ',', '5', ')', ';'],
  ids: ['topla', '(', '3', ',', '5', ')', ';'],
  html: `
    <span class="dropzone" data-accept="topla"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="3"></span>
    <span class="dropzone" data-accept=","></span>
    <span class="dropzone" data-accept="5"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept=";"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'topla' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === '3' &&
      zones[3].textContent === ',' &&
      zones[4].textContent === '5' &&
      zones[5].textContent === ')' &&
      zones[6].textContent === ';'
    ) {
      preview.innerText = `topla(3, 5);`;
      return true;
    }
    return false;
  }
},
{
  id: 14,
  text: '14. while döngüsü yapısını kur.',
  draggables: ['while', '(', 'i < 5', ')', '{', '}'],
  ids: ['while', '(', 'i < 5', ')', '{', '}'],
  html: `
    <span class="dropzone" data-accept="while"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="i < 5"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept="{"></span>
    <span class="dropzone" data-accept="}"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'while' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === 'i < 5' &&
      zones[3].textContent === ')' &&
      zones[4].textContent === '{' &&
      zones[5].textContent === '}'
    ) {
      preview.innerText = `while (i < 5) {\n  \n}`;
      return true;
    }
    return false;
  }
},
{
  id: 15,
  text: '15. Tek satırlık bir yorum satırı oluştur.',
  draggables: ['//', 'Bu bir yorum satırıdır'],
  ids: ['//', 'Bu bir yorum satırıdır'],
  html: `
    <span class="dropzone" data-accept="//"></span>
    <span class="dropzone" data-accept="Bu bir yorum satırıdır"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === '//' &&
      zones[1].textContent === 'Bu bir yorum satırıdır'
    ) {
      preview.innerText = `// Bu bir yorum satırıdır`;
      return true;
    }
    return false;
  }
},
{
  id: 16,
  text: '16. Bir karakter dizisi (string) tanımla.',
  draggables: ['char', 'isim[]', '=', '"Ali";'],
  ids: ['char', 'isim[]', '=', '"Ali";'],
  html: `
    <span class="dropzone" data-accept="char"></span>
    <span class="dropzone" data-accept="isim[]"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="\"Ali\";"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'char' &&
      zones[1].textContent === 'isim[]' &&
      zones[2].textContent === '=' &&
      zones[3].textContent === '"Ali";'
    ) {
      preview.innerText = `char isim[] = "Ali";`;
      return true;
    }
    return false;
  }
},
{
  id: 17,
  text: '17. break ifadesini doğru yere yerleştir.',
  draggables: ['if', '(', 'x == 5', ')', 'break;'],
  ids: ['if', '(', 'x == 5', ')', 'break;'],
  html: `
    <span class="dropzone" data-accept="if"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="x == 5"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept="break;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'if' &&
      zones[1].textContent === '(' &&
      zones[2].textContent === 'x == 5' &&
      zones[3].textContent === ')' &&
      zones[4].textContent === 'break;'
    ) {
      preview.innerText = `if (x == 5) break;`;
      return true;
    }
    return false;
  }
},
{
  id: 18,
  text: '18. Bir dizi tanımla: 5 elemanlı tamsayı dizisi.',
  draggables: ['int', 'dizi[5]', ';'],
  ids: ['int', 'dizi[5]', ';'],
  html: `
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept="dizi[5]"></span>
    <span class="dropzone" data-accept=";"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'int' &&
      zones[1].textContent === 'dizi[5]' &&
      zones[2].textContent === ';'
    ) {
      preview.innerText = `int dizi[5];`;
      return true;
    }
    return false;
  }
},
{
  id: 19,
  text: '19. Fonksiyon prototipi tanımla.',
  draggables: ['int', 'topla', '(', 'int', ',', 'int', ')', ';'],
  ids: ['int', 'topla', '(', 'int', ',', 'int', ')', ';'],
  html: `
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept="topla"></span>
    <span class="dropzone" data-accept="("></span>
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept=","></span>
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept=")"></span>
    <span class="dropzone" data-accept=";"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'int' &&
      zones[1].textContent === 'topla' &&
      zones[2].textContent === '(' &&
      zones[3].textContent === 'int' &&
      zones[4].textContent === ',' &&
      zones[5].textContent === 'int' &&
      zones[6].textContent === ')' &&
      zones[7].textContent === ';'
    ) {
      preview.innerText = `int topla(int, int);`;
      return true;
    }
    return false;
  }
},
{
  id: 20,
  text: '20. Bir dizinin ilk elemanına değer ata.',
  draggables: ['dizi', '[', '0', ']', '=', '10;'],
  ids: ['dizi', '[', '0', ']', '=', '10;'],
  html: `
    <span class="dropzone" data-accept="dizi"></span>
    <span class="dropzone" data-accept="["></span>
    <span class="dropzone" data-accept="0"></span>
    <span class="dropzone" data-accept="]"></span>
    <span class="dropzone" data-accept="="></span>
    <span class="dropzone" data-accept="10;"></span>`,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'dizi' &&
      zones[1].textContent === '[' &&
      zones[2].textContent === '0' &&
      zones[3].textContent === ']' &&
      zones[4].textContent === '=' &&
      zones[5].textContent === '10;'
    ) {
      preview.innerText = `dizi[0] = 10;`;
      return true;
    }
    return false;
  }
},
{
    id: 21,
    text: '21. Bir dizinin ilk elemanını değiştiren kodu oluşturun.',
    draggables: ['dizi', '[', '0', ']', '=', '100', ';'],
    ids: ['dizi', 'open_bracket', 'zero', 'close_bracket', 'equals', '100', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="dizi"></span>
      <span class="dropzone" data-accept="open_bracket"></span>
      <span class="dropzone" data-accept="zero"></span>
      <span class="dropzone" data-accept="close_bracket"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="100"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'dizi' &&
        zones[1].textContent === '[' &&
        zones[2].textContent === '0' &&
        zones[3].textContent === ']' &&
        zones[4].textContent === '=' &&
        zones[5].textContent === '100' &&
        zones[6].textContent === ';'
      ) {
        preview.innerText = `dizi[0] = 100;`;
        return true;
      }
      return false;
    }
  },

  {
    id: 22,
    text: '22. Bir fonksiyon tanımlayan kodu oluşturun.',
    draggables: ['void', 'mesajYaz', '(', ')', '{', '}'],
    ids: ['void', 'mesajYaz', 'open_paren', 'close_paren', 'open_brace', 'close_brace'],
    html: `
      <span class="dropzone" data-accept="void"></span>
      <span class="dropzone" data-accept="mesajYaz"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="open_brace"></span>
      <span class="dropzone" data-accept="close_brace"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'void' &&
        zones[1].textContent === 'mesajYaz' &&
        zones[2].textContent === '(' &&
        zones[3].textContent === ')' &&
        zones[4].textContent === '{' &&
        zones[5].textContent === '}'
      ) {
        preview.innerText = `void mesajYaz() { }`;
        return true;
      }
      return false;
    }
  },
  {
    id: 23,
    text: '23. Bir struct tanımını oluşturun.',
    draggables: ['struct', 'Ogrenci', '{', '};'],
    ids: ['struct', 'Ogrenci', 'open_brace', 'close_brace_semi'],
    html: `
      <span class="dropzone" data-accept="struct"></span>
      <span class="dropzone" data-accept="Ogrenci"></span>
      <span class="dropzone" data-accept="open_brace"></span>
      <span class="dropzone" data-accept="close_brace_semi"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'struct' &&
        zones[1].textContent === 'Ogrenci' &&
        zones[2].textContent === '{' &&
        zones[3].textContent === '};'
      ) {
        preview.innerText = `struct Ogrenci { };`;
        return true;
      }
      return false;
    }
  },
  {
    id: 24,
    text: '24. Döngüden çıkmak için kullanılan ifadeyi oluşturun.',
    draggables: ['break', ';'],
    ids: ['break', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="break"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'break' &&
        zones[1].textContent === ';'
      ) {
        preview.innerText = `break;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 25,
    text: '25. Switch-case yapısı oluşturun.',
    draggables: ['switch', '(', 'secim', ')', '{', 'case', '1', ':', 'break', ';', '}'],
    ids: ['switch', 'open_paren', 'secim', 'close_paren', 'open_brace', 'case', '1', 'colon', 'break', 'semicolon', 'close_brace'],
    html: `
      <span class="dropzone" data-accept="switch"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="secim"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="open_brace"></span>
      <span class="dropzone" data-accept="case"></span>
      <span class="dropzone" data-accept="1"></span>
      <span class="dropzone" data-accept="colon"></span>
      <span class="dropzone" data-accept="break"></span>
      <span class="dropzone" data-accept="semicolon"></span>
      <span class="dropzone" data-accept="close_brace"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'switch' &&
        zones[1].textContent === '(' &&
        zones[2].textContent === 'secim' &&
        zones[3].textContent === ')' &&
        zones[4].textContent === '{' &&
        zones[5].textContent === 'case' &&
        zones[6].textContent === '1' &&
        zones[7].textContent === ':' &&
        zones[8].textContent === 'break' &&
        zones[9].textContent === ';' &&
        zones[10].textContent === '}'
      ) {
        preview.innerText = `switch(secim) { case 1: break; }`;
        return true;
      }
      return false;
    }
  },
  {
    id: 26,
    text: '26. Bir karakter dizisini (string) tanımlayan kodu oluşturun.',
    draggables: ['char', 'isim', '[', '20', ']', '=', '"Ali"', ';'],
    ids: ['char', 'isim', 'open_bracket', '20', 'close_bracket', 'equals', 'ali', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="char"></span>
      <span class="dropzone" data-accept="isim"></span>
      <span class="dropzone" data-accept="open_bracket"></span>
      <span class="dropzone" data-accept="20"></span>
      <span class="dropzone" data-accept="close_bracket"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="ali"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'char' &&
        zones[1].textContent === 'isim' &&
        zones[2].textContent === '[' &&
        zones[3].textContent === '20' &&
        zones[4].textContent === ']' &&
        zones[5].textContent === '=' &&
        zones[6].textContent === '"Ali"' &&
        zones[7].textContent === ';'
      ) {
        preview.innerText = `char isim[20] = "Ali";`;
        return true;
      }
      return false;
    }
  },
  {
    id: 27,
    text: '27. Pointer aritmetiği ile dizinin ikinci elemanına erişin.',
    draggables: ['int', '*', 'ptr', '=', '&', 'dizi', '[', '0', ']', ';', '*(', 'ptr', '+', '1', ')', '=', '10', ';'],
    ids: ['int', 'asterisk', 'ptr', 'equals', 'ampersand', 'dizi', 'open_bracket', '0', 'close_bracket', 'semicolon1', 'asterisk_deref', 'ptr_access', 'plus', '1', 'close_paren', 'equals_assign', '10', 'semicolon2'],
    html: `
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="asterisk"></span>
      <span class="dropzone" data-accept="ptr"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="ampersand"></span>
      <span class="dropzone" data-accept="dizi"></span>
      <span class="dropzone" data-accept="open_bracket"></span>
      <span class="dropzone" data-accept="0"></span>
      <span class="dropzone" data-accept="close_bracket"></span>
      <span class="dropzone" data-accept="semicolon1"></span>
      <span class="dropzone" data-accept="asterisk_deref"></span>
      <span class="dropzone" data-accept="ptr_access"></span>
      <span class="dropzone" data-accept="plus"></span>
      <span class="dropzone" data-accept="1"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="equals_assign"></span>
      <span class="dropzone" data-accept="10"></span>
      <span class="dropzone" data-accept="semicolon2"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'int' &&
        zones[1].textContent === '*' &&
        zones[2].textContent === 'ptr' &&
        zones[3].textContent === '=' &&
        zones[4].textContent === '&' &&
        zones[5].textContent === 'dizi' &&
        zones[6].textContent === '[' &&
        zones[7].textContent === '0' &&
        zones[8].textContent === ']' &&
        zones[9].textContent === ';' &&
        zones[10].textContent === '*(' &&
        zones[11].textContent === 'ptr' &&
        zones[12].textContent === '+' &&
        zones[13].textContent === '1' &&
        zones[14].textContent === ')' &&
        zones[15].textContent === '=' &&
        zones[16].textContent === '10' &&
        zones[17].textContent === ';'
      ) {
        preview.innerText = `int *ptr = &dizi[0]; *(ptr + 1) = 10;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 28,
    text: '28. Typedef kullanarak yeni tip tanımlayın.',
    draggables: ['typedef', 'int', 'Tamsayi', ';'],
    ids: ['typedef', 'int', 'Tamsayi', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="typedef"></span>
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="Tamsayi"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'typedef' &&
        zones[1].textContent === 'int' &&
        zones[2].textContent === 'Tamsayi' &&
        zones[3].textContent === ';'
      ) {
        preview.innerText = `typedef int Tamsayi;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 29,
    text: '29. Static değişken tanımlayın.',
    draggables: ['static', 'int', 'sayac', '=', '0', ';'],
    ids: ['static', 'int', 'sayac', 'equals', '0', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="static"></span>
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="sayac"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="0"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'static' &&
        zones[1].textContent === 'int' &&
        zones[2].textContent === 'sayac' &&
        zones[3].textContent === '=' &&
        zones[4].textContent === '0' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `static int sayac = 0;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 30,
    text: '30. Free fonksiyonu ile belleği serbest bırakın.',
    draggables: ['free', '(', 'ptr', ')', ';'],
    ids: ['free', 'open_paren', 'ptr', 'close_paren', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="free"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="ptr"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'free' &&
        zones[1].textContent === '(' &&
        zones[2].textContent === 'ptr' &&
        zones[3].textContent === ')' &&
        zones[4].textContent === ';'
      ) {
        preview.innerText = `free(ptr);`;
        return true;
      }
      return false;
    }
  },
  {
    id: 31,
    text: '31. Üçlü operatör (ternary) kullanın.',
    draggables: ['sonuc', '=', 'a > b', '?', 'a', ':', 'b', ';'],
    ids: ['sonuc', 'equals', 'condition', 'question', 'a', 'colon', 'b', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="sonuc"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="condition"></span>
      <span class="dropzone" data-accept="question"></span>
      <span class="dropzone" data-accept="a"></span>
      <span class="dropzone" data-accept="colon"></span>
      <span class="dropzone" data-accept="b"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'sonuc' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === 'a > b' &&
        zones[3].textContent === '?' &&
        zones[4].textContent === 'a' &&
        zones[5].textContent === ':' &&
        zones[6].textContent === 'b' &&
        zones[7].textContent === ';'
      ) {
        preview.innerText = `sonuc = a > b ? a : b;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 32,
    text: '32. Return ifadesi kullanın.',
    draggables: ['return', 'a + b', ';'],
    ids: ['return', 'expression', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="return"></span>
      <span class="dropzone" data-accept="expression"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'return' &&
        zones[1].textContent === 'a + b' &&
        zones[2].textContent === ';'
      ) {
        preview.innerText = `return a + b;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 33,
    text: '33. Continue ifadesi kullanın.',
    draggables: ['continue', ';'],
    ids: ['continue', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="continue"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'continue' &&
        zones[1].textContent === ';'
      ) {
        preview.innerText = `continue;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 34,
    text: '34. Önişlemci koşulu kullanın.',
    draggables: ['#ifdef', 'DEBUG', '#endif'],
    ids: ['ifdef', 'DEBUG', 'endif'],
    html: `
      <span class="dropzone" data-accept="ifdef"></span>
      <span class="dropzone" data-accept="DEBUG"></span>
      <span class="dropzone" data-accept="endif"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === '#ifdef' &&
        zones[1].textContent === 'DEBUG' &&
        zones[2].textContent === '#endif'
      ) {
        preview.innerText = `#ifdef DEBUG #endif`;
        return true;
      }
      return false;
    }
  },
  {
    id: 35,
    text: '35. Enum basit tanımı yapın.',
    draggables: ['enum', 'Gunler', '{', 'PAZARTESI', ',', 'SALI', '}', ';'],
    ids: ['enum', 'Gunler', 'open_brace', 'PAZARTESI', 'comma', 'SALI', 'close_brace', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="enum"></span>
      <span class="dropzone" data-accept="Gunler"></span>
      <span class="dropzone" data-accept="open_brace"></span>
      <span class="dropzone" data-accept="PAZARTESI"></span>
      <span class="dropzone" data-accept="comma"></span>
      <span class="dropzone" data-accept="SALI"></span>
      <span class="dropzone" data-accept="close_brace"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'enum' &&
        zones[1].textContent === 'Gunler' &&
        zones[2].textContent === '{' &&
        zones[3].textContent === 'PAZARTESI' &&
        zones[4].textContent === ',' &&
        zones[5].textContent === 'SALI' &&
        zones[6].textContent === '}' &&
        zones[7].textContent === ';'
      ) {
        preview.innerText = `enum Gunler { PAZARTESI, SALI };`;
        return true;
      }
      return false;
    }
  },
  {
    id: 36,
    text: '36. Calloc ile bellek tahsis edin.',
    draggables: ['int', '*', 'ptr', '=', 'calloc', '(', '5', ',', 'sizeof(int)', ')', ';'],
    ids: ['int', 'asterisk', 'ptr', 'equals', 'calloc', 'open_paren', '5', 'comma', 'sizeof_int', 'close_paren', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="asterisk"></span>
      <span class="dropzone" data-accept="ptr"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="calloc"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="5"></span>
      <span class="dropzone" data-accept="comma"></span>
      <span class="dropzone" data-accept="sizeof_int"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'int' &&
        zones[1].textContent === '*' &&
        zones[2].textContent === 'ptr' &&
        zones[3].textContent === '=' &&
        zones[4].textContent === 'calloc' &&
        zones[5].textContent === '(' &&
        zones[6].textContent === '5' &&
        zones[7].textContent === ',' &&
        zones[8].textContent === 'sizeof(int)' &&
        zones[9].textContent === ')' &&
        zones[10].textContent === ';'
      ) {
        preview.innerText = `int *ptr = calloc(5, sizeof(int));`;
        return true;
      }
      return false;
    }
  },
  {
    id: 37,
    text: '37. Bitwise AND operatörü kullanın.',
    draggables: ['sonuc', '=', 'a', '&', 'b', ';'],
    ids: ['sonuc', 'equals', 'a', 'bitwise_and', 'b', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="sonuc"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="a"></span>
      <span class="dropzone" data-accept="bitwise_and"></span>
      <span class="dropzone" data-accept="b"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'sonuc' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === 'a' &&
        zones[3].textContent === '&' &&
        zones[4].textContent === 'b' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `sonuc = a & b;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 38,
    text: '38. Left shift operatörü kullanın.',
    draggables: ['sonuc', '=', 'sayi', '<<', '2', ';'],
    ids: ['sonuc', 'equals', 'sayi', 'left_shift', '2', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="sonuc"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="sayi"></span>
      <span class="dropzone" data-accept="left_shift"></span>
      <span class="dropzone" data-accept="2"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'sonuc' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === 'sayi' &&
        zones[3].textContent === '<<' &&
        zones[4].textContent === '2' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `sonuc = sayi << 2;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 39,
    text: '39. Pointer to pointer tanımı yapın.',
    draggables: ['int', '**', 'ptr2', ';'],
    ids: ['int', 'double_asterisk', 'ptr2', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="double_asterisk"></span>
      <span class="dropzone" data-accept="ptr2"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'int' &&
        zones[1].textContent === '**' &&
        zones[2].textContent === 'ptr2' &&
        zones[3].textContent === ';'
      ) {
        preview.innerText = `int **ptr2;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 40,
    text: '40. String kopyalama fonksiyonu kullanın.',
    draggables: ['strcpy', '(', 'hedef', ',', 'kaynak', ')', ';'],
    ids: ['strcpy', 'open_paren', 'hedef', 'comma', 'kaynak', 'close_paren', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="strcpy"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="hedef"></span>
      <span class="dropzone" data-accept="comma"></span>
      <span class="dropzone" data-accept="kaynak"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'strcpy' &&
        zones[1].textContent === '(' &&
        zones[2].textContent === 'hedef' &&
        zones[3].textContent === ',' &&
        zones[4].textContent === 'kaynak' &&
        zones[5].textContent === ')' &&
        zones[6].textContent === ';'
      ) {
        preview.innerText = `strcpy(hedef, kaynak);`;
        return true;
      }
      return false;
    }
  },
  {
    id: 41,
    text: '41. XOR operatörü kullanın.',
    draggables: ['sonuc', '=', 'a', '^', 'b', ';'],
    ids: ['sonuc', 'equals', 'a', 'xor', 'b', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="sonuc"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="a"></span>
      <span class="dropzone" data-accept="xor"></span>
      <span class="dropzone" data-accept="b"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'sonuc' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === 'a' &&
        zones[3].textContent === '^' &&
        zones[4].textContent === 'b' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `sonuc = a ^ b;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 42,
    text: '42. Modulus operatörü kullanın.',
    draggables: ['kalan', '=', '10', '%', '3', ';'],
    ids: ['kalan', 'equals', '10', 'modulus', '3', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="kalan"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="10"></span>
      <span class="dropzone" data-accept="modulus"></span>
      <span class="dropzone" data-accept="3"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'kalan' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === '10' &&
        zones[3].textContent === '%' &&
        zones[4].textContent === '3' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `kalan = 10 % 3;`;
        return true;
      }
      return false;
    }
  },
   {
    id: 43,
    text: '43. Goto ifadesi kullanın.',
    draggables: ['goto', 'etiket', ';'],
    ids: ['goto', 'etiket', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="goto"></span>
      <span class="dropzone" data-accept="etiket"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'goto' &&
        zones[1].textContent === 'etiket' &&
        zones[2].textContent === ';'
      ) {
        preview.innerText = `goto etiket;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 44,
    text: '44. Long değişken tanımlayın.',
    draggables: ['long', 'buyuk_sayi', '=', '1000000', ';'],
    ids: ['long', 'buyuk_sayi', 'equals', '1000000', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="long"></span>
      <span class="dropzone" data-accept="buyuk_sayi"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="1000000"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'long' &&
        zones[1].textContent === 'buyuk_sayi' &&
        zones[2].textContent === '=' &&
        zones[3].textContent === '1000000' &&
        zones[4].textContent === ';'
      ) {
        preview.innerText = `long buyuk_sayi = 1000000;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 45,
    text: '45. Short değişken tanımlayın.',
    draggables: ['short', 'kucuk', '=', '32', ';'],
    ids: ['short', 'kucuk', 'equals', '32', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="short"></span>
      <span class="dropzone" data-accept="kucuk"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="32"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'short' &&
        zones[1].textContent === 'kucuk' &&
        zones[2].textContent === '=' &&
        zones[3].textContent === '32' &&
        zones[4].textContent === ';'
      ) {
        preview.innerText = `short kucuk = 32;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 46,
    text: '46. Extern değişken tanımlayın.',
    draggables: ['extern', 'int', 'dis_degisken', ';'],
    ids: ['extern', 'int', 'dis_degisken', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="extern"></span>
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="dis_degisken"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'extern' &&
        zones[1].textContent === 'int' &&
        zones[2].textContent === 'dis_degisken' &&
        zones[3].textContent === ';'
      ) {
        preview.innerText = `extern int dis_degisken;`;
        return true;
      }
      return false;
    }
  },
  {
    id: 47,
    text: '47. Unsigned int tanımlayın.',
    draggables: ['unsigned', 'int', 'pozitif', '=', '100', ';'],
    ids: ['unsigned', 'int', 'pozitif', 'equals', '100', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="unsigned"></span>
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="pozitif"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="100"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'unsigned' &&
        zones[1].textContent === 'int' &&
        zones[2].textContent === 'pozitif' &&
        zones[3].textContent === '=' &&
        zones[4].textContent === '100' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `unsigned int pozitif = 100;`;
        return true;
      }
      return false;
    }
  },{
    id: 48,
    text: '48. Realloc ile bellek yeniden boyutlandırın.',
    draggables: ['ptr', '=', 'realloc', '(', 'ptr', ',', '20', ')', ';'],
    ids: ['ptr', 'equals', 'realloc', 'open_paren', 'ptr_param', 'comma', '20', 'close_paren', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="ptr"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="realloc"></span>
      <span class="dropzone" data-accept="open_paren"></span>
      <span class="dropzone" data-accept="ptr_param"></span>
      <span class="dropzone" data-accept="comma"></span>
      <span class="dropzone" data-accept="20"></span>
      <span class="dropzone" data-accept="close_paren"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'ptr' &&
        zones[1].textContent === '=' &&
        zones[2].textContent === 'realloc' &&
        zones[3].textContent === '(' &&
        zones[4].textContent === 'ptr' &&
        zones[5].textContent === ',' &&
        zones[6].textContent === '20' &&
        zones[7].textContent === ')' &&
        zones[8].textContent === ';'
      ) {
        preview.innerText = `ptr = realloc(ptr, 20);`;
        return true;
      }
      return false;
    }
  },
   {
    id: 49,
    text: '49. Register değişken tanımlayın.',
    draggables: ['register', 'int', 'hizli', '=', '5', ';'],
    ids: ['register', 'int', 'hizli', 'equals', '5', 'semicolon'],
    html: `
      <span class="dropzone" data-accept="register"></span>
      <span class="dropzone" data-accept="int"></span>
      <span class="dropzone" data-accept="hizli"></span>
      <span class="dropzone" data-accept="equals"></span>
      <span class="dropzone" data-accept="5"></span>
      <span class="dropzone" data-accept="semicolon"></span>
    `,
    render: () => {
      const preview = document.getElementById('preview');
      const zones = document.querySelectorAll('.dropzone');
      if (
        zones[0].textContent === 'register' &&
        zones[1].textContent === 'int' &&
        zones[2].textContent === 'hizli' &&
        zones[3].textContent === '=' &&
        zones[4].textContent === '5' &&
        zones[5].textContent === ';'
      ) {
        preview.innerText = `register int hizli = 5;`;
        return true;
      }
      return false;
    }
  },
  {
  id: 50,
  text: '50. Volatile değişken tanımlayın.',
  draggables: ['volatile', 'int', 'sensor', '=', '10', ';'],
  ids: ['volatile', 'int', 'sensor', 'equals', '10', 'semicolon'],
  html: `
    <span class="dropzone" data-accept="volatile"></span>
    <span class="dropzone" data-accept="int"></span>
    <span class="dropzone" data-accept="sensor"></span>
    <span class="dropzone" data-accept="equals"></span>
    <span class="dropzone" data-accept="10"></span>
    <span class="dropzone" data-accept="semicolon"></span>
  `,
  render: () => {
    const preview = document.getElementById('preview');
    const zones = document.querySelectorAll('.dropzone');
    if (
      zones[0].textContent === 'volatile' &&
      zones[1].textContent === 'int' &&
      zones[2].textContent === 'sensor' &&
      zones[3].textContent === '=' &&
      zones[4].textContent === '10' &&
      zones[5].textContent === ';'
    ) {
      preview.innerText = `volatile int sensor = 10;`;
      return true;
    }
    return false;
  }
}



 
];

    let currentQuestion = 0;
    let score = 0;
    let streakCount = 0;
    const colors = ['#6366f1', '#ec4899', '#10b981', '#eab308', '#3b82f6'];

    function createParticles() {
      const particles = document.getElementById('particles');
      particles.innerHTML = '';
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particles.appendChild(particle);
      }
    }

    function animateParticles() {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        particle.style.animation = `celebrate ${duration}s ease-out ${delay}s forwards`;
      });
      setTimeout(() => {
        particles.forEach(particle => {
          particle.style.animation = '';
          particle.style.opacity = '0';
        });
      }, 5000);
    }

    function updateProgress() {
      const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
      document.getElementById("progressFill").style.width = progressPercent + "%";
      document.getElementById("questionNumber").innerText = currentQuestion + 1;
    }

    function showFeedback(isCorrect) {
      const feedback = document.getElementById("feedback");
      feedback.classList.remove('success', 'error', 'show');
      setTimeout(() => {
        if (isCorrect) {
          feedback.textContent = "✅ Doğru!";
          feedback.classList.add('success', 'show');
        } else {
          feedback.textContent = "❌ Yanlış! Tekrar dene.";
          feedback.classList.add('error', 'show');
        }
      }, 10);
    }

    function updateStreak(correct) {
      const streakElement = document.getElementById("streak");
      if (correct) {
        streakCount++;
        document.getElementById("streakCount").textContent = streakCount;
        if (streakCount >= 2) {
          streakElement.classList.add('show');
        }
      } else {
        streakCount = 0;
        document.getElementById("streakCount").textContent = streakCount;
        streakElement.classList.remove('show');
      }
    }

    function animateScoreChange() {
      const scoreElement = document.getElementById("scoreNumber");
      scoreElement.classList.add('pulse');
      setTimeout(() => {
        scoreElement.classList.remove('pulse');
      }, 500);
    }

    function animateQuestion() {
      const questionElement = document.getElementById("question");
      questionElement.classList.add('animate');
      setTimeout(() => {
        questionElement.classList.remove('animate');
      }, 1500);
    }

    function loadQuestion(index) {
      const question = questions[index];
      document.getElementById("question").textContent = question.text;
      document.getElementById("codeBox").innerHTML = question.html;
      document.getElementById("preview").innerHTML = 'Önizleme: Burada doğru cevabı görebilirsiniz.';
      document.getElementById("feedback").classList.remove('show');

      const draggableContainer = document.getElementById("draggables");
      draggableContainer.innerHTML = '';
      question.ids.forEach((id, i) => {
        const div = document.createElement("div");
        div.className = "draggable";
        div.draggable = true;
        div.id = id;
        div.textContent = question.draggables[i];
        draggableContainer.appendChild(div);
      });

      setupDragAndDrop();
      updateProgress();
      animateQuestion();
    }

    function setupDragAndDrop() {
      const draggables = document.querySelectorAll('.draggable');
      const dropzones = document.querySelectorAll('.dropzone');

      draggables.forEach(item => {
        item.addEventListener('dragstart', e => {
          e.dataTransfer.setData('text/plain', item.id);
        });
      });

      dropzones.forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', e => {
          e.preventDefault();
          const id = e.dataTransfer.getData('text');
          const dragged = document.getElementById(id);
          const correct = zone.dataset.accept;

          if (id === correct) {
            zone.textContent = dragged.textContent;
            dragged.remove();
            score += 10;
            document.getElementById('scoreNumber').innerText = score;
            animateScoreChange();
            showFeedback(true);
            updateStreak(true);
            if (streakCount >= 2 && streakCount % 2 === 0) {
              createParticles();
              animateParticles();
            }
            if (questions[currentQuestion].render()) {
              setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                  loadQuestion(currentQuestion);
                } else {
                  const gameCard = document.getElementById('gameCard');
                  gameCard.innerHTML = `
                    <div class="completion">
                      <div class="completion-emoji">🎉</div>
                      <div class="completion-message">Tebrikler! Tüm soruları tamamladınız!</div>
                      <div class="completion-score">Toplam Puan: ${score} / ${questions.length * 10}</div>
                      <div class="home-button">
                        <a href="MainMenu.html">Ana Sayfaya Dön</a>
                      </div>
                    </div>
                  `;
                  createParticles();
                  animateParticles();
                }
              }, 1200);
            }
          } else {
            showFeedback(false);
            updateStreak(false);
          }
        });
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      loadQuestion(currentQuestion);
      const elements = [
        document.getElementById('draggables'),
        document.getElementById('codeBox'),
        document.getElementById('preview'),
        document.querySelector('.progress'),
        document.querySelector('.home-button')
      ];
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
      });
    });