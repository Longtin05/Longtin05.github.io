/*
JavaScript Site Demo
Gabriella Longtin
10/26/2026
*/

// Select all navigation buttons
const buttons = document.querySelectorAll("nav button");

// Add click events to navigation buttons
buttons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

  });

});