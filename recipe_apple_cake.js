// calculator for the recipe and the nutritional values: 

const standardPortions = 12;
const ingredients = {
  cream: 2, // Becher
  sugar1: 150, // Gramm
  vanilleSugar: 1, // Pck.
  lemon: 1, // Stück
  eggs: 5, // Stück
  flour: 375, // Gramm
  bakingPowder: 1, // Pck.
  apples: 1.25, // KiloGramm
  lemonJuice: 4, // EL
  butter: 100, // Gramm
  sugar2: 100, // Gramm
  milk: 4, // EL
  almonds: 60 // Gramm
};

const nutritionals = {
    kcal: 5844,
    protein: 108, // Gramm
    fat: 276, // Gramm
    carbs: 744 // Gramm
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
        document.getElementById('cream').textContent = formatAmount(ingredients.cream * portionFactor, '');
        document.getElementById('sugar1').textContent = formatAmount(ingredients.sugar1 * portionFactor, 'g');
        document.getElementById('vanilleSugar').textContent = formatAmount(ingredients.vanilleSugar * portionFactor, 'Pck.');
        document.getElementById('lemon').textContent = formatAmount(ingredients.lemon * portionFactor, '');
        document.getElementById('eggs').textContent = formatAmount(Math.round(ingredients.eggs * portionFactor), ''); 
        document.getElementById('flour').textContent = formatAmount(ingredients.flour * portionFactor, 'g');
        document.getElementById('bakingPowder').textContent = formatAmount(ingredients.bakingPowder * portionFactor, 'Pck.');
        document.getElementById('apples').textContent = formatAmount(ingredients.apples * portionFactor, 'kg');
        document.getElementById('lemonJuice').textContent = formatAmount(Math.round(ingredients.lemonJuice * portionFactor), 'EL'); 
        document.getElementById('butter').textContent = formatAmount(ingredients.butter * portionFactor, 'g');
        document.getElementById('sugar2').textContent = formatAmount(ingredients.sugar2 * portionFactor, 'g');            
        document.getElementById('milk').textContent = formatAmount(Math.round(ingredients.milk * portionFactor), 'EL'); 
        document.getElementById('almonds').textContent = formatAmount(ingredients.almonds * portionFactor, 'g');

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

