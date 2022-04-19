// JS for all dynamic HTML and design code
console.log("design.js ran");

// Variables are stored here

// ###########################################################
// ###########################################################

// Form Handler Function | controls what needs to be created ____________________________________
var formHandler = function (event) {
  
  event.preventDefault();
  console.log("Creating Form...")
  createArtistFormEl();
};

// All Forms Creation Functions | controls HTML generate process ____________________________________
var createArtistFormEl = function () {
  // Below is just piece to create all the html elements
  placeholderEl = $("<html tag placeholder>")
    .attr("id", "placeholder")
    .addClass("placeholder")
    .text("placeholder");
  placeholderEl.append(placeholderEl);
  $("#forecast").append(todaySectionEl);
}

// ###########################################################
// ###########################################################

// All fuctions to be ran will be in the tech.js
