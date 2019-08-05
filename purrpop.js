let ps = {
    Caramel: 'caramel',
    Spicy: 'spicy',
    Sweet: 'sweet',
    Savory: 'savory',
    Cheese: 'cheese',
    Nuts: 'nuts',
    GF: 'gf'
}

let flavors = [];

let init = () => {
    flavors = [
        new Flavor('Honey Butter Sea Salt', 'honeybutter.png', [ps.Sweet]),
        new Flavor('Bourbon Caramel Corn', 'bourboncarmel.png', [ps.Caramel]),
        new Flavor('Cincinnati Chili & Cheese', 'cincychilinew.png', ps.Savory), 
        new Flavor('Browned Butter & Rosemary', 'rosemary.png', ps.Savory),
        new Flavor('Triple Cheese Threat', 'cheese.png', [ps.Cheese]),
        new Flavor('Birthday Cake', 'birthdaycake.png', [ps.Sweet]),
        new Flavor('Bock Caramel Corn', 'bockcarmel.png', [ps.Caramel]),
        new Flavor('Buffalo & Blue Cheese', 'buffalo.png', [ps.Spicy, ps.Savory]),
        new Flavor('Buffalo Ranch', 'buffaloranch.png', [ps.Spicy]),
        new Flavor('Caramel Apple', 'carmelapplepurple.png', [ps.Caramel]),
        new Flavor('Churro', 'churro.png', [ps.Sweet]),
        new Flavor('Coffee Caramel Corn', 'coffeecaramel.png', [ps.Caramel]),
        new Flavor('Cotton Candy', 'cottoncandy.png', [ps.Sweet]),
        new Flavor('Maple Pumpkin Spice', 'fall logo.png', [ps.Sweet]),
        new Flavor('French Toast', 'frenchtoastberet2.png', [ps.Sweet]),
        new Flavor('Garlic Cheesy Bread', 'garliccheesyflag.png', [ps.Savory]),
        new Flavor('Ipa Caramel Corn', 'ipacaramel.png', [ps.Caramel]),
        new Flavor('Irish Stout Caramel Corn', 'irishstout.png', [ps.Caramel]),
        new Flavor('Jalapeno Honey Butter Sea Salt', 'jalapenohoney.png', [ps.Sweet, ps.Spicy]),
        new Flavor('Kettle Corn', 'kettlecorn.png', [ps.Sweet]),
        new Flavor('Lavender Hone Butter Sea Salt', 'lavenderhoneybutter.png', [ps.Sweet]),
        new Flavor('Mint Cookies & Cream', 'mintcookiesncream.png', [ps.Sweet]),
        new Flavor('Parmesan & Black Pepper', 'parmpepper.png', [ps.Savory]),
        new Flavor('Peanut Butter Caramel Corn', 'pb_caramel.png', [ps.Caramel, ps.Nuts]),
        new Flavor('Chocolate Peanut Butter Caramel Corn', 'pb_choc_caramel.png', [ps.Caramel, ps.Nuts]),
        new Flavor('Pizza', 'pizza.png', [ps.Savory]),
        new Flavor('Red Velvet', 'red_velvet.png', [ps.Sweet]),
        new Flavor('Rye Whiskey Caramel Corn', 'ryecaramel.png', [ps.Caramel]),
        new Flavor('Salted Pretzel Caramel Corn', 'saltedcaramelpretzbase.png', [ps.Caramel]),
        new Flavor('Srirach Lime', 'srirachaflame2.png', [ps.Spicy, ps.Savory]),
        new Flavor('Strawberry Lemonade', 'strawberrylemonade.png', [ps.Sweet]),
    ]
    
    showFlavors(flavors);

    document.getElementById('filterAll').onclick = () => showFlavors(filterByProperty(flavors, null));
    document.getElementById('filterSavory').onclick = () => showFlavors(filterByProperty(flavors, ps.Savory));
    document.getElementById('filterSweet').onclick = () => showFlavors(filterByProperty(flavors, ps.Sweet));
    document.getElementById('filterSpicy').onclick = () => showFlavors(filterByProperty(flavors, ps.Spicy));
    document.getElementById('filterCaramel').onclick = () => showFlavors(filterByProperty(flavors, ps.Caramel));
    
}

function showFlavors(flavorList) {
    let flavorContainer = document.getElementById('flavors');
    flavorContainer.innerHTML = '';
    flavorList.sort(sorts.alphabetically).forEach(flavor => {
        flavorContainer.appendChild(flavor.generateElement());
    });
}

function filterByProperty(flavors, property) {
    return flavors.filter((flavor) => {
        return !property || flavor.properties.includes(property)
    });
}

let sorts = {
    alphabetically: (a, b) => { return a.name.localeCompare(b.name) }
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
            <span class="label">${this.name}</span>
        `
        return element;
    }
}

init();