// JS for all dynamic HTML and design code
console.log("design.js ran");

// Variables are stored here

// ###########################################################
// ###########################################################

// Creates search history buttons ____________________________________
var createSearchHistoryBTN = function (artistName) {
  console.log("Creating Search Button for " + artistName);
  var searchHistoryBTN = $("<button>")
    .addClass("btn")
    .text(artistName);
  // Adds search history button to search history container 
  $("#container-search-history").append(searchHistoryBTN);
}

// Lyrics Form Create Function | controls what needs to be created ____________________________________
var createLyricsSearch = function (artistName) {
  console.log("Creating Lyrics Search...")
  var lyricsContainerEl = $("<div>")
    .attr("id", "container-lyrics")
    .addClass("my-2");

  var lyricsFormEl = $("<form>")
    .addClass("rounded-lg form md:mx-48");

  var lyricsFormTitleEl = $("<h2>")
    .addClass("title-section")
    .text("Find " + artistName + "'s Song Lyrics");

  var lyricsSearchBoxEl = $("<div>")
    .addClass("w-full grid gap-4 grid-cols-6");

  var lyricsSearchBoxInputEl = $("<input>")
    .attr("type", "text")
    .attr("name", "search-lyrics")
    .attr("placeholder", "Enter Song Name Here")
    .addClass("col-span-4");

  var lyricsSearchBoxBtnEl = $("<button>")
    .attr("type", "submit")
    .attr("id", "btn-search-lyrics")
    .addClass("btn col-span-2")
    .text("Search");

  lyricsSearchBoxEl.append(lyricsSearchBoxInputEl, lyricsSearchBoxBtnEl);
  lyricsFormEl.append(lyricsFormTitleEl, lyricsSearchBoxEl);
  lyricsContainerEl.append(lyricsFormEl);
  $("section").append(lyricsContainerEl);
}

var createLyricsDisplay = function (songTitle, lyrics) {
  console.log("Displaying Song Lyrics...")
  $("#container-lyrics-song").remove();
  var lyricsContainerEl = $("<div>")
  .attr("id", "container-lyrics-song")
    .addClass("my-2");

  var lyricsSongTitleEl = $("<h2>")
    .attr("id", "container-lyrics-song-title-fetched")
    .addClass("title-song")
    .text(songTitle);

  var lyricsSongLyricsEl = $("<p>")
    .attr("id", "container-lyrics-fetched")
    .addClass("text-justify mx-20")
    .text(lyrics);

  lyricsContainerEl.append(lyricsSongTitleEl, lyricsSongLyricsEl);
  $("#container-lyrics").append(lyricsContainerEl);
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
console.log(artistName, url, genre, image, songLyrics);