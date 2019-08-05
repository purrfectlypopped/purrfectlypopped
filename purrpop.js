let ps = {
    Caramel: 'caramel',
    Spicy: 'spicy',
    Sweet: 'sweet',
    Savory: 'savory',
    Cheese: 'cheese',
    Nuts: 'nuts',
    GF: 'gf'
}

let init = () => {
    let flavors = [
        new Flavor('Honey Butter Sea Salt', 'honeybutter.png', [ps.Sweet]),
        new Flavor('Bourbon Caramel Corn', 'bourboncarmel.png', [ps.Caramel]),
        new Flavor('Cincinnati Chili & Cheese', 'cincychilinew.png'), 
        new Flavor('Browned Butter & Rosemary', 'rosemary.png'),
        new Flavor('Triple Cheese Threat', 'cheese.png', [ps.Cheese]),
        new Flavor('Birthday Cake', 'birthdaycake.png', [ps.Sweet]),
        new Flavor('Bock Caramel Corn', 'bockcarmel.png', [ps.Caramel]),
        new Flavor('Buffalo & Blue Cheese', 'buffalo.png', [ps.Spicy]),
        new Flavor('Buffalo Ranch', 'buffaloranch.png', [ps.Spicy]),
        new Flavor('Caramel Apple', 'carmelapplepurple.png', [ps.Caramel]),
        new Flavor('Churro', 'churro.png', [ps.Sweet]),
        new Flavor('Coffee Caramel Corn', 'coffeecaramel.png', [ps.Caramel]),
        new Flavor('Cotton Candy', 'cottoncandy.png', [ps.Sweet]),
        new Flavor('Maple Pumpkin Spice', 'fall logo.png', [ps.Sweet]),
        new Flavor('French Toast', 'frenchtoastberet2.png', [ps.Sweet]),
        new Flavor('Garlic Cheesy Bread', 'garliccheesyflag.png'),
        new Flavor('Ipa Caramel Corn', 'ipacaramel.png', [ps.Caramel]),
        new Flavor('Irish Stout Caramel Corn', 'irishstout.png', [ps.Caramel]),
        new Flavor('Jalapeno Honey Butter Sea Salt', 'jalapenohoney.png', [ps.Sweet, ps.Spicy]),
        new Flavor('Kettle Corn', 'kettlecorn.png', [ps.Sweet]),
        new Flavor('Lavender Hone Butter Sea Salt', 'lavenderhoneybutter.png', [ps.Sweet]),
        new Flavor('Mint Cookies & Cream', 'mintcookiesncream.png', [ps.Sweet]),
        new Flavor('Parmesan & Black Pepper', 'parmpepper.png', []),
        new Flavor('Peanut Butter Caramel Corn', 'pb_caramel.png', [ps.Caramel, ps.Nuts]),
        new Flavor('Chocolate Peanut Butter Caramel Corn', 'pb_choc_caramel.png', [ps.Caramel, ps.Nuts]),
        new Flavor('Pizza', 'pizza.png', []),
        new Flavor('Red Velvet', 'red_velvet.png', [ps.Sweet]),
        new Flavor('Rye Whiskey Caramel Corn', 'ryecaramel.png', [ps.Caramel]),
        new Flavor('Salted Pretzel Caramel Corn', 'saltedcaramelpretzbase.png', [ps.Caramel]),
        new Flavor('Srirach Lime', 'srirachaflame2.png', [ps.Spicy]),
        new Flavor('Strawberry Lemonade', 'strawberrylemonade.png', [ps.Sweet]),
    ]
    
    let flavorContainer = document.getElementById('flavors');
    flavors.forEach(flavor => {
        flavorContainer.appendChild(flavor.generateElement());
    });
    
}

class Flavor {
    name;
    image;
    properties;

    constructor(name, image, properties = []) {
        this.name = name;
        this.image = image;
        this.properties = properties;
    }

    generateElement() {
        let element = document.createElement('div');
        element.classList.add('flavor-container');
        element.innerHTML = `
            <div>
                <img src="./images/flavors/${this.image}" />
            </div>
            <div class="label">${this.name}</div>
        `
        return element;
    }
}

init();