function redirectToMeal(which_meal)
{
    localStorage.setItem("meal", JSON.stringify(which_meal));

    if (localStorage.getItem(which_meal) == null)
    {
        switch(which_meal){
            case "egg-roll":
                localStorage.setItem("egg-roll", JSON.stringify({
                    "name": "Egg rolls",
                    "image": "images/egg-roll.jpg",
                    "description": "Egg rolls are fried, savory rolls, filled with cabbage, chopped Chinese roast pork.",
                    "price_small": "$5.00",
                    "price_large": "$9.00",
                    "rating": "0",
                    "rating_count": "0"
                }));
                break;
            case "boiled-dumplings":
                localStorage.setItem("boiled-dumplings", JSON.stringify({
                    "name": "Boiled Dumplings",
                    "image": "images/boiled-dumplings.jpg",
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
                    "description": "Peanut butter is a food paste or spread made from ground, dry-roasted peanuts.",
                    "price_small": "$3.00",
                    "price_large": "$6.00",
                    "rating": "0",
                    "rating_count": "0"
                }));
                break;
        }
    }
    
    window.location.href = "meal.html";
}