translations = {
    "en": {
    "meal-h3-price": "Price:",
    "meal-th-size": "Size",
    "meal-th-price": "Price",
    "meal-th-quantity": "Quantity",
    "meal-td-small": "Small",
    "meal-btn-addcart": "Add to cart",
    "meal-td-large": "Large",
    "meal-h3-rating": "Rating",
    "meal-h3-rateit": "Rate it!",
    "meal-btn-rate": "Rate"
  },
  "se":{
    "meal-h3-price": "Cena:",
    "meal-th-size": "Veličina",
    "meal-th-price": "Cena",
    "meal-th-quantity": "Količina",
    "meal-td-small": "Mala",
    "meal-btn-addcart": "Dodaj u korpu",
    "meal-td-large": "Velika",
    "meal-h3-rating": "Ocena",
    "meal-h3-rateit": "Oceni!",
    "meal-btn-rate": "Oceni"
  },
  "ch": {
    "meal-h3-price": "价钱:",
    "meal-th-size": "尺寸",
    "meal-th-price": "价钱",
    "meal-th-quantity": "数量",
    "meal-td-small": "小",
    "meal-btn-addcart": "添加到购物车",
    "meal-td-large": "大",
    "meal-h3-rating": "评分",
    "meal-h3-rateit": "评价!",
    "meal-btn-rate": "评分"
  }

}




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