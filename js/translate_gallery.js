const translations = {
    en: 
      {
        "gallery-h2-title" : "Our Gallery",
      },
    se:
      {
        "gallery-h2-title" : "Naša Galerija",
    },
    ch:
      {
        "gallery-h2-title" : "我们的画廊",
    }
  };
  
  let currentLanguage = JSON.parse(localStorage.getItem('language')) || 'en';
  
  function translate(key) {
    return translations[currentLanguage][key] || key;
  }
  
  function updateTextContent() {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      element.textContent = translate(key);
    });
  }
  
  document.addEventListener('DOMContentLoaded', updateTextContent);