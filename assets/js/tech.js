// JS for all heavy code and API fetching
console.log("tech.js ran");

var searchHistory = [];
var artistName = "";
var artistGenre = [];
var artistImage = "";
var artistURL = "";
var songTitle = "";
var songLyrics = "";

// Generate Function ____________________________________
function getArtistInfo() {
    console.log("Generating All Artist Info...")
    var lastFMapiBase = "http://ws.audioscrobbler.com/2.0/";
    var lastFMapiKey = "62f327ad180cacdfe336a5096e041eb9";
    var lastFMapiCall = lastFMapiBase + "?method=artist.getinfo&artist=" + artistName + "&api_key=" + lastFMapiKey + "&format=json";

    fetch(lastFMapiCall).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            artistName = data.artist.name;
            artistURL = data.artist.url;
            // 6 images are available rangin from small (0) to mega (5) I've selected medium (1)
            artistImage = data.artist.image[1]["#text"];
            console.log(artistImage);
            artistiGenre = [];
            for (var i = 0; i < data.artist.tags.tag.length; i++) {
                console.log(data.artist.tags.tag[i].name);
                artistGenre[i] = data.artist.tags.tag[i].name;
            }
            // Checks if the artist name is already in the search history
            if (!searchHistory.includes(artistName)) {
                searchHistory.push(artistName);
                saveSearchHistory();
            }
            formHandler();
        });
    });
};

// Lyrics API URL - https://lyricsovh.docs.apiary.io/
var getSongLyrics = function (artistName, songTitle) {
    var lyricBase = "https://api.lyrics.ovh/v1/";
    // var artist = "coldplay";  //get from form input
    // var song = "yellow";  //get from form input
    var lyricRequest = lyricBase + artistName + "/" + songTitle;

    fetch(lyricRequest).then(function (response) {
        response.json().then(function (data) {
            // console.log(data);
            console.log(response.status);
            if (response.status != 200) {
                songLyrics = "Song Not Found";
                createLyricsDisplay(songTitle, songLyrics);
            }
            else {
                songLyrics = data.lyrics.trim().split('\n').join('<br>');
                createLyricsDisplay(songTitle, songLyrics);
            }
        })
    });
};

// ###########################################################
// ###########################################################

// Save and Load Functions ____________________________________
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
        for (i = 0; i < searchHistory.length; i++) {
            createSearchHistoryBTN(searchHistory[i]);
        }
    } else {
        console.log("Loaded from local save!")
        searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
        // Creates all the search history buttons here
        for (i = 0; i < searchHistory.length; i++) {
            createSearchHistoryBTN(searchHistory[i]);
        }
    }
};

// Clear Functions ____________________________________
var clearAllArtistInfo = function () {
    console.log("Removing All Artist Info...");
    $("section").children().remove();
};

var clearSearchHistory = function () {
    console.log("Hiding Search History...");
    $("#container-search-history").children().remove();
};

// ###########################################################
// ###########################################################

// Search Artist Button
$("#btn-search-artist").on("click", function (event) {
    event.preventDefault();
    artistName = $("input[name='search-artist']").val();
    console.log(artistName);
    if (artistName == "") {

    } else {
        clearAllArtistInfo();
        getArtistInfo(artistName);
        var text = $("#btn-search-history").text();
        if (text == "Show Search History") {
            loadSearchHistory();
            $("#btn-show-search-history").text("Hide Search History")
        } else {
            $("#container-search-history").children().remove();
            $("#btn-show-search-history").text("Show Search History")
        }
    }
});

// Any Search History Button
$("#container-search-history").on("click", "#btn-search-history", function (event) {
    event.preventDefault();
    artistName = $(event.target).html();
    console.log(artistName);
    if (artistName == "") {

    } else {
        clearAllArtistInfo();
        getArtistInfo(artistName);
    }
});

// Show/Hide Search History Button
$("#btn-show-search-history").on("click", function (event) {
    event.preventDefault();
    var text = $("#btn-show-search-history").text();
    console.log(text);
    if (text == "Show Search History") {
        loadSearchHistory();
        $("#btn-show-search-history").text("Hide Search History")
    } else {
        $("#container-search-history").children().remove();
        $("#btn-show-search-history").text("Show Search History")
    }
});

// Search Lyrics Button
$("section").on("click", "#btn-search-lyrics", function (event) {
    event.preventDefault();
    songTitle = $("input[name='search-lyrics']").val();
    console.log(songTitle);
    if (songTitle == "") {

    } else {
        getSongLyrics(artistName, songTitle);
    }
});

// Main Site Button
$("section").on("click", "#container-link", function (event) {
    event.preventDefault();
    console.log("artist URL",artistURL);
    window.open(artistURL, "_blank");
});
