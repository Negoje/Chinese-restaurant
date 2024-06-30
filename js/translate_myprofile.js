
const translations = {
    "en":{
        "profile-h2-cart": "Cart",
        "profile-th-meal": "Meal",
        "profile-th-size": "Size",
        "profile-th-quantity": "Quantity",
        "profile-th-price": "Price",
        "profile-p-total-price": "Total price:",
        "profile-btn-order": "Order",
        "profile-h2-orders": "Orders",
        "profile-th-num": "#",
        "profile-th-desc": "Description"
      },
    "se":{
        "profile-h2-cart": "Korpa",
        "profile-th-meal": "Jelo",
        "profile-th-size": "Veličina",
        "profile-th-quantity": "Količina",
        "profile-th-price": "Cena",
        "profile-p-total-price": "Ukupna cena:",
        "profile-btn-order": "Naruči",
        "profile-h2-orders": "Porudžbine",
        "profile-th-num": "#",
        "profile-th-desc": "Opis"
    },
    "ch":{
        "profile-h2-cart": "购物车",
        "profile-th-meal": "餐",
        "profile-th-size": "尺寸",
        "profile-th-quantity": "数量",
        "profile-th-price": "价钱",
        "profile-p-total-price": "总价:",
        "profile-btn-order": "订单",
        "profile-h2-orders": "订单",
        "profile-th-num": "#",
        "profile-th-desc": "描述"
    
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