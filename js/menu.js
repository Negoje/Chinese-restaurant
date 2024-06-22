function redirectToMeal(which_meal)
{
    localStorage.setItem("meal", JSON.stringify(which_meal));
    
    window.location.href = "meal.html";
}

mealNames = ["egg-roll", "boiled-dumplings", "peanut-butter", "kung-pao", "szechuan-pork", "rice", "fried-ice-cream", "fried-fruit", "batman-cake", "beer", "coca-cola", "water"];

allMeals = [];

function initAllMeals(){

    // alert("initAllMeals");

    for(let i = 0; i < mealNames.length; i++){

        which_meal = mealNames[i];

        if (localStorage.getItem(which_meal) == null){
            switch(which_meal){
                case "egg-roll":
                    localStorage.setItem("egg-roll", JSON.stringify({
                        "name": "Egg rolls",
                        "redirect": "egg-roll",
                        "image": "images/egg-roll.jpg",
                        "category": "starters",
                        "description": "Egg rolls are fried, savory rolls, filled with cabbage, chopped Chinese roast pork.",
                        "price_small": "$5.00",
                        "price_large": "$8.50",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "boiled-dumplings":
                    localStorage.setItem("boiled-dumplings", JSON.stringify({
                        "name": "Boiled Dumplings",
                        "redirect": "boiled-dumplings",
                        "image": "images/boiled-dumplings.jpg",
                        "category": "starters",
                        "description": "Boiled dumplings are a delicious, traditional Chinese dish made with a simple dough and filled with a mixture of pork and vegetables.",
                        "price_small": "$6.00",
                        "price_large": "$10.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "peanut-butter":
                    localStorage.setItem("peanut-butter", JSON.stringify({
                        "name": "Peanut Butter",
                        "image": "images/peanut-butter.jpg",
                        "redirect": "peanut-butter",
                        "category": "starters",
                        "description": "Peanut butter is a food paste or spread made from ground, dry-roasted peanuts.",
                        "price_small": "$6.50",
                        "price_large": "$11.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "kung-pao":
                    localStorage.setItem("kung-pao", JSON.stringify({
                        "name": "Kung Pao Chicken",
                        "redirect": "kung-pao",
                        "image": "images/kung-pao.jpg",
                        "category": "main-dishes",
                        "description": "Chicken stir-fried with peanuts, vegetables, and chili peppers.",
                        "price_small": "$9.00",
                        "price_large": "$14.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "szechuan-pork":
                    localStorage.setItem("szechuan-pork", JSON.stringify({
                        "name": "Szechuan Pork",
                        "redirect": "szechuan-pork",
                        "image": "images/szechuan-pork.jpg",
                        "category": "main-dishes",
                        "description": "Pork in spicy Szechuan sauce stirred with eggplant and chili peppers.",
                        "price_small": "$10.00",
                        "price_large": "$16.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "rice":
                    localStorage.setItem("rice", JSON.stringify({
                        "name": "2KG of Rice",
                        "redirect": "rice",
                        "image": "images/rice.jpg",
                        "category": "main-dishes",
                        "description": "Just a lot of rice!!! (THERE IS NO SMALL PORTION)",
                        "price_small": "$30.00",
                        "price_large": "$30.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "fried-ice-cream":
                    localStorage.setItem("fried-ice-cream", JSON.stringify({
                        "name": "Fried Ice Cream",
                        "redirect": "fried-ice-cream",
                        "image": "images/fried-ice-cream.jpg",
                        "category": "deserts",
                        "description": "Our special fried ice cream. It comes in different flavors. (Vanilla, Chocolate, Strawberry, and the most special one PEANUT BUTTER)",
                        "price_small": "$8.00",
                        "price_large": "$12.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "fried-fruit":
                    localStorage.setItem("fried-fruit", JSON.stringify({
                        "name": "Fried Fruit",
                        "redirect": "fried-fruit",
                        "image": "images/fried-fruit.jpg",
                        "category": "deserts",
                        "description": "Fried fruit with syrup and toppings. (Apple, Banana, Strawberry, and Pineapple)",
                        "price_small": "$7.00",
                        "price_large": "$10.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "batman-cake":
                    localStorage.setItem("batman-cake", JSON.stringify({
                        "name": "The Chinese Batman Cake",
                        "redirect": "batman-cake",
                        "image": "images/batman-cake.jpg",
                        "category": "deserts",
                        "description": "Original Wuhan Batman cake! (It's a chocolate cake (TRUST US 100% chocolate))",
                        "price_small": "$9.50",
                        "price_large": "$15.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "beer":
                    localStorage.setItem("beer", JSON.stringify({
                        "name": "Beer",
                        "redirect": "beer",
                        "image": "images/beer.jpg",
                        "category": "drinks",
                        "description": "Beer! (We have a lot of brands, just ask for your favorite one)",
                        "price_small": "$3.00",
                        "price_large": "$4.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "coca-cola":
                    localStorage.setItem("coca-cola", JSON.stringify({
                        "name": "Coca Cola",
                        "redirect": "coca-cola",
                        "image": "images/coca-cola.jpg",
                        "category": "drinks",
                        "description": "Coca Cola!",
                        "price_small": "$2.00",
                        "price_large": "$2.50",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
                case "water":
                    localStorage.setItem("water", JSON.stringify({
                        "name": "Water",
                        "redirect": "water",
                        "image": "images/water.jpg",
                        "category": "drinks",
                        "description": "Water approved by our special water taster. (Min Yao approved)",
                        "price_small": "$1.50",
                        "price_large": "$3.00",
                        "rating": "0",
                        "rating_count": "0"
                    }));
                    break;
            }
        }

        allMeals.push(JSON.parse(localStorage.getItem(which_meal)));

    }

}

categoryNames = ["starters", "main-dishes", "deserts", "drinks"];

function sortMealsByName(){
    categoryMeals = [];
    currentCategory = categoryNames[localStorage.getItem("currentSlide")];
    
    for(let i = 0; i < allMeals.length; i++){
        if (allMeals[i].category == currentCategory){
            categoryMeals.push(allMeals[i]);
        }
    }

    categoryMeals.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });

    displayMeals(currentCategory, categoryMeals);

}

function sortMealsByPrice(){
    categoryMeals = [];
    currentCategory = categoryNames[localStorage.getItem("currentSlide")];
    
    for(let i = 0; i < allMeals.length; i++){
        if (allMeals[i].category == currentCategory){
            categoryMeals.push(allMeals[i]);
        }
    }

    categoryMeals.sort(function(a, b){
        return parseFloat(a.price_large.substring(1)) - parseFloat(b.price_large.substring(1));
    });

    displayMeals(currentCategory, categoryMeals);


}


function filterItems() {
    const nameFilter = document.getElementById('filterByName').value.toLowerCase();
    const minPriceFilter = parseFloat(document.getElementById('minPrice').value);
    const maxPriceFilter = parseFloat(document.getElementById('maxPrice').value);

    const minPriceValid = !isNaN(minPriceFilter);
    const maxPriceValid = !isNaN(maxPriceFilter);

    if(minPriceValid && maxPriceValid &&  minPriceFilter > maxPriceFilter){
        alert("The minimum price must be less than the maximum price");
        return;
    }

    categoryMeals = [];
    currentCategory = categoryNames[localStorage.getItem("currentSlide")];
    
    for(let i = 0; i < allMeals.length; i++){
        if (allMeals[i].category == currentCategory){
            categoryMeals.push(allMeals[i]);
        }
    }

    let filteredItems = categoryMeals;

    // Filter by name if nameFilter is not empty
    if (nameFilter) {
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(nameFilter));
    }

    // Filter by price range
    filteredItems = filteredItems.filter(item => {
        const itemPrice = parseFloat(item.price_large.substring(1))
        return (!minPriceValid || itemPrice >= minPriceFilter) && (!maxPriceValid || itemPrice <= maxPriceFilter);
    });

    // Now, you can display these filteredItems on your page
    displayMeals(currentCategory ,filteredItems); // Assume this function handles displaying items on the page
}


function displayMeals(category, meals){

    let div_id = category + "-menu";

    let menu = document.getElementById(div_id);
    menu.innerHTML = "";

    for(let i = 0; i < meals.length; i++){

        let meal = meals[i];

        menu.innerHTML += `
            <a href="javascript:void(0);">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 " >
                    <div class="offer-item" onclick="redirectToMeal('` + meal.redirect + `')">
                        <img src="` + meal.image + `" alt="" class="img-responsive">
                        <div>
                            <h3>` + meal.name + `</h3>
                            <p>
                                ` + meal.description + `
                            </p>
                        </div>
                        <span class="offer-price">` + meal.price_large + `</span>
                    </div>
                </div>
            </a>`
        

    }

}









//OVO SA INDEX STRANICE
function sortAllMelasByRating(){

    allMeals.sort(function(a, b){
        return parseFloat(b.rating) - parseFloat(a.rating);
    });

}


function initTop3Meals(){

    div = document.getElementById('owl-demo');

    sortAllMelasByRating();

    for(let i = 0; i < 3; i++){

        meal = allMeals[i];

        div.innerHTML += `
        <div class="item item-type-zoom">
            <a href="#" class="item-hover">
                <div class="item-info">
                    <div class="headline">
                        ` + (i + 1) + `:` + meal.name + `<br>Average rating:` + meal.rating + `
                        <div class="line"></div>
                        <div class="dit-line">` + meal.description + `</div>
                    </div>
                </div>
            </a>
            <div class="item-img">
                <img src="` + meal.image + `" alt="sp-menu">
            </div>
        </div>`

    }

    $(document).ready(function() {
        $("#owl-demo").owlCarousel({
            //autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,2]
       
        });
      });

}




