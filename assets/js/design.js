// JS for all dynamic HTML and design code
console.log("design.js ran");

// Variables are stored here

// ###########################################################
// ###########################################################

// Creates search history buttons
var createSearchHistoryBTN = function (artistName) {
  console.log("Creating Search Button for " + artistName);
  var searchHistoryBTN = $("<button>")
      // Add whatever classes needed to stylize here
      .addClass("placeholder")
      .text(artistName);
      // Adds search history button to search history container 
  $("#search-history").append(searchHistoryBTN);
}


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
var artistName = JSON.parse(localStorage.getItem("artistName"));
var genre = JSON.parse(localStorage.getItem("genre"));
var image = JSON.parse(localStorage.getItem("image"));
var url = JSON.parse(localStorage.getItem("url"));
var songLyrics = JSON.parse(localStorage.getItem("songLyrics"));
console.log(artistName,url,genre,image,songLyrics);