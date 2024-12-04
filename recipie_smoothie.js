// Get the Scroll button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Numberformating for recepie table
function numberFormat(amount, unit) {
  // Check whether the number is an integer
  if (Number.isInteger(amount)) {
    return `${amount} ${unit}`; // If integer, without decimal places
  } else {
    let formattedAmount = amount.toFixed(2).replace(".", ",");
    return `${formattedAmount} ${unit}`; // If not an integer, with 2 decimal places
  }
}

// Recepie calculator grüner Smoothie
let q = document.getElementById("myInput");

function quantityfunc() {
  let quantSal = 37.5;
  let quantIngw = 0.5;
  let quantCuc = 0.25;
  let quantPear = 0.25;
  let quantBan = 0.25;
  let quantLem = 0.25;

  if (q.value > 0) {
    q.parentElement.parentElement.children[2].children[0].children[0].children[0].innerHTML = numberFormat(q.value * quantSal, " g");
    q.parentElement.parentElement.children[2].children[0].children[1].children[0].innerHTML = numberFormat(q.value * quantIngw, " cm");
    q.parentElement.parentElement.children[2].children[0].children[2].children[0].innerHTML = numberFormat(q.value * quantCuc, "");
    q.parentElement.parentElement.children[2].children[0].children[3].children[0].innerHTML = numberFormat(q.value * quantPear, "");
    q.parentElement.parentElement.children[2].children[0].children[4].children[0].innerHTML = numberFormat(q.value * quantBan, "");
    q.parentElement.parentElement.children[2].children[0].children[5].children[0].innerHTML = numberFormat(q.value * quantLem, "");
  }
}

// Nution calculator
function nutrifunc() {
  let quantCal = 50;
  let quantProt = 5.5;
  let quantFatt = 1.5;
  let quantCarbs = 2.25;

  document.getElementById("cal").innerHTML = numberFormat(q.value * quantCal, "");
  document.getElementById("prot").innerHTML = numberFormat(q.value * quantProt, " g");
  document.getElementById("fett").innerHTML = numberFormat(q.value * quantFatt, " g");
  document.getElementById("carbs").innerHTML = numberFormat(q.value * quantCarbs, " g");
}

// Nution portion indicator
function portionfunc() {
  if (q.value > 1) {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + q.value + " " + "Portionen";
  } else if (q.value == 1) {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + q.value + " " + "Portion";
  } else {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + 0 + " " + "Portionen";
  }
}

// Portion button
function namingfunc() {
  if (q.value > 1) {
    document.getElementById("namingButton").innerHTML = "Portionen";
  } else if (q.value == 1) {
    document.getElementById("namingButton").innerHTML = "Portion";
  } else {
    document.getElementById("namingButton").innerHTML = "Portionen";
  }
}
// Mobile navigation Button:
function toggleNav() {
  document.getElementById("respMenue").classList.toggle("closedMenueBox");
}

let changeIcon = function (icon) {
  icon.classList.toggle("myMenueClose");
};

// Recepie calculator grüner Smoothie
let r = document.getElementById("myInputR");

function quantityfuncR() {
  let quantSal = 1.5;
  let quantIngw = 5;
  let quantCuc = 3.75;
  let quantPear = 0.25;
  let quantBan = 0.25;
  let quantLem = 0.25;

  if (r.value > 0) {
    r.parentElement.parentElement.children[2].children[0].children[0].children[0].innerHTML = numberFormat(r.value * quantSal, "");
    r.parentElement.parentElement.children[2].children[0].children[1].children[0].innerHTML = numberFormat(r.value * quantIngw, "");
    r.parentElement.parentElement.children[2].children[0].children[2].children[0].innerHTML = numberFormat(r.value * quantCuc, "");
    r.parentElement.parentElement.children[2].children[0].children[3].children[0].innerHTML = numberFormat(r.value * quantPear, "");
    r.parentElement.parentElement.children[2].children[0].children[4].children[0].innerHTML = numberFormat(r.value * quantBan, "");
    r.parentElement.parentElement.children[2].children[0].children[5].children[0].innerHTML = numberFormat(r.value * quantLem, "Zweige");
  }
}

// Nution calculator
function nutrifuncR() {
  let quantCal = 50;
  let quantProt = 5.5;
  let quantFatt = 1.5;
  let quantCarbs = 2.25;

  document.getElementById("cal").innerHTML = numberFormat(r.value * quantCal, "");
  document.getElementById("prot").innerHTML = numberFormat(r.value * quantProt, " g");
  document.getElementById("fett").innerHTML = numberFormat(r.value * quantFatt, " g");
  document.getElementById("carbs").innerHTML = numberFormat(r.value * quantCarbs, " g");
}

// Nution portion indicator
function portionfuncR() {
  if (r.value > 1) {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + r.value + " " + "Portionen";
  } else if (r.value == 1) {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + r.value + " " + "Portion";
  } else {
    document.getElementById("portionAmount").innerHTML = "Nährwerte für" + " " + 0 + " " + "Portionen";
  }
}

// Portion button
function namingfuncR() {
  if (r.value > 1) {
    document.getElementById("namingButton").innerHTML = "Portionen";
  } else if (r.value == 1) {
    document.getElementById("namingButton").innerHTML = "Portion";
  } else {
    document.getElementById("namingButton").innerHTML = "Portionen";
  }
}
