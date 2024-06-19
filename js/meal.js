function rateStar(star){
    for (let i = 1; i <= 5; i++) {
        let starElement = document.getElementById('star_' + i);
        if (i <= parseInt(star)) {
            starElement.classList.add('star-checked');
        } else {
            starElement.classList.remove('star-checked');
        }
    }
}

function loadMealPageElements() {
    which_meal = JSON.parse(localStorage.getItem('meal'));
    meal_details = JSON.parse(localStorage.getItem(which_meal));

    document.getElementById('meal-name').innerHTML = meal_details.name;
    document.getElementById('meal-image').src = meal_details.image;
    document.getElementById('meal-description').innerHTML = meal_details.description;
    document.getElementById('meal-price-small').innerHTML = meal_details.price_small;
    document.getElementById('meal-price-large').innerHTML = meal_details.price_large;
    document.getElementById('meal-rating').innerHTML = meal_details.rating;
}

window.addEventListener('load', function() {

    if (window.location.pathname.endsWith('meal.html')) {
        loadMealPageElements();
    }
});

function rateMeal() {
    let rating = 0;
    for (let i = 1; i <= 5; i++) {
        let starElement = document.getElementById('star_' + i);
        if (starElement.classList.contains('star-checked')) {
            rating = i;
        }
    }
    which_meal = JSON.parse(localStorage.getItem('meal'));
    meal_details = JSON.parse(localStorage.getItem(which_meal));
    let rating_count = parseInt(meal_details.rating_count);
    let current_rating = parseFloat(meal_details.rating);

    let new_rating = (current_rating * rating_count + rating) / (rating_count + 1);
    meal_details.rating = new_rating;
    meal_details.rating_count = rating_count + 1;
    localStorage.setItem(which_meal, JSON.stringify(meal_details));
    document.getElementById('meal-rating').innerHTML = meal_details.rating + ' ';
}

function add(size){
    let element = 'meal-quantity-' + size;
    let quantity = parseInt(document.getElementById('meal-quantity-' + size).textContent);
    quantity++;
    document.getElementById('meal-quantity-' + size).textContent = quantity;
}

function reduce(size){
    let quantity = parseInt(document.getElementById('meal-quantity-' + size).textContent);
    if (quantity > 0) {
        quantity--;
    }
    document.getElementById('meal-quantity-' + size).textContent = quantity;
}

function addToCart(size){
    let quantity = parseInt(document.getElementById('meal-quantity-' + size).textContent);
    if (quantity > 0) {
        let which_meal = JSON.parse(localStorage.getItem('meal'));
        let meal_details = JSON.parse(localStorage.getItem(which_meal));
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let cart = JSON.parse(localStorage.getItem('cart'));
        let foundItem = cart.find(item => item.name == meal_details.name && item.size == size);
        if (foundItem != null) {
            foundItem.quantity += quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else
        {
            let upper_size = size.charAt(0).toUpperCase() + size.slice(1);
            let cart_item = {
                "name": meal_details.name,
                "size": upper_size,
                "quantity": quantity,
                "price": meal_details['price_' + size]
            };
            cart.push(cart_item);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}