// JS for all heavy code and API fetching
console.log("tech.js ran");

var placeholder = "";
var apiURL = "";

// var art = document.getElementsByName("search-musician");
var artist = "coldplay";
// These could be hard coded since they don't change, execpt for artist
var lastFMapiBase = "http://ws.audioscrobbler.com/2.0/";
var lastFMapiKey = "62f327ad180cacdfe336a5096e041eb9";
var lastFMapiCall = lastFMapiBase + "?method=artist.getinfo&artist=" + artist + "&api_key=" + lastFMapiKey + "&format=json";

// get genre and url and image
// need to pass artist name, currently hardcoded
function getArtistInfo() {
    fetch(lastFMapiCall).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            localStorage.setItem("artistName", JSON.stringify(data.artist.name));
            localStorage.setItem("url", JSON.stringify(data.artist.url));
            // 6 images are available rangin from small (0) to mega (5) I've selected medium (1)
            localStorage.setItem("image", JSON.stringify(data.artist.image[1]["#text"]));
            var genreArray = [];
            for (var i = 0; i < data.artist.tags.tag.length; i++){
                console.log(data.artist.tags.tag[i].name);
                genreArray[i] = data.artist.tags.tag[i].name;
            }
            localStorage.setItem("genre", JSON.stringify(genreArray));
        });  
    });
};  

// Lyrics
// https://lyricsovh.docs.apiary.io/
// The only issue I've found with this is that it can be slow

// Need the user to input song
var lyricBase = "https://api.lyrics.ovh/v1/";
// var artist = "coldplay";  //get from form input
var song = "yellow";  //get from form input
var lyricRequest = lyricBase + artist + "/" + song;

function getSongLyrics() {
    fetch(lyricRequest).then(function(response) {
        response.json().then(function(data) {
            console.log(data); 
            if (response.status != 200){
                var songLyrics = "Song not Found";
            }
            else {
                var songLyrics = data.lyrics.split('\n').join('<br />');
                localStorage.setItem("songLyrics", JSON.stringify(songLyrics));
            }
        })
    });
};

getArtistInfo(lastFMapiCall);
getSongLyrics();

// var postGenre = function () {
//     console.log("What kind of music IS this?");
//     document.getElementById("#genre-list").appendChild(genre);
// };

// postGenre();
createArtistFormEl();



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