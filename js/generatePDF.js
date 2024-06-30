// Assuming you have an array of menu items
const menuItems = [
    {
        "name": "Egg rolls",
        "category": "Starters",
        "description": "Egg rolls are fried, savory rolls, filled with cabbage, chopped Chinese roast pork.",
        "price_small": "$5.00",
        "price_large": "$8.50"
    },
    {
        "name": "Boiled Dumplings",
        "category": "Starters",
        "description": "Boiled dumplings are a delicious, traditional Chinese dish made with a simple dough and filled with a mixture of pork and vegetables.",
        "price_small": "$6.00",
        "price_large": "$10.00"
    },
    {
        "name": "Peanut Butter",
        "category": "Starters",
        "description": "Peanut butter is a food paste or spread made from ground, dry-roasted peanuts.",
        "price_small": "$6.50",
        "price_large": "$11.00"
    },
    {
        "name": "Kung Pao Chicken",
        "category": "Main Dishes",
        "description": "Chicken stir-fried with peanuts, vegetables, and chili peppers.",
        "price_small": "$9.00",
        "price_large": "$14.00"
    },
    {
        "name": "Szechuan Pork",
        "category": "Main Dishes",
        "description": "Pork in spicy Szechuan sauce stirred with eggplant and chili peppers.",
        "price_small": "$10.00",
        "price_large": "$16.00"
    },
    {
        "name": "2KG of Rice",
        "category": "Main Dishes",
        "description": "Just a lot of rice!!! (THERE IS NO SMALL PORTION)",
        "price_small": "$30.00",
        "price_large": "$30.00"
    },
    {
        "name": "Fried Ice Cream",
        "category": "Desserts",
        "description": "Our special fried ice cream. It comes in different flavors. (Vanilla, Chocolate, Strawberry, and the most special one PEANUT BUTTER)",
        "price_small": "$8.00",
        "price_large": "$12.00"
    },
    {
        "name": "Fried Fruit",
        "category": "Desserts",
        "description": "Fried fruit with syrup and toppings. (Apple, Banana, Strawberry, and Pineapple)",
        "price_small": "$7.00",
        "price_large": "$10.00"
    },
    {
        "name": "The Chinese Batman Cake",
        "category": "Desserts",
        "description": "Original Wuhan Batman cake! (It's a chocolate cake (TRUST US 100% chocolate))",
        "price_small": "$9.50",
        "price_large": "$15.00"
    },
    {
        "name": "Beer",
        "category": "Drinks",
        "description": "Beer! (We have a lot of brands, just ask for your favorite one)",
        "price_small": "$3.00",
        "price_large": "$4.00"
    },
    {
        "name": "Coca Cola",
        "category": "Drinks",
        "description": "Coca Cola!",
        "price_small": "$2.00",
        "price_large": "$2.50"
    },
    {
        "name": "Water",
        "category": "Drinks",
        "description": "Water approved by our special water taster. (Min Yao approved)",
        "price_small": "$1.50",
        "price_large": "$3.00"
    }
]

// Function to generate PDF
function generateMenuPDF(menuItems) {
    const categories = ["Starters", "Main Dishes", "Desserts", "Drinks"];
    const groupedItems = {};

    // Assuming `menuItems` is an array of items where each item has a `category` field
    menuItems.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });

    const doc = new jspdf.jsPDF();
    let y = 10; // Initial vertical position
    const pageHeight = doc.internal.pageSize.height;
    const bottomMargin = 10;
    const maxWidth = 190;

    categories.forEach(category => {
        // Check if the category exists in the grouped items
        if (groupedItems[category]) {
            // Add category header
            if (y + 6 > pageHeight - bottomMargin) {
                doc.addPage();
                y = 10;
            }
            doc.setFontSize(14); // Larger font size for category headers
            doc.text(category, 10, y);
            y += 10; // Space after the header
            doc.setFontSize(10); // Reset font size for items

            groupedItems[category].forEach(item => {
                // Item name
                if (y + 6 > pageHeight - bottomMargin) {
                    doc.addPage();
                    y = 10;
                }
                doc.text(item.name, 10, y);
                y += 6;

                // Item description
                const lines = doc.splitTextToSize(item.description, maxWidth);
                lines.forEach(line => {
                    if (y + 6 > pageHeight - bottomMargin) {
                        doc.addPage();
                        y = 10;
                    }
                    doc.text(line, 10, y);
                    y += 6;
                });

                // Item price
                if (y + 6 > pageHeight - bottomMargin) {
                    doc.addPage();
                    y = 10;
                }
                y += 6; // Space before price
                doc.text(`Small: ${item.price_small}, Large: ${item.price_large}`, 10, y);
                y += 10; // Space after price, before next item
            });
        }
    });

    doc.save("menu.pdf");
}

// Call the function with your menu items
document.getElementById('generate-pdf').addEventListener('click', () => {
    generateMenuPDF(menuItems);
});