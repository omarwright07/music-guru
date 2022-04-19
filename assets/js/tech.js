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
        });
    });
};

// Lyrics
// https://lyricsovh.docs.apiary.io/
// The only issue I've found with this is that it can be slow

var getSongLyrics = function () {
    var lyricBase = "https://api.lyrics.ovh/v1/";
    var artist = "coldplay";  //get from form input
    var song = "yellow";  //get from form input
    var lyricRequest = lyricBase + artist + "/" + song;

    fetch(lyricRequest).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            console.log(response.status);
            if (response.status != 200) {
                document.getElementById("lyrics").innerHTML = ("Song not found");
            }
            else {
                var songLyrics = data.lyrics.split('\n').join('<br />');
                // document.getElementById("lyrics").innerHTML = songLyrics;
            }
        })
    });
};

getArtistInfo(lastFMapiCall);
getSongLyrics();

var artist = "cher";
// var getLabel = function() {
var getArtist = "https://musicbrainz.org/ws/2/artist/?query=" + artist + "&fmt=json";
// var getLabel = "https://musicbrainz.org/ws/2/label/" + data.artists[0].id + "?inc=aliases";
var mb = function (info) {
    fetch(info).then(function (response) {
        response.json().then(function (data) {
            console.log("MB function", data.artists[0].id);
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
var searchHistory = [];

var searchHistoryHandler = function (artistName) {
    if (!searchHistory.includes(artistName)) {
        createSearchHistoryBTN(artistName);
    }
    saveSearchHistory;
}

var saveSearchHistory = function () {
    console.log("Saving...")
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};

var loadSearchHistory = function () {
    console.log("Loading...")
    var savedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    // if nothing in localStorage, create a new object to track all description
    if (!savedSearchHistory) {
        console.log("There was no local save! Setting default values!");
    } else {
        console.log("Loaded from local save!")
        searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
        // Creates all the search history buttons here
        for (i = 0; i < searchHistory.length; i++) {
            createSearchHistoryBTN(searchHistory[i]);
        }
    }
};

// Generate Function ____________________________________
var generatePlaceholder = function () {
    console.log("Generating Placeholder...")
    fetchPlaceholder();
};

var fetchPlaceholder = function () {
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
loadSearchHistory();