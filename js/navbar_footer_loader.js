window.onload = function() 
{

    navItems = []

    let currentLanguage = JSON.parse(localStorage.getItem('language')) || 'en';

    switch (currentLanguage) {
        case 'en':
            navItems = ['Home', 'About us', 'Menu', 'Gallery', 'My Profile', 'Contact us', 'Language'];
            break;
        case 'se':
            navItems = ['Početna', 'O nama', 'Meni', 'Galerija', 'Moj profil', 'Kontaktirajte nas', 'Jezik'];
            break;
        case 'ch':
            navItems = ['主页', '关于我们', '菜单', '画廊', '我的个人资料', '联系我们', '语言'];
            break;
    }

    document.getElementById('header').innerHTML = 
    `<div id="site-header">
        <header id="header" class="header-block-top fixed-menu">
            <div class="container">
                <div class="row">
                    <div class="main-menu">
                        <nav class="navbar navbar-default" id="mainNav">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <div class="logo">
                                    <a class="navbar-brand js-scroll-trigger logo-header" href="index.html">
                                        <img src="images/mylogo.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="active"><a href="index.html">` + navItems[0] + `</a></li>
                                    <li><a href="about.html" onclick="setNavigationPath('About us')">` + navItems[1] + `</a></li>
                                    <li><a href="menu.html" onclick="setNavigationPath('Menu')">` + navItems[2] + `</a></li>
                                    <li><a href="gallery.html" onclick="setNavigationPath('Gallery')">` + navItems[3] + `</a></li>
                                    <li><a href="my_profile.html" onclick="setNavigationPath('My Profile')">` + navItems[4] + `</a></li>
                                    <li><a href="#stub-footer">` + navItems[5] + `</a></li>
                                    <!-- Language Dropdown Button -->
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            ` + navItems[6] + `<span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li onclick="changeLanguage('se')"><a href="#"><img src="images/serbian-flag.jpg" alt="Serbian"> Serbian</a></li>
                                            <li onclick="changeLanguage('en')"><a href="#"><img src="images/english-flag.png" alt="English"> English</a></li>
                                            <li onclick="changeLanguage('ch')"><a href="#"><img src="images/chinese-flag.png" alt="Chinese"> Chinese</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>`;

    


    const currentPage = window.location.pathname.split('/').pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('#navbar li a');

    console.log(navLinks);
    // Loop through each link
    navLinks.forEach(link => {
        // Check if link href matches current page URL
        console.log(link.getAttribute('href'))
        console.log(currentPage)
        if (link.getAttribute('href') === currentPage) {
            // Add 'active' class to parent <li>
            link.parentElement.classList.add('active');
        } else {
            // Optionally, remove 'active' class if you have it set by default in the HTML
            link.parentElement.classList.remove('active');
        }
    });


    footerTranlsations = []

    switch (currentLanguage) {
        case 'en':
            footerTranlsations = ["Contact us", "Opening hours", "Monday - Friday", "Saturday", "Sunday", "Copyright © 2024 Filip Stevanovic, Filip Negojevic Software Engineering Department, Faculty of Electrical Engineering, University of Belgrade"]
            break;
        case 'se':
            footerTranlsations = ["Kontaktirajte nas", "Radno vreme", "Ponedeljak - Petak", "Subota", "Nedelja", "Autorska prava © 2024 Filip Stevanovic, Filip Negojevic Odsek za softversko inzenjerstvo Elektrotehnickog fakulteta Univerziteta u Beogradu"]
            break;

        case 'ch':
            footerTranlsations = ["联系我们", "营业时间", "星期一 - 星期五", "星期六", "星期日", "版权所有 © 2024 Filip Stevanovic, Filip Negojevic 软件工程系，贝尔格莱德大学电气工程学院"]
            break;
    }


    document.getElementById('stub-footer').innerHTML = 
    `<div id="footer" class="footer-main">
        <!-- end footer-news -->
        <div class="footer-box pad-top-70">
            <div class="container">
                <div class="row">
                    <div class="footer-in-main">
                        <div class="footer-logo">
                            <div class="text-center">
                                <img src="images/mylogo.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="footer-box-c">
                                <h3>` + footerTranlsations[0] + `</h3>
                                <p>
                                    <i class="fa fa-map-signs" aria-hidden="true"></i>
                                    <span>China, Shanghai, Jing'An, 3699, Gonghexin Rd, 3699临号1层A栋 邮政编码: 200435</span>
                                </p>
                                <p>
                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                    <span>
									+86 13126969
								</span>
                                </p>
                                <p>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <span><a href="#">support@dzekicen.com</a></span>
                                </p>
                            </div>
                            <!-- end footer-box-c -->
                        </div>
                        <!-- end col -->
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="footer-box-d">
                                <h3>` + footerTranlsations[1] + `</h3>

                                <ul>
                                    <li>
                                        <p> ` + footerTranlsations[2] + `</p>
                                        <span> 11:00 AM - 11:00 PM</span>
                                    </li>
                                    <li>
                                        <p> ` + footerTranlsations[3] + ` </p>
                                        <span>  1:00 PM - 1:00 AM</span>
                                    </li>
                                    <li>
                                        <p> ` + footerTranlsations[4] + `</p>
                                        <span>  1:00 PM - 11:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <!-- end footer-box-d -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end footer-in-main -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
            <div id="copyright" class="copyright-main">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h6 class="copy-title"> ` + footerTranlsations[5] + ` </h6>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
                <!-- end container -->
            </div>
            <!-- end copyright-main -->
        </div>
        <!-- end footer-box -->
    </div>
    <!-- end footer-main -->`;

    if (currentPage === 'menu.html' || currentPage === 'index.html') {
        // alert("initAllMeals");
        initAllMeals();

        if (currentPage === 'index.html') {
            // alert("initMenu");
            initTop3Meals();
        }

    }

    if (localStorage.getItem('language') === null) {
        localStorage.setItem('language', JSON.stringify('en'));
    }

    if (currentPage !== 'index.html') {
        displayBreadcrumbs();
    }

    
}

function changeLanguage(language) {
    localStorage.setItem('language', JSON.stringify(language));
    location.reload();
}