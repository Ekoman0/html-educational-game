   const questions = [
  {
    id: 1,
    text: '1. Başlık oluşturmak için doğru HTML etiketlerini yerleştir.',
    draggables: ['<h1>', '</h1>', '<p>', '<div>'],
    ids: ['h1', '/h1', 'p', 'div'],
    html: '<span class="dropzone" data-accept="h1"></span>Merhaba Dünya<span class="dropzone" data-accept="/h1"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const h1Start = document.querySelector('.dropzone[data-accept="h1"]');
      const h1End = document.querySelector('.dropzone[data-accept="/h1"]');
      if (h1Start.textContent === '<h1>' && h1End.textContent === '</h1>') {
        preview.innerHTML = '<h1>Merhaba Dünya</h1>';
        return true;
      }
      return false;
    }
  },
  {
    id: 2,
    text: '2. Paragraf etiketi ile bir paragraf oluştur.',
    draggables: ['<p>', '</p>', '<h2>', '<span>'],
    ids: ['p', '/p', 'h2', 'span'],
    html: '<span class="dropzone" data-accept="p"></span>Bu bir paragraftır.<span class="dropzone" data-accept="/p"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const pStart = document.querySelector('.dropzone[data-accept="p"]');
      const pEnd = document.querySelector('.dropzone[data-accept="/p"]');
      if (pStart.textContent === '<p>' && pEnd.textContent === '</p>') {
        preview.innerHTML = '<p>Bu bir paragraftır.</p>';
        return true;
      }
      return false;
    }
  },
  {
    id: 3,
    text: '3. Bir bağlantı (link) oluşturmak için doğru etiketi yerleştir.',
    draggables: ['<a>', '</a>', '<div>', '<span>'],
    ids: ['a', '/a', 'div', 'span'],
    html: '<span class="dropzone" data-accept="a"></span>Google\'a Git<span class="dropzone" data-accept="/a"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const aStart = document.querySelector('.dropzone[data-accept="a"]');
      const aEnd = document.querySelector('.dropzone[data-accept="/a"]');
      if (aStart.textContent === '<a>' && aEnd.textContent === '</a>') {
        preview.innerHTML = '<a>Google\'a Git</a>';
        return true;
      }
      return false;
    }
  },
  {
    id: 4,
    text: '4. Resim eklemek için doğru etiketi yerleştir.',
    draggables: ['<img>', '<div>', '<p>', '<span>'],
    ids: ['img', 'div', 'p', 'span'],
    html: '<span class="dropzone" data-accept="img"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const img = document.querySelector('.dropzone[data-accept="img"]');
      if (img.textContent === '<img>') {
        preview.innerHTML = '<img>';
        return true;
      }
      return false;
    }
  },
  {
    id: 5,
    text: '5. Sırasız liste oluşturmak için doğru etiketleri yerleştir.',
    draggables: ['<ul>', '</ul>', '<ol>', '<div>'],
    ids: ['ul', '/ul', 'ol', 'div'],
    html: '<span class="dropzone" data-accept="ul"></span><li>Öğe 1</li><li>Öğe 2</li><span class="dropzone" data-accept="/ul"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const ulStart = document.querySelector('.dropzone[data-accept="ul"]');
      const ulEnd = document.querySelector('.dropzone[data-accept="/ul"]');
      if (ulStart.textContent === '<ul>' && ulEnd.textContent === '</ul>') {
        preview.innerHTML = '<ul><li>Öğe 1</li><li>Öğe 2</li></ul>';
        return true;
      }
      return false;
    }
  },
  {
    id: 6,
    text: '6. Liste öğesi için doğru etiketi yerleştir.',
    draggables: ['<li>', '</li>', '<p>', '<div>'],
    ids: ['li', '/li', 'p', 'div'],
    html: '<ul><span class="dropzone" data-accept="li"></span>Öğe 1<span class="dropzone" data-accept="/li"></span></ul>',
    render: () => {
      const preview = document.getElementById('preview');
      const liStart = document.querySelector('.dropzone[data-accept="li"]');
      const liEnd = document.querySelector('.dropzone[data-accept="/li"]');
      if (liStart.textContent === '<li>' && liEnd.textContent === '</li>') {
        preview.innerHTML = '<ul><li>Öğe 1</li></ul>';
        return true;
      }
      return false;
    }
  },
  {
    id: 7,
    text: '7. Sıralı liste oluşturmak için doğru etiketleri yerleştir.',
    draggables: ['<ol>', '</ol>', '<ul>', '<div>'],
    ids: ['ol', '/ol', 'ul', 'div'],
    html: '<span class="dropzone" data-accept="ol"></span><li>Adım 1</li><li>Adım 2</li><span class="dropzone" data-accept="/ol"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const olStart = document.querySelector('.dropzone[data-accept="ol"]');
      const olEnd = document.querySelector('.dropzone[data-accept="/ol"]');
      if (olStart.textContent === '<ol>' && olEnd.textContent === '</ol>') {
        preview.innerHTML = '<ol><li>Adım 1</li><li>Adım 2</li></ol>';
        return true;
      }
      return false;
    }
  },
  {
    id: 8,
    text: '8. Bir bağlantıya href özelliği ekle.',
    draggables: ['href="https://google.com"', 'src="image.jpg"', 'class="link"', 'id="link"'],
    ids: ['href', 'src', 'class', 'id'],
    html: '<a <span class="dropzone" data-accept="href"></span>>Google</a>',
    render: () => {
      const preview = document.getElementById('preview');
      const href = document.querySelector('.dropzone[data-accept="href"]');
      if (href.textContent === 'href="https://google.com"') {
        preview.innerHTML = '<a href="https://google.com">Google</a>';
        return true;
      }
      return false;
    }
  },
  {
    id: 9,
    text: '9. Resme src özelliği ekle.',
    draggables: ['src="image.jpg"', 'href="page.html"', 'alt="image"', 'class="img"'],
    ids: ['src', 'href', 'alt', 'class'],
    html: '<img <span class="dropzone" data-accept="src"></span>>',
    render: () => {
      const preview = document.getElementById('preview');
      const src = document.querySelector('.dropzone[data-accept="src"]');
      if (src.textContent === 'src="image.jpg"') {
        preview.innerHTML = '<img src="image.jpg">';
        return true;
      }
      return false;
    }
  },
  {
    id: 10,
    text: '10. Resme alt özelliği ekle.',
    draggables: ['alt="Açıklama"', 'src="image.jpg"', 'class="img"', 'id="img"'],
    ids: ['alt', 'src', 'class', 'id'],
    html: '<img src="image.jpg" <span class="dropzone" data-accept="alt"></span>>',
    render: () => {
      const preview = document.getElementById('preview');
      const alt = document.querySelector('.dropzone[data-accept="alt"]');
      if (alt.textContent === 'alt="Açıklama"') {
        preview.innerHTML = '<img src="image.jpg" alt="Açıklama">';
        return true;
      }
      return false;
    }
  },
  {
    id: 11,
    text: '11. Bölüm oluşturmak için doğru etiketi yerleştir.',
    draggables: ['<div>', '</div>', '<span>', '<p>'],
    ids: ['div', '/div', 'span', 'p'],
    html: '<span class="dropzone" data-accept="div"></span>İçerik<span class="dropzone" data-accept="/div"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const divStart = document.querySelector('.dropzone[data-accept="div"]');
      const divEnd = document.querySelector('.dropzone[data-accept="/div"]');
      if (divStart.textContent === '<div>' && divEnd.textContent === '</div>') {
        preview.innerHTML = '<div>İçerik</div>';
        return true;
      }
      return false;
    }
  },
  {
    id: 12,
    text: '12. HTML belgesinin ana yapısını oluştur.',
    draggables: ['<!DOCTYPE html>', '<html>', '</html>', '<div>'],
    ids: ['doctype', 'html', '/html', 'div'],
    html: '<span class="dropzone" data-accept="doctype"></span><span class="dropzone" data-accept="html"></span>İçerik<span class="dropzone" data-accept="/html"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const doctype = document.querySelector('.dropzone[data-accept="doctype"]');
      const htmlStart = document.querySelector('.dropzone[data-accept="html"]');
      const htmlEnd = document.querySelector('.dropzone[data-accept="/html"]');
      if (doctype.textContent === '<!DOCTYPE html>' && htmlStart.textContent === '<html>' && htmlEnd.textContent === '</html>') {
        preview.innerHTML = '<!DOCTYPE html><html>İçerik</html>';
        return true;
      }
      return false;
    }
  },
  {
    id: 13,
    text: '13. HTML belgesine başlık bölümü ekle.',
    draggables: ['<head>', '</head>', '<body>', '<div>'],
    ids: ['head', '/head', 'body', 'div'],
    html: '<!DOCTYPE html><html><span class="dropzone" data-accept="head"></span><title>Başlık</title><span class="dropzone" data-accept="/head"></span></html>',
    render: () => {
      const preview = document.getElementById('preview');
      const headStart = document.querySelector('.dropzone[data-accept="head"]');
      const headEnd = document.querySelector('.dropzone[data-accept="/head"]');
      if (headStart.textContent === '<head>' && headEnd.textContent === '</head>') {
        preview.innerHTML = '<!DOCTYPE html><html><head><title>Başlık</title></head></html>';
        return true;
      }
      return false;
    }
  },
 {
  id: 14,
  text: '14. Bir alt başlık (h2) etiketi yerleştir.',
  draggables: ['<h2>', '</h2>', '<h1>', '<p>'],
  ids: ['h2', '/h2', 'h1', 'p'],
  html: '<span class="dropzone" data-accept="h2"></span>Alt Başlık<span class="dropzone" data-accept="/h2"></span>',
  render: () => {
    const preview = document.getElementById('preview');
    const h2Start = document.querySelector('.dropzone[data-accept="h2"]');
    const h2End = document.querySelector('.dropzone[data-accept="/h2"]');
    if (h2Start.textContent === '<h2>' && h2End.textContent === '</h2>') {
      preview.innerHTML = '<h2>Alt Başlık</h2>';
      return true;
    }
    return false;
  }
},
{
  id: 15,
  text: '15. Bir bağlantıya title özelliği ekle.',
  draggables: ['title="Bağlantı Açıklaması"', 'href="https://example.com"', 'class="link"', 'id="link"'],
  ids: ['title', 'href', 'class', 'id'],
  html: '<a href="https://example.com" <span class="dropzone" data-accept="title"></span>>Bağlantı</a>',
  render: () => {
    const preview = document.getElementById('preview');
    const titleAttr = document.querySelector('.dropzone[data-accept="title"]');
    if (titleAttr && titleAttr.textContent === 'title="Bağlantı Açıklaması"') {
      preview.innerHTML = '<a href="https://example.com" title="Bağlantı Açıklaması">Bağlantı</a>';
      return true;
    }
    return false;
  }
},
{
  id: 16,
  text: '16. Resme width özelliği ekle.',
  draggables: ['width="100"', 'height="200"', 'class="image"', 'id="image"'],
  ids: ['width', 'height', 'class', 'id'],
  html: '<img src="resim.jpg" <span class="dropzone" data-accept="width"></span>>',
  render: () => {
    const preview = document.getElementById('preview');
    const widthAttr = document.querySelector('.dropzone[data-accept="width"]');
    if (widthAttr.textContent === 'width="100"') {
      preview.innerHTML = '<img src="resim.jpg" width="100">';
      return true;
    }
    return false;
  }
},
{
  id: 17,
  text: '17. Paragrafa class özelliği ekle.',
  draggables: ['class="paragraf"', 'id="paragraf"', 'style="color: blue"', 'title="Paragraf"'],
  ids: ['class', 'id', 'style', 'title'],
  html: '<p <span class="dropzone" data-accept="class"></span>>Bu bir paragraftır.</p>',
  render: () => {
    const preview = document.getElementById('preview');
    const classAttr = document.querySelector('.dropzone[data-accept="class"]');
    if (classAttr.textContent === 'class="paragraf"') {
      preview.innerHTML = '<p class="paragraf">Bu bir paragraftır.</p>';
      return true;
    }
    return false;
  }
},


  {
    id: 18,
    text: '18. Eğik metin için doğru etiketi yerleştir.',
    draggables: ['<em>', '</em>', '<strong>', '<div>'],
    ids: ['em', '/em', 'strong', 'div'],
    html: '<span class="dropzone" data-accept="em"></span>Vurgu<span class="dropzone" data-accept="/em"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const emStart = document.querySelector('.dropzone[data-accept="em"]');
      const emEnd = document.querySelector('.dropzone[data-accept="/em"]');
      if (emStart.textContent === '<em>' && emEnd.textContent === '</em>') {
        preview.innerHTML = '<em>Vurgu</em>';
        return true;
      }
      return false;
    }
  },
  {
    id: 19,
    text: '19. Bir form oluşturmak için doğru etiketi yerleştir.',
    draggables: ['<form>', '</form>', '<div>', '<section>'],
    ids: ['form', '/form', 'div', 'section'],
    html: '<span class="dropzone" data-accept="form"></span>Form İçeriği<span class="dropzone" data-accept="/form"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const formStart = document.querySelector('.dropzone[data-accept="form"]');
      const formEnd = document.querySelector('.dropzone[data-accept="/form"]');
      if (formStart.textContent === '<form>' && formEnd.textContent === '</form>') {
        preview.innerHTML = '<form>Form İçeriği</form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 20,
    text: '20. Metin girişi için doğru etiketi yerleştir.',
    draggables: ['<input>', '<button>', '<textarea>', '<div>'],
    ids: ['input', 'button', 'textarea', 'div'],
    html: '<form><span class="dropzone" data-accept="input"></span></form>',
    render: () => {
      const preview = document.getElementById('preview');
      const input = document.querySelector('.dropzone[data-accept="input"]');
      if (input.textContent === '<input>') {
        preview.innerHTML = '<form><input></form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 21,
    text: '21. Giriş türü için type özelliği ekle.',
    draggables: ['type="text"', 'type="submit"', 'class="input"', 'id="input"'],
    ids: ['type-text', 'type-submit', 'class', 'id'],
    html: '<input <span class="dropzone" data-accept="type-text"></span>>',
    render: () => {
      const preview = document.getElementById('preview');
      const type = document.querySelector('.dropzone[data-accept="type-text"]');
      if (type.textContent === 'type="text"') {
        preview.innerHTML = '<input type="text">';
        return true;
      }
      return false;
    }
  },
  {
    id: 22,
    text: '22. Gönder butonu için doğru etiketi yerleştir.',
    draggables: ['<button>', '</button>', '<input>', '<div>'],
    ids: ['button', '/button', 'input', 'div'],
    html: '<form><span class="dropzone" data-accept="button"></span>Gönder<span class="dropzone" data-accept="/button"></span></form>',
    render: () => {
      const preview = document.getElementById('preview');
      const buttonStart = document.querySelector('.dropzone[data-accept="button"]');
      const buttonEnd = document.querySelector('.dropzone[data-accept="/button"]');
      if (buttonStart.textContent === '<button>' && buttonEnd.textContent === '</button>') {
        preview.innerHTML = '<form><button>Gönder</button></form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 23,
    text: '23. Buton türü için type özelliği ekle.',
    draggables: ['type="submit"', 'type="text"', 'class="btn"', 'id="btn"'],
    ids: ['type-submit', 'type-text', 'class', 'id'],
    html: '<button <span class="dropzone" data-accept="type-submit"></span>>Gönder</button>',
    render: () => {
      const preview = document.getElementById('preview');
      const type = document.querySelector('.dropzone[data-accept="type-submit"]');
      if (type.textContent === 'type="submit"') {
        preview.innerHTML = '<button type="submit">Gönder</button>';
        return true;
      }
      return false;
    }
  },
  {
    id: 24,
    text: '24. Tablo oluşturmak için doğru etiketi yerleştir.',
    draggables: ['<table>', '</table>', '<div>', '<form>'],
    ids: ['table', '/table', 'div', 'form'],
    html: '<span class="dropzone" data-accept="table"></span>Tablo İçeriği<span class="dropzone" data-accept="/table"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const tableStart = document.querySelector('.dropzone[data-accept="table"]');
      const tableEnd = document.querySelector('.dropzone[data-accept="/table"]');
      if (tableStart.textContent === '<table>' && tableEnd.textContent === '</table>') {
        preview.innerHTML = '<table>Tablo İçeriği</table>';
        return true;
      }
      return false;
    }
  },
  {
    id: 25,
    text: '25. Tablo satırı için doğru etiketi yerleştir.',
    draggables: ['<tr>', '</tr>', '<td>', '<div>'],
    ids: ['tr', '/tr', 'td', 'div'],
    html: '<table><span class="dropzone" data-accept="tr"></span>Satır<span class="dropzone" data-accept="/tr"></span></table>',
    render: () => {
      const preview = document.getElementById('preview');
      const trStart = document.querySelector('.dropzone[data-accept="tr"]');
      const trEnd = document.querySelector('.dropzone[data-accept="/tr"]');
      if (trStart.textContent === '<tr>' && trEnd.textContent === '</tr>') {
        preview.innerHTML = '<table><tr>Satır</tr></table>';
        return true;
      }
      return false;
    }
  },
  {
    id: 26,
    text: '26. Tablo hücresi için doğru etiketi yerleştir.',
    draggables: ['<td>', '</td>', '<tr>', '<div>'],
    ids: ['td', '/td', 'tr', 'div'],
    html: '<table><tr><span class="dropzone" data-accept="td"></span>Hücre<span class="dropzone" data-accept="/td"></span></tr></table>',
    render: () => {
      const preview = document.getElementById('preview');
      const tdStart = document.querySelector('.dropzone[data-accept="td"]');
      const tdEnd = document.querySelector('.dropzone[data-accept="/td"]');
      if (tdStart.textContent === '<td>' && tdEnd.textContent === '</td>') {
        preview.innerHTML = '<table><tr><td>Hücre</td></tr></table>';
        return true;
      }
      return false;
    }
  },
  {
    id: 27,
    text: '27. Tablo başlığı için doğru etiketi yerleştir.',
    draggables: ['<th>', '</th>', '<td>', '<div>'],
    ids: ['th', '/th', 'td', 'div'],
    html: '<table><tr><span class="dropzone" data-accept="th"></span>Başlık<span class="dropzone" data-accept="/th"></span></tr></table>',
    render: () => {
      const preview = document.getElementById('preview');
      const thStart = document.querySelector('.dropzone[data-accept="th"]');
      const thEnd = document.querySelector('.dropzone[data-accept="/th"]');
      if (thStart.textContent === '<th>' && thEnd.textContent === '</th>') {
        preview.innerHTML = '<table><tr><th>Başlık</th></tr></table>';
        return true;
      }
      return false;
    }
  },
  {
    id: 28,
    text: '28. Semantic header etiketi yerleştir.',
    draggables: ['<header>', '</header>', '<footer>', '<div>'],
    ids: ['header', '/header', 'footer', 'div'],
    html: '<span class="dropzone" data-accept="header"></span>Üstbilgi<span class="dropzone" data-accept="/header"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const headerStart = document.querySelector('.dropzone[data-accept="header"]');
      const headerEnd = document.querySelector('.dropzone[data-accept="/header"]');
      if (headerStart.textContent === '<header>' && headerEnd.textContent === '</header>') {
        preview.innerHTML = '<header>Üstbilgi</header>';
        return true;
      }
      return false;
    }
  },
  {
    id: 29,
    text: '29. Semantic footer etiketi yerleştir.',
    draggables: ['<footer>', '</footer>', '<header>', '<div>'],
    ids: ['footer', '/footer', 'header', 'div'],
    html: '<span class="dropzone" data-accept="footer"></span>Altbilgi<span class="dropzone" data-accept="/footer"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const footerStart = document.querySelector('.dropzone[data-accept="footer"]');
      const footerEnd = document.querySelector('.dropzone[data-accept="/footer"]');
      if (footerStart.textContent === '<footer>' && footerEnd.textContent === '</footer>') {
        preview.innerHTML = '<footer>Altbilgi</footer>';
        return true;
      }
      return false;
    }
  },
  {
    id: 30,
    text: '30. Semantic nav etiketi yerleştir.',
    draggables: ['<nav>', '</nav>', '<header>', '<div>'],
    ids: ['nav', '/nav', 'header', 'div'],
    html: '<span class="dropzone" data-accept="nav"></span>Navigasyon<span class="dropzone" data-accept="/nav"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const navStart = document.querySelector('.dropzone[data-accept="nav"]');
      const navEnd = document.querySelector('.dropzone[data-accept="/nav"]');
      if (navStart.textContent === '<nav>' && navEnd.textContent === '</nav>') {
        preview.innerHTML = '<nav>Navigasyon</nav>';
        return true;
      }
      return false;
    }
  },
  {
    id: 31,
    text: '31. Semantic section etiketi yerleştir.',
    draggables: ['<section>', '</section>', '<article>', '<div>'],
    ids: ['section', '/section', 'article', 'div'],
    html: '<span class="dropzone" data-accept="section"></span>Bölüm<span class="dropzone" data-accept="/section"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const sectionStart = document.querySelector('.dropzone[data-accept="section"]');
      const sectionEnd = document.querySelector('.dropzone[data-accept="/section"]');
      if (sectionStart.textContent === '<section>' && sectionEnd.textContent === '</section>') {
        preview.innerHTML = '<section>Bölüm</section>';
        return true;
      }
      return false;
    }
  },
  {
    id: 32,
    text: '32. Semantic article etiketi yerleştir.',
    draggables: ['<article>', '</article>', '<section>', '<div>'],
    ids: ['article', '/article', 'section', 'div'],
    html: '<span class="dropzone" data-accept="article"></span>Makale<span class="dropzone" data-accept="/article"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const articleStart = document.querySelector('.dropzone[data-accept="article"]');
      const articleEnd = document.querySelector('.dropzone[data-accept="/article"]');
      if (articleStart.textContent === '<article>' && articleEnd.textContent === '</article>') {
        preview.innerHTML = '<article>Makale</article>';
        return true;
      }
      return false;
    }
  },
  {
    id: 33,
    text: '33. Class özelliği ekle.',
    draggables: ['class="container"', 'id="container"', 'style="color: red"', 'href="page.html"'],
    ids: ['class', 'id', 'style', 'href'],
    html: '<div <span class="dropzone" data-accept="class"></span>>İçerik</div>',
    render: () => {
      const preview = document.getElementById('preview');
      const classAttr = document.querySelector('.dropzone[data-accept="class"]');
      if (classAttr.textContent === 'class="container"') {
        preview.innerHTML = '<div class="container">İçerik</div>';
        return true;
      }
      return false;
    }
  },
  {
    id: 34,
    text: '34. ID özelliği ekle.',
    draggables: ['id="main"', 'class="main"', 'style="color: blue"', 'href="page.html"'],
    ids: ['id', 'class', 'style', 'href'],
    html: '<div <span class="dropzone" data-accept="id"></span>>İçerik</div>',
    render: () => {
      const preview = document.getElementById('preview');
      const idAttr = document.querySelector('.dropzone[data-accept="id"]');
      if (idAttr.textContent === 'id="main"') {
        preview.innerHTML = '<div id="main">İçerik</div>';
        return true;
      }
      return false;
    }
  },
  {
    id: 35,
    text: '35. Satır içi stil özelliği ekle.',
    draggables: ['style="color: red"', 'class="style"', 'id="style"', 'href="page.html"'],
    ids: ['style', 'class', 'id', 'href'],
    html: '<p <span class="dropzone" data-accept="style"></span>>Metin</p>',
    render: () => {
      const preview = document.getElementById('preview');
      const styleAttr = document.querySelector('.dropzone[data-accept="style"]');
      if (styleAttr.textContent === 'style="color: red"') {
        preview.innerHTML = '<p style="color: red">Metin</p>';
        return true;
      }
      return false;
    }
  },
  {
    id: 36,
    text: '36. Vurgu için span etiketi yerleştir.',
    draggables: ['<span>', '</span>', '<div>', '<p>'],
    ids: ['span', '/span', 'div', 'p'],
    html: '<p>Bu bir <span class="dropzone" data-accept="span"></span>vurgu<span class="dropzone" data-accept="/span"></span> metnidir.</p>',
    render: () => {
      const preview = document.getElementById('preview');
      const spanStart = document.querySelector('.dropzone[data-accept="span"]');
      const spanEnd = document.querySelector('.dropzone[data-accept="/span"]');
      if (spanStart.textContent === '<span>' && spanEnd.textContent === '</span>') {
        preview.innerHTML = '<p>Bu bir <span>vurgu</span> metnidir.</p>';
        return true;
      }
      return false;
    }
  },
  {
    id: 37,
    text: '37. Bağlantı için target özelliği ekle.',
    draggables: ['target="_blank"', 'rel="noopener"', 'class="link"', 'id="link"'],
    ids: ['target', 'rel', 'class', 'id'],
    html: '<a href="https://example.com" <span class="dropzone" data-accept="target"></span>>Link</a>',
    render: () => {
      const preview = document.getElementById('preview');
      const target = document.querySelector('.dropzone[data-accept="target"]');
      if (target.textContent === 'target="_blank"') {
        preview.innerHTML = '<a href="https://example.com" target="_blank">Link</a>';
        return true;
      }
      return false;
    }
  },
  {
    id: 38,
    text: '38. Form için action özelliği ekle.',
    draggables: ['action="/submit"', 'method="post"', 'class="form"', 'id="form"'],
    ids: ['action', 'method', 'class', 'id'],
    html: '<form <span class="dropzone" data-accept="action"></span>>İçerik</form>',
    render: () => {
      const preview = document.getElementById('preview');
      const action = document.querySelector('.dropzone[data-accept="action"]');
      if (action.textContent === 'action="/submit"') {
        preview.innerHTML = '<form action="/submit">İçerik</form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 39,
    text: '39. Form için method özelliği ekle.',
    draggables: ['method="post"', 'action="/submit"', 'class="form"', 'id="form"'],
    ids: ['method', 'action', 'class', 'id'],
    html: '<form action="/submit" <span class="dropzone" data-accept="method"></span>>İçerik</form>',
    render: () => {
      const preview = document.getElementById('preview');
      const method = document.querySelector('.dropzone[data-accept="method"]');
      if (method.textContent === 'method="post"') {
        preview.innerHTML = '<form action="/submit" method="post">İçerik</form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 40,
    text: '40. Metin alanı için textarea etiketi yerleştir.',
    draggables: ['<textarea>', '</textarea>', '<input>', '<div>'],
    ids: ['textarea', '/textarea', 'input', 'div'],
    html: '<form><span class="dropzone" data-accept="textarea"></span>Yorum<span class="dropzone" data-accept="/textarea"></span></form>',
    render: () => {
      const preview = document.getElementById('preview');
      const textareaStart = document.querySelector('.dropzone[data-accept="textarea"]');
      const textareaEnd = document.querySelector('.dropzone[data-accept="/textarea"]');
      if (textareaStart.textContent === '<textarea>' && textareaEnd.textContent === '</textarea>') {
        preview.innerHTML = '<form><textarea>Yorum</textarea></form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 41,
    text: '41. Seçenek listesi için select etiketi yerleştir.',
    draggables: ['<select>', '</select>', '<input>', '<div>'],
    ids: ['select', '/select', 'input', 'div'],
    html: '<form><span class="dropzone" data-accept="select"></span><option>Seçenek</option><span class="dropzone" data-accept="/select"></span></form>',
    render: () => {
      const preview = document.getElementById('preview');
      const selectStart = document.querySelector('.dropzone[data-accept="select"]');
      const selectEnd = document.querySelector('.dropzone[data-accept="/select"]');
      if (selectStart.textContent === '<select>' && selectEnd.textContent === '</select>') {
        preview.innerHTML = '<form><select><option>Seçenek</option></select></form>';
        return true;
      }
      return false;
    }
  },
  {
    id: 42,
    text: '42. Seçenek için option etiketi yerleştir.',
    draggables: ['<option>', '</option>', '<input>', '<div>'],
    ids: ['option', '/option', 'input', 'div'],
    html: '<select><span class="dropzone" data-accept="option"></span>Seçenek 1<span class="dropzone" data-accept="/option"></span></select>',
    render: () => {
      const preview = document.getElementById('preview');
      const optionStart = document.querySelector('.dropzone[data-accept="option"]');
      const optionEnd = document.querySelector('.dropzone[data-accept="/option"]');
      if (optionStart.textContent === '<option>' && optionEnd.textContent === '</option>') {
        preview.innerHTML = '<select><option>Seçenek 1</option></select>';
        return true;
      }
      return false;
    }
  },
  {
    id: 43,
    text: '43. Etiket için label etiketi yerleştir.',
    draggables: ['<label>', '</label>', '<div>', '<span>'],
    ids: ['label', '/label', 'div', 'span'],
    html: '<span class="dropzone" data-accept="label"></span>Ad:<span class="dropzone" data-accept="/label"></span><input>',
    render: () => {
      const preview = document.getElementById('preview');
      const labelStart = document.querySelector('.dropzone[data-accept="label"]');
      const labelEnd = document.querySelector('.dropzone[data-accept="/label"]');
      if (labelStart.textContent === '<label>' && labelEnd.textContent === '</label>') {
        preview.innerHTML = '<label>Ad:</label><input>';
        return true;
      }
      return false;
    }
  },
  {
    id: 44,
    text: '44. Video için doğru etiketi yerleştir.',
    draggables: ['<video>', '</video>', '<audio>', '<div>'],
    ids: ['video', '/video', 'audio', 'div'],
    html: '<span class="dropzone" data-accept="video"></span>Video İçeriği<span class="dropzone" data-accept="/video"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const videoStart = document.querySelector('.dropzone[data-accept="video"]');
      const videoEnd = document.querySelector('.dropzone[data-accept="/video"]');
      if (videoStart.textContent === '<video>' && videoEnd.textContent === '</video>') {
        preview.innerHTML = '<video>Video İçeriği</video>';
        return true;
      }
      return false;
    }
  },
  {
    id: 45,
    text: '45. Ses için doğru etiketi yerleştir.',
    draggables: ['<audio>', '</audio>', '<video>', '<div>'],
    ids: ['audio', '/audio', 'video', 'div'],
    html: '<span class="dropzone" data-accept="audio"></span>Ses İçeriği<span class="dropzone" data-accept="/audio"></span>',
    render: () => {
      const preview = document.getElementById('preview');
      const audioStart = document.querySelector('.dropzone[data-accept="audio"]');
      const audioEnd = document.querySelector('.dropzone[data-accept="/audio"]');
      if (audioStart.textContent === '<audio>' && audioEnd.textContent === '</audio>') {
        preview.innerHTML = '<audio>Ses İçeriği</audio>';
        return true;
      }
      return false;
    }
  },
  {
    id: 46,
    text: '46. Video için src özelliği ekle.',
    draggables: ['src="video.mp4"', 'alt="video"', 'class="video"', 'id="video"'],
    ids: ['src', 'alt', 'class', 'id'],
    html: '<video <span class="dropzone" data-accept="src"></span>>İçerik</video>',
    render: () => {
      const preview = document.getElementById('preview');
      const src = document.querySelector('.dropzone[data-accept="src"]');
      if (src.textContent === 'src="video.mp4"') {
        preview.innerHTML = '<video src="video.mp4">İçerik</video>';
        return true;
      }
      return false;
    }
  },
  {
    id: 47,
    text: '47. Ses için src özelliği ekle.',
    draggables: ['src="audio.mp3"', 'alt="audio"', 'class="audio"', 'id="audio"'],
    ids: ['src', 'alt', 'class', 'id'],
    html: '<audio <span class="dropzone" data-accept="src"></span>>İçerik</audio>',
    render: () => {
      const preview = document.getElementById('preview');
      const src = document.querySelector('.dropzone[data-accept="src"]');
      if (src.textContent === 'src="audio.mp3"') {
        preview.innerHTML = '<audio src="audio.mp3">İçerik</audio>';
        return true;
      }
      return false;
    }
  },
  {
    id: 48,
    text: '48. Bağlantı için rel özelliği ekle.',
    draggables: ['rel="nofollow"', 'target="_blank"', 'class="link"', 'id="link"'],
    ids: ['rel', 'target', 'class', 'id'],
    html: '<a href="https://example.com" <span class="dropzone" data-accept="rel"></span>>Link</a>',
    render: () => {
      const preview = document.getElementById('preview');
      const rel = document.querySelector('.dropzone[data-accept="rel"]');
      if (rel.textContent === 'rel="nofollow"') {
        preview.innerHTML = '<a href="https://example.com" rel="nofollow">Link</a>';
        return true;
      }
      return false;
    }
  },
  {
    id: 49,
    text: '49. Girdi için placeholder özelliği ekle.',
    draggables: ['placeholder="Adınızı girin"', 'value="Ad"', 'class="input"', 'id="input"'],
    ids: ['placeholder', 'value', 'class', 'id'],
    html: '<input type="text" <span class="dropzone" data-accept="placeholder"></span>>',
    render: () => {
      const preview = document.getElementById('preview');
      const placeholder = document.querySelector('.dropzone[data-accept="placeholder"]');
      if (placeholder.textContent === 'placeholder="Adınızı girin"') {
        preview.innerHTML = '<input type="text" placeholder="Adınızı girin">';
        return true;
      }
      return false;
    }
  },
  {
    id: 50,
    text: '50. Girdi için required özelliği ekle.',
    draggables: ['required', 'placeholder="Gerekli"', 'class="input"', 'id="input"'],
    ids: ['required', 'placeholder', 'class', 'id'],
    html: '<input type="text" <span class="dropzone" data-accept="required"></span>>',
    render: () => {
      const preview = document.getElementById('preview');
      const required = document.querySelector('.dropzone[data-accept="required"]');
      if (required.textContent === 'required') {
        preview.innerHTML = '<input type="text" required>';
        return true;
      }
      return false;
    }
  }
];

  // Oyun durumu değişkenleri
let currentQuestion = 0;  // Şu anki soru indeksi
let score = 0;           // Toplam puan
let streakCount = 0;     // Ardışık doğru cevap sayısı

// Parçacık efektleri için renk paleti
const colors = ['#6366f1', '#ec4899', '#10b981', '#eab308', '#3b82f6'];

/**
 * Kutlama animasyonu için parçacık efektleri oluşturur
 * 50 adet rastgele boyut ve renkte parçacık yaratır
 */
function createParticles() {
  const particles = document.getElementById('particles');
  particles.innerHTML = ''; // Önceki parçacıkları temizle
  
  // 50 parçacık oluştur
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Rastgele boyut ve renk ayarla
    const size = Math.random() * 10 + 5; // 5-15px arası boyut
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.left = `${Math.random() * 100}%`;  // Rastgele yatay konum
    particle.style.top = `${Math.random() * 100}%`;   // Rastgele dikey konum
    particle.style.opacity = '0';
    
    particles.appendChild(particle);
  }
}

/**
 * Parçacıkları hareket ettiren animasyon fonksiyonu
 * Her parçacık farklı gecikme ve süre ile yukarı doğru hareket eder
 */
function animateParticles() {
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach((particle, index) => {
    const delay = Math.random() * 2;        // 0-2 saniye arası gecikme
    const duration = Math.random() * 3 + 2; // 2-5 saniye arası süre
    particle.style.animation = `celebrate ${duration}s ease-out ${delay}s forwards`;
  });
  
  // 5 saniye sonra animasyonları temizle
  setTimeout(() => {
    particles.forEach(particle => {
      particle.style.animation = '';
      particle.style.opacity = '0';
    });
  }, 5000);
}

/**
 * İlerleme çubuğunu günceller
 * Şu anki soru numarasına göre yüzdelik ilerleme hesaplar
 */
function updateProgress() {
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progressPercent + "%";
  document.getElementById("questionNumber").innerText = currentQuestion + 1;
}

/**
 * Kullanıcıya geri bildirim mesajı gösterir
 * @param {boolean} isCorrect - Cevabın doğru olup olmadığını belirtir
 */
function showFeedback(isCorrect) {
  const feedback = document.getElementById("feedback");
  
  // Önceki sınıfları temizle
  feedback.classList.remove('success', 'error', 'show');
  
  // Kısa bir gecikme sonra yeni mesajı göster (DOM güncellemesi için)
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

/**
 * Ardışık doğru cevap sayacını günceller
 * @param {boolean} correct - Cevabın doğru olup olmadığını belirtir
 */
function updateStreak(correct) {
  const streakElement = document.getElementById("streak");
  
  if (correct) {
    streakCount++;
    document.getElementById("streakCount").textContent = streakCount;
    
    // 2 veya daha fazla ardışık doğru cevap varsa streak göstergesi görünür
    if (streakCount >= 2) {
      streakElement.classList.add('show');
    }
  } else {
    // Yanlış cevap durumunda streak sıfırlanır
    streakCount = 0;
    document.getElementById("streakCount").textContent = streakCount;
    streakElement.classList.remove('show');
  }
}

/**
 * Puan değişiminde görsel animasyon efekti
 * Skor elementine nabız animasyonu uygular
 */
function animateScoreChange() {
  const scoreElement = document.getElementById("scoreNumber");
  scoreElement.classList.add('pulse'); // Nabız animasyonu ekle
  
  setTimeout(() => {
    scoreElement.classList.remove('pulse'); // Animasyonu kaldır
  }, 500);
}

/**
 * Yeni soru yüklendiğinde soru elementine animasyon uygular
 */
function animateQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.classList.add('animate');
  
  setTimeout(() => {
    questionElement.classList.remove('animate');
  }, 1500);
}

/**
 * Belirtilen indeksteki soruyu yükler ve gösterir
 * @param {number} index - Yüklenecek sorunun indeksi
 */
function loadQuestion(index) {
  const question = questions[index];
  
  // Soru metnini ve HTML içeriğini güncelle
  document.getElementById("question").textContent = question.text;
  document.getElementById("codeBox").innerHTML = question.html;
  document.getElementById("preview").innerHTML = 'Önizleme: Burada doğru cevabı görebilirsiniz.';
  
  // Önceki geri bildirim mesajını gizle
  document.getElementById("feedback").classList.remove('show');

  // Sürüklenebilir öğeleri oluştur
  const draggableContainer = document.getElementById("draggables");
  draggableContainer.innerHTML = ''; // Önceki öğeleri temizle
  
  question.ids.forEach((id, i) => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.draggable = true;
    div.id = id;
    div.textContent = question.draggables[i];
    draggableContainer.appendChild(div);
  });

  // Sürükle-bırak işlevselliğini ayarla
  setupDragAndDrop();
  updateProgress();
  animateQuestion();
}

/**
 * Sürükle ve bırak işlevselliğini kurar
 * Tüm sürüklenebilir öğeler ve bırakma alanları için event listener'lar ekler
 */
function setupDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const dropzones = document.querySelectorAll('.dropzone');

  // Her sürüklenebilir öğe için drag başlatma olayı
  draggables.forEach(item => {
    item.addEventListener('dragstart', e => {
      // Sürüklenen öğenin ID'sini veri transferine ekle
      e.dataTransfer.setData('text/plain', item.id);
    });
  });

  // Her bırakma alanı için olay dinleyicileri
  dropzones.forEach(zone => {
    // Bırakma işlemine izin ver
    zone.addEventListener('dragover', e => e.preventDefault());
    
    // Bırakma olayını işle
    zone.addEventListener('drop', e => {
      e.preventDefault();
      
      // Sürüklenen öğenin ID'sini al
      const id = e.dataTransfer.getData('text');
      const dragged = document.getElementById(id);
      const correct = zone.dataset.accept; // Doğru cevap

      // Cevap kontrolü
      if (id === correct) {
        // Doğru cevap durumu
        zone.textContent = dragged.textContent;
        dragged.remove(); // Sürüklenen öğeyi kaldır
        
        // Puan güncellemesi
        score += 10;
        document.getElementById('scoreNumber').innerText = score;
        animateScoreChange();
        
        // Pozitif geri bildirim
        showFeedback(true);
        updateStreak(true);
        
        // Streak bonus: Her 2 ardışık doğru cevaptta parçacık efekti
        if (streakCount >= 2 && streakCount % 2 === 0) {
          createParticles();
          animateParticles();
        }
        
        // Sorunun tamamlanıp tamamlanmadığını kontrol et
        if (questions[currentQuestion].render()) {
          setTimeout(() => {
            currentQuestion++;
            
            // Sonraki soruya geç veya oyunu bitir
            if (currentQuestion < questions.length) {
              loadQuestion(currentQuestion);
            } else {
              // Tüm sorular tamamlandı - bitiş ekranını göster
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
              // Bitiş kutlaması
              createParticles();
              animateParticles();
            }
          }, 1200); // 1.2 saniye bekleme süresi
        }
      } else {
        // Yanlış cevap durumu
        showFeedback(false);
        updateStreak(false);
      }
    });
  });
}

/**
 * Sayfa yüklendiğinde çalışacak ana başlatma fonksiyonu
 * DOM hazır olduğunda oyunu başlatır ve giriş animasyonlarını uygular
 */
document.addEventListener('DOMContentLoaded', () => {
  // İlk soruyu yükle
  loadQuestion(currentQuestion);
  
  // Sayfa öğelerinin giriş animasyonu için element listesi
  const elements = [
    document.getElementById('draggables'),      // Sürüklenebilir öğeler
    document.getElementById('codeBox'),         // Kod kutusu
    document.getElementById('preview'),         // Önizleme alanı
    document.querySelector('.progress'),        // İlerleme çubuğu
    document.querySelector('.home-button')      // Ana sayfa butonu
  ];
  
  // Her öğeye sıralı giriş animasyonu uygula
  elements.forEach((el, index) => {
    // Başlangıçta görünmez ve aşağıda konumlandır
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    // Kademeli olarak görünür hale getir
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300 + (index * 150)); // Her öğe için 150ms artan gecikme
  });
});