// calculator for the recipe and the nutritional values: 

const standardPortions = 1;
const ingredients = {
  blueberries: 40, // Gramm
  raspberries: 85, // Gramm
  yogurt: 230, // Gramm
  honey: 1, // TL
};

const nutritionals = {
    kcal: 233,
    protein: 10, // Gramm
    fat: 9, // Gramm
    carbs: 22 // Gramm
};

function formatAmount(amount, unit) {
    // Check whether the number is an integer
    if (Number.isInteger(amount)) {
        return `${amount} ${unit}`; // If integer, without decimal places
    } else {
      let formattedAmount =amount.toFixed(2).replace('.',',');
        return `${formattedAmount} ${unit}`; // If not an integer, with 2 decimal places
    }
};

function calculateRecipe() {

    let portions = document.getElementById('recipeInput').value;

    if (portions > 0) {
        const portionFactor = portions / standardPortions;
        
        // calculateIngredients
        document.getElementById('blueberries').textContent = formatAmount(ingredients.blueberries * portionFactor, 'g');
        document.getElementById('raspberries').textContent = formatAmount(ingredients.raspberries * portionFactor, 'g');
        document.getElementById('yogurt').textContent = formatAmount(ingredients.yogurt * portionFactor, 'g');
        document.getElementById('honey').textContent = formatAmount(ingredients.honey * portionFactor, 'TL.');

        // calculateNutritions
        document.getElementById('kcal').textContent = formatAmount(nutritionals.kcal * portionFactor, '');
        document.getElementById('protein').textContent = formatAmount(nutritionals.protein * portionFactor, 'g');
        document.getElementById('fat').textContent = formatAmount(nutritionals.fat * portionFactor, 'g');
        document.getElementById('carbs').textContent = formatAmount(nutritionals.carbs * portionFactor, 'g');
    } 
};

function showPortion() {
    let portions = document.getElementById('recipeInput').value;

    if(portions > 0) {
        // display number of portions
        document.getElementById('numberOfPortions').innerText = portions;
    }
};

function namingFunc() {
    let portions = document.getElementById('recipeInput').value;

    if (portions > 1) {
        document.getElementById('portionEnding').innerText = ' Portionen';
    } if (portions == 1) {
        document.getElementById('portionEnding').innerText = ' Portion';
    }
};

