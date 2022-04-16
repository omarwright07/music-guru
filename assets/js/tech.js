// JS for all heavy code and API fetching
console.log("tech.js ran");

var placeholder = "";
var apiURL = "";

// ###########################################################
// ###########################################################

// Save and Load Functions ____________________________________
var savePlaceholder = function () {
    console.log("Saving...")
    localStorage.setItem("placeholder", JSON.stringify(placeholder));
};

var loadPlaceholder = function () {
    console.log("Loading...")
    var savedPlaceholder = JSON.parse(localStorage.getItem("searchHistory"));
    // if nothing in localStorage, create a new object to track all description
    if (!savedPlaceholder) {
        console.log("There was no local save! Setting default values!");
    } else {
        console.log("Loaded from local save!")
        placeholder = JSON.parse(localStorage.getItem("y"));
    }
};


// Generate Function ____________________________________
var generatePlaceholder = function () {
    console.log("Generating Forecast...")
    fetchPlaceholder();
};

var fetchPlaceholder = function() {
    fetch(apiURL)
        .then(function (response) {
            // request was successful
            if (response.ok) {
            
            } else {
            
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

// Clear Function ____________________________________
var clearPlaceholder = function () {
    console.log("Removing...");
    $("placeholder").remove();
};

// ###########################################################
// ###########################################################

// $("placeholder").on("click", generatePlaceholder);
// $("placeholder").on("click", "placeholder", generatePlaceholder);
// loadPlaceholder();