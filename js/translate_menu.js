

  const translations = {
    en: 
    {
        "menu-h2-welcome": "Our Menu",
        "menu-p-welcome": "There are plenty of different and original tastes on our menu so be sure to try as much as you can!!! We recomend our chef's specialty - Peanut Butter!",
        "menu-h2-starters": "STARTERS",
        "menu-h2-main-dishes": "MAIN DISHES",
        "menu-h2-deserts": "DESERTS",
        "menu-h2-drinks": "DRINKS",
        "menu-btn-sort": "Sort by Name",
        "menu-btn-price": "Sort by Price",
        "menu-btn-filter": "Apply Filters"
      },
    se:
    {
        "menu-h2-welcome": "Naš Meni",
        "menu-p-welcome": "Na našem meniju ima mnogo različitih i originalnih ukusa, zato obavezno probajte što više možete!!! Preporučujemo specijalitet našeg šefa kuhinje - kikiriki puter!",
        "menu-h2-starters": "PREDJELA",
        "menu-h2-main-dishes": "GLAVNA JELA",
        "menu-h2-deserts": "DESERTI",
        "menu-h2-drinks": "PIĆA",
        "menu-btn-sort": "Sortiraj po imenu",
        "menu-btn-price": "Sortiraj po ceni",
        "menu-btn-filter": "Primeni filtere"
    }
    ,
    ch:
    {
        "menu-h2-welcome": "我们的菜单",
        "menu-p-welcome": "我们的菜单上有很多不同和独特的口味，所以一定要尽可能多地尝试!!! 我们推荐我们的厨师特色 - 花生酱!",
        "menu-h2-starters": "前菜",
        "menu-h2-main-dishes": "主菜",
        "menu-h2-deserts": "甜点",
        "menu-h2-drinks": "饮料",
        "menu-btn-sort": "按名称排序",
        "menu-btn-price": "按价格排序",
        "menu-btn-filter": "应用过滤器"
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