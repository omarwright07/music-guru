// JS for all heavy code and API fetching
console.log("tech.js ran");

var placeholder = "";
var apiURL = "";

// get genre and url
// need to pass artist name, currently hardcoded
var getArtistInfo = function() {
    var lastFMapiBase = "http://ws.audioscrobbler.com/2.0/";
    var lastFMapiKey = "62f327ad180cacdfe336a5096e041eb9";
    var artist = "nirvana";   // need to replace this with form input
    var lastFMapiCall = lastFMapiBase + "?method=artist.getinfo&artist=" + artist + "&api_key=" + lastFMapiKey + "&format=json";
    
    fetch(lastFMapiCall).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            console.log(data.artist.url);
            document.getElementById("genres-found").append(data.artist.url);
            for (var i = 0; i < data.artist.tags.tag.length; i++){
                console.log(data.artist.tags.tag[i].name);
                document.getElementById("genres-found").append(data.artist.tags.tag[i].name);
            }
        });  
    });
};  

// ####  Itunes API - Probably not useful  ####
// itunes api, no auth or key required, have to use jQuery getJSON with callback
// or you get a text file returned
// $.getJSON("https://itunes.apple.com/search?term=jack+johnson&entity=musicArtist&callback=?", function (iData) {
//     console.log(iData);
// });

// Lyrics
// https://lyricsovh.docs.apiary.io/
// The only issue I've found with this is that it can be slow

var getSongLyrics = function() {
    var lyricBase = "https://api.lyrics.ovh/v1/";
    var artist = "coldplay";  //get from form input
    var song = "yellow";  //get from form input
    var lyricRequest = lyricBase + artist + "/" + song;

    fetch(lyricRequest).then(function(response) {
        response.json().then(function(data) {
            console.log(data); 
            console.log(response.status);       
            if (response.status != 200){
                document.getElementById("lyrics").innerHTML=("Song not found");
            }
            else {
                var songLyrics = data.lyrics.split('\n').join('<br />');
                document.getElementById("lyrics").innerHTML=songLyrics;
            }
        })
    });
};

getArtistInfo();
getSongLyrics();

var artist = "cher";
// var getLabel = function() {
var getArtist = "https://musicbrainz.org/ws/2/artist/?query=" + artist + "&fmt=json";
// var getLabel = "https://musicbrainz.org/ws/2/label/" + data.artists[0].id + "?inc=aliases";
var mb = function (info){
    fetch(info).then(function(response) {
        response.json().then(function(data) {
            console.log("MB function",data.artists[0].id);
            console.log(data);
            localStorage.setItem("mbid", data.artists[0].id);
        });
    });
};

mb(getArtist);

// var mbid = localStorage.getItem("mbid");
// var getUrl = "https://musicbrainz.org/ws/2/url/" + mbid + "?fmt=json"
// var getGenre = "https://musicbrainz.org/ws/2/genre/" + mbid + "?fmt=json";

//does not work
// var mb2 = function (){
// console.log("mb2",typeof(mbid)),mbid;
//     fetch(getGenre).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     });
//     });
// };

// mb2();

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