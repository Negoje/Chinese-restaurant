size_translations = {
    "en": {
        "Small": "Small",
        "Large": "Large"
    },
    "se":{
        "Small": "Mala",
        "Large": "Velika"
    },
    "ch": {
        "Small": "小",
        "Large": "大"
    }
}

remove_item_translations = {
    "en": "Remove item",
    "se": "Izbacite stavku",
    "ch": "删除项目"
}


function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));

    let currentLanguage = JSON.parse(localStorage.getItem('language')) || 'en';

    if (cart == null) {
        return;
    }
    for (let i = 0; i < cart.length; i++) {
        let cart_item = cart[i];
        let element = document.createElement('tr');
        element.innerHTML = `
            <td>${cart_item.name}</td>
            <td>${size_translations[currentLanguage][cart_item.size]}</td>
            <td>
                <button type="button" class="btn orange-buttons" onclick="reduce(${i})">-</button>
                <span id="quantity-${i}">${cart_item.quantity}</span>
                <button type="button" class="btn orange-buttons" onclick="add(${i})">+</button>
            </td>
            <td>
            <button type="button" class="btn orange-buttons" onclick="removeItem(${i})">` + remove_item_translations[currentLanguage] +`</button>
            </td>
            <td>${cart_item.price}</td>
        `;
        document.getElementById('cart-items').appendChild(element);
    }

    updateTotalPrice();
}

function loadOrders() {
    
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (orders == null) {
        return;
    }
    for (let i = 0; i < orders.length; i++) 
    {
        let order = orders[i];

        let orderDescription = '';

        for(let j = 0 ; j < order.length; j++) {

            let orderItem = order[j];

            orderItem["size"] = size_translations[currentLanguage][orderItem["size"]];

            console.log(orderItem["code"]);

            let name = meal_translations[currentLanguage][orderItem["code"]]["name"];

            orderDescription += `${orderItem["quantity"]} x ${orderItem["size"]} ${name}`;

            if(j < order.length - 1){
                orderDescription += '<br>';
            }
        }
        
        let element = document.createElement('tr');
        element.innerHTML = `
            <td>${i + 1}</td>
            <td>${orderDescription}</td>
        `;
        document.getElementById('order-items').appendChild(element);
    }
}

window.addEventListener('load', function() {

    if (window.location.pathname.endsWith('my_profile.html')) {
        loadCart();
        loadOrders();
    }
});

function add(id){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let item = cart[id];
    if (item) {
        item.quantity++;
        document.getElementById(`quantity-${id}`).textContent = item.quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateTotalPrice();
}

function reduce(id){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let item = cart[id];
    if (item && item.quantity > 1) { 
        item.quantity--;
        document.getElementById(`quantity-${id}`).textContent = item.quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateTotalPrice();
}

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
    
}

function order(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null || cart.length == 0) {
        return;
    }
    let newOrder = [];
    for(let i = 0; i < cart.length; i++){
        let item = cart[i];

        let orderItem = {
            code: item.meal_code,
            size: item.size,
            quantity: item.quantity
        };

        newOrder.push(orderItem);

    }

    let orders;
    if (localStorage.getItem('orders') == null) {
        orders = [];
    } else {
        orders = JSON.parse(localStorage.getItem('orders'));
    }

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    location.reload();
}


function updateTotalPrice(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        return;
    }
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        let item = cart[i];
        let price = parseFloat(item.price.substring(1));
        total += price * item.quantity;
    }
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}