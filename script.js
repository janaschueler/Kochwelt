
// Change Icon on Menue 
let changeIcon = function(icon) {
  icon.classList.toggle("burger-menu-button")
};



// Button to toggle RespMenu

function toggleRespMenu() {
  document.getElementById('resp_menu').classList.toggle('resp_menu_closed');
};



// Button to scroll up

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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



// contact formal 

function sendMail(event){﻿
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/manwrvlg", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
  }).then(() => {
      window.location.href = "./send_mail.html";
  }).catch((error) => {
      console.log(error);
  });
}