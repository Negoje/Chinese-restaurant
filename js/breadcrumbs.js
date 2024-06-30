function displayBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    let path = JSON.parse(localStorage.getItem('navigationPath')) || [];
    let currentLanguage = JSON.parse(localStorage.getItem('language')) || 'en';

    // Start with a link to the home page

    let breadcrumbs

    switch(currentLanguage){
        case 'en':
            breadcrumbs = '<a href="index.html">Home</a>';
            break;
        case 'se':
            breadcrumbs = '<a href="index.html">Pocetna</a>';
            break;
        case 'ch':
            breadcrumbs = '<a href="index.html">主页</a>';
            break;
    }

    mealNames = ["egg-roll", "boiled-dumplings", "peanut-butter", "kung-pao", "szechuan-pork", "rice", "fried-ice-cream", "fried-fruit", "batman-cake", "beer", "coca-cola", "water"];

    my_translations = {
        en: 
          {
            "Menu-starters" : "Menu-starters",
            "Menu-main-dishes" : "Menu-main-dishes",
            "Menu-deserts" : "Menu-deserts",
            "Menu-drinks" : "Menu-drinks",
            "About us": "About us",
            "Gallery": "Gallery",
            "My Profile": "My Profile",
            "egg-roll": "Egg Roll",
            "boiled-dumplings": "Boiled Dumplings",
            "peanut-butter": "Peanut Butter",
            "kung-pao": "Kung Pao",
            "szechuan-pork": "Szechuan Pork",
            "rice": "Rice",
            "fried-ice-cream": "Fried Ice Cream",
            "fried-fruit": "Fried Fruit",
            "batman-cake": "Batman Cake",
            "beer": "Beer",
            "coca-cola": "Coca Cola",
            "water": "Water"
          },
        se:
          {
            "Menu-starters" : "Meni-predjela",
            "Menu-main-dishes" : "Meni-glavna-jela",
            "Menu-deserts" : "Meni-deserti",
            "Menu-drinks" : "Meni-pica",
            "About us": "O nama",
            "Gallery": "Galerija",
            "My Profile": "Moj Profil",
            "egg-roll": "Prolecne rolnice",
            "boiled-dumplings": "Kuvane knedle",
            "peanut-butter": "Kikiriki puter",
            "kung-pao": "Kung Pao Piletina",
            "szechuan-pork": "Secuanska svinjetina",
            "rice": "2KG Pirinca",
            "fried-ice-cream": "Pohovani sladoled",
            "fried-fruit": "Pohovano voce",
            "batman-cake": "Kineska Batman torta",
            "beer": "Pivo",
            "coca-cola": "Koka Kola",
            "water": "Voda"
        },
        ch:
          {
            "Menu-starters" : "菜单-开胃菜",
            "Menu-main-dishes" : "菜单-主菜",
            "Menu-deserts" : "菜单-甜点",
            "Menu-drinks" : "菜单-饮料",
            "About us": "关于我们",
            "Gallery": "画廊",
            "My Profile": "我的资料",
            "egg-roll": "蛋卷",
            "boiled-dumplings": "水饺",
            "peanut-butter": "花生酱",
            "kung-pao": "宫保鸡丁",
            "szechuan-pork": "四川猪肉",
            "rice": "2公斤大米",
            "fried-ice-cream": "炸冰淇淋",
            "fried-fruit": "炸水果",
            "batman-cake": "中国蝙蝠侠蛋糕",
            "beer": "啤酒",
            "coca-cola": "可口可乐",
            "water": "水"
        }
    };


    // Append each page in the path to the breadcrumbs
    path.forEach((page, index) => {
        // For the last item, don't make it a link
        if (index === path.length - 1) {
            breadcrumbs += ` > ${my_translations[currentLanguage][page.name]}`;
            // breadcrumbs += ` > ${page.name}`;
        } else {
            // Placeholder for actual link generation
            let breadcrumbName = page.name;

            if(page.url.toLowerCase().includes('menu')){
                breadcrumbName = 'Menu';
            }

            breadcrumbs += ` > <a href="${page.url}" onclick="setNavigationPath('${breadcrumbName}')">${my_translations[currentLanguage][page.name]}</a>`;
            // breadcrumbs += ` > <a href="${page.url}" onclick="setNavigationPath('${breadcrumbName}')">${page.name}</a>`;
        }
    });

    // Update the breadcrumbs container
    breadcrumbsContainer.innerHTML = breadcrumbs;
}

function setNavigationPath(pageName, url = null) {
    let path = [];

    slides = ["starters", "main-dishes", "deserts", "drinks"]

    if(pageName === 'Menu'){
        let slide = localStorage.getItem('currentSlide') || 0;
        pageName = pageName + '-' + slides[slide];
    }

    if(url == null){
        page = {
            name: pageName,
            url: event.currentTarget.href
        }
    }
    else{
        page = {
            name: pageName,
            url: url
        }
    }

    path.push(page);

    localStorage.setItem('navigationPath', JSON.stringify(path));

    

    if(url == null){
        event.preventDefault();
        window.location.href = event.currentTarget.href;
    }else{
        window.location.href = url;
    }

}

function updateNavigationPath(pageName, url) {
    let path = JSON.parse(localStorage.getItem('navigationPath')) || [];

    // Add the new page to the path

    page = {
        name: pageName,
        url: url
    }

    path.push(page);

    localStorage.setItem('navigationPath', JSON.stringify(path));

    // Navigate to the new page
    window.location.href = url;
}