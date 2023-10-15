let dishes = {
    "Italian pasta": 9.55,
    "Rice with veggies": 8.65,
    "Chicken with potatoes": 15.55,
    "Vegetarian Pizza": 6.45
}

function printReciept(dishes, applyTwentyPercentTax) {
    console.log(applyTwentyPercentTax ? "Prices with 20% tax:" : "Prices without tax:");

    let dishNames = Object.keys(dishes);
    for (let i = 0; i < dishNames.length; i++) {
        let dishName = dishNames[i];
        let dishPrice = dishes[dishName];
        console.log(`Dish: ${dishName} Price (incl.tax): $ ${applyTwentyPercentTax ? dishPrice * 1.2 : dishPrice}`);
    }
}

printReciept(dishes, true);
console.log();
printReciept(dishes, false);