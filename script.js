// Get references to the HTML elements
const counterElement = document.getElementById("counter");
const incButton = document.getElementById("inc-btn");
const decButton = document.getElementById("dec-btn");

let count = 0;

// Function to update the counter value and display it
function updateCounter() {
    counterElement.textContent = count;
}

// Add event listeners to the buttons
incButton.addEventListener("click", function() {
    count += 1;
    updateCounter();
});

decButton.addEventListener("click", function() {
    count -= 1;
    updateCounter();
});

// Initialize the counter
updateCounter();
