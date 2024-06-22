function displayBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    let path = JSON.parse(localStorage.getItem('navigationPath')) || [];

    // Start with a link to the home page
    let breadcrumbs = '<a href="index.html">Home</a>';

    // Append each page in the path to the breadcrumbs
    path.forEach((page, index) => {
        // For the last item, don't make it a link
        if (index === path.length - 1) {
            breadcrumbs += ` > ${page.name}`;
        } else {
            // Placeholder for actual link generation
            let breadcrumbName = page.name;

            if(page.name.toLowerCase().includes('menu')){
                breadcrumbName = 'Menu';
            }

            breadcrumbs += ` > <a href="${page.url}" onclick="setNavigationPath('${breadcrumbName}')">${page.name}</a>`;
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