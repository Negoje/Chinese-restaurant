const translations = {
    en: 
    {
        "index-h1-welcome": "Eat with us <span class=\"typer\" id=\"some-id\" data-delay=\"200\" data-delim=\":\" data-words=\"Friends:Family:Legends:Sigmas\" data-colors=\"red\"></span><span class=\"cursor\" data-cursorDisplay=\"_\" data-owner=\"some-id\"></span>",
        "index-h2-welcome": "Accidental appearances",
        "index-p-welcome": "Welcome to the best chinese restaurant in the world!!!",
        "index-p-special-offer": "SPECAIL OFFER: Who ever eats the 2kg Rice in 45min gets it for free! Plus the bonus 3 beers!!!",
        "index-h2-meals": "Customers' favorite meals",
        "index-h5-meals": "Here you can see 3 of our best rated meals. These are the ones chosen by our dear customers"
      },
    se:
    {
        "index-h1-welcome": "Jedite s nama <span class=\"typer\" id=\"some-id\" data-delay=\"200\" data-delim=\":\" data-words=\"Prijatelji:Porodica:Legende:Sigme\" data-colors=\"red\"></span><span class=\"cursor\" data-cursorDisplay=\"_\" data-owner=\"some-id\"></span>",
        "index-h2-welcome": "Slučajna pojavljivanja",
        "index-p-welcome": "Dobrodošli u najbolji kineski restoran na svetu!!!",
        "index-p-special-offer": "POSEBNA PONUDA: Ko pojede 2kg pirinča za 45 minuta dobija ga besplatno! Plus bonus 3 piva!!!",
        "index-h2-meals": "Omiljena jela kupaca",
        "index-h5-meals": "Ovde možete videti 3 naša najbolje ocenjena jela. Ovo su ona koja su izabrali naši dragi kupci."
    },    
    ch:
    {
        "index-h1-welcome": "与我们一起用餐 <span class=\"typer\" id=\"some-id\" data-delay=\"200\" data-delim=\":\" data-words=\"朋友:家人:传奇:领袖\" data-colors=\"red\"></span><span class=\"cursor\" data-cursorDisplay=\"_\" data-owner=\"some-id\"></span>",
        "index-h2-welcome": "意外现身",
        "index-p-welcome": "欢迎来到世界上最好的中餐厅！！！",
        "index-p-special-offer": "特别优惠: 谁能在45分钟内吃完2公斤米饭就可以免费获得! 再加上3瓶啤酒!!!",
        "index-h2-meals": "顾客最喜欢的餐点",
        "index-h5-meals": "在这里您可以看到我们3道评价最高的餐点。这些是由我们的亲爱顾客选择的。"
    }
    
  };
  
  let currentLanguage = JSON.parse(localStorage.getItem('language')) || 'en';
  
  function translate(key) {
    return translations[currentLanguage][key] || key;
  }
  
  function updateTextContent() {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');

      if(element.id === 'index-welcome') 
      {
        element.innerHTML = translate(key);
        var typerElement = document.getElementById('some-id');
        if (typerElement) {
          new Typer(typerElement);
        }
      }
      else
      {
        element.textContent = translate(key);
      }
    });
    reloadCSS();
  }
  
  document.addEventListener('DOMContentLoaded', updateTextContent);

  function reloadCSS() {
    const cssFiles = [
      'css/bootstrap.min.css',
      'css/style.css',
      'css/responsive.css',
      'css/colors/orange.css',
      'css/navbar.css'
    ];
  
    cssFiles.forEach(file => {
      // Remove existing link
      let oldLink = document.querySelector(`link[href*="${file}"]`);
      if (oldLink) {
        oldLink.remove();
      }
  
      // Create new link
      let newLink = document.createElement('link');
      newLink.setAttribute('rel', 'stylesheet');
      newLink.setAttribute('type', 'text/css');
      newLink.setAttribute('href', file);
  
      // Add a timestamp to prevent caching
      newLink.href += '?v=' + new Date().getTime();
  
      // Append new link to head
      document.head.appendChild(newLink);
    });
  }