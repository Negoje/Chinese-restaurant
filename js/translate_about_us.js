const translations = {
  en: 
    {
      "about-us-h2-title": "About Us",
      "about-us-h3-welcome": "Welcome to Food Funday Restaurant",
      "about-us-p-welcome": "Now in its 23rd year of holding three Michelin stars, Filip Stevanovic`s and Negoje's flagship restaurant provides elegant modern Chinese cuisine using the finest seasonal ingredients and employing both classic and modern techniques.",
      "about-us-h2-team": "Our Team",
      "about-us-p-mihajlo": "Mihajlo is a Serbian chef who has worked in some of the finest restaurants in Europe. He can cook anything you want, but his best dish is peanut butter with bread.",
      "about-us-p-adrian": "Adrian`s passion for cooking sparked at a young age, as he spent his childhood in the kitchen with his grandma in his hometown Shanghai, China",
      "about-us-p-jelica": "Jelica is a pastry chef with a passion for creating unique and \"outside the box\" desserts. She is a graduate of the Culinary Institute of America",
      "about-us-p-marija": "Marija has extensive experience in Michelin-starred restaurants throughout Italy and London, where her career began at Restaurant Gordon Ramsay in 2000s",
      "about-us-h2-location": "Location",
      "about-us-span-telephone": "Telephone: +86 13126969"
    },
  se:
    {
      "about-us-h2-title": "O nama",
      "about-us-h3-welcome": "Dobrodošli u restoran Food Funday",
      "about-us-p-welcome": "Već 23 godine sa tri Michelinove zvezdice, restoran Filipa Stevanovića i Negoja pruža elegantnu modernu kinesku kuhinju koristeći najfinije sezonske sastojke i primenjujući klasične i moderne tehnike.",
      "about-us-h2-team": "Naš tim",
      "about-us-p-mihajlo": "Mihajlo je srpski kuvar koji je radio u nekim od najboljih restorana u Evropi. Može da kuva bilo šta što poželite, ali njegov najbolji specijalitet je puter od kikirikija sa hlebom.",
      "about-us-p-adrian": "Adrianova strast za kuvanjem se probudila u ranom detinjstvu, jer je svoje detinjstvo provodio u kuhinji sa bakom u svom rodnom gradu Šangaju, Kina.",
      "about-us-p-jelica": "Jelica je poslastičar sa strašću za stvaranjem jedinstvenih i 'van kutije' deserata. Diplomirala je na Kulturnom institutu Amerike.",
      "about-us-p-marija": "Marija ima bogato iskustvo u restoranima sa Michelinovim zvezdicama širom Italije i Londona, gde je započela svoju karijeru u restoranu Gordon Ramsay 2000-ih.",
      "about-us-h2-location": "Lokacija",
      "about-us-span-telephone": "Telefon: +86 13126969"
  },
  ch:
    {
      "about-us-h2-title": "关于我们",
      "about-us-h3-welcome": "欢迎来到Food Funday餐厅",
      "about-us-p-welcome": "自23年前以来, Filip Stevanovic 和 Negoje 的旗舰餐厅一直保持着三星米其林的荣誉, 提供优雅的现代中餐, 使用最优质的季节性食材, 并结合经典和现代技术。",
      "about-us-h2-team": "我们的团队",
      "about-us-p-mihajlo": "Mihajlo是一位塞尔维亚厨师, 曾在欧洲一些最好的餐厅工作过。他能烹饪任何您想要的菜肴, 但他最拿手的是花生酱配面包。",
      "about-us-p-adrian": "Adrian对烹饪的热情从小就被激发, 因为他在家乡中国上海的厨房里与奶奶一起度过了童年。",
      "about-us-p-jelica": "Jelica是一位糕点师, 热衷于创造独特且“与众不同”的甜点。她毕业于美国烹饪学院。",
      "about-us-p-marija": "Marija在整个意大利和伦敦的米其林星级餐厅拥有丰富的经验, 她的职业生涯始于2000年代在戈登·拉姆齐餐厅。",
      "about-us-h2-location": "位置",
      "about-us-span-telephone": "电话: +86 13126969"
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