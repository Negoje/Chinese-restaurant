const translations = {
    en: 
      {
        "video-gallery-h2-title" : "Our Video Gallery",
        "photo-gallery-h2-title" : "Our Photo Gallery",
      },
    se:
      {
        "video-gallery-h2-title" : "Naša Video Galerija",
        "photo-gallery-h2-title" : "Naša Galerija Fotografija",
    },
    ch:
      {
        "video-gallery-h2-title" : "我们的视频库",
        "photo-gallery-h2-title" : "我们的照片库",
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