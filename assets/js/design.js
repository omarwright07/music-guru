// JS for all dynamic HTML and design code
console.log("design.js ran");
// ###########################################################
// ###########################################################

// Creates search history buttons ____________________________________
var createSearchHistoryBTN = function (artistName) {
  console.log("Creating Search Button for " + artistName);
  var searchHistoryBTN = $("<button>")
    .attr("id", "btn-search-history")
    .addClass("btn")
    .text(artistName);
  // Adds search history button to search history container 
  $("#container-search-history").append(searchHistoryBTN);
}

// Form Handler Function | controls the order of forms created ____________________________________
var formHandler = function () {
  console.log("Creating Form...")
  createArtistNameGenreForm();
  // createArtistImageForm();
  createArtistLinkForm();
  createLyricsSearch();
};

// All Forms Creation Functions | controls HTML generation process ____________________________________
// Artist Name and Genre
var createArtistNameGenreForm = function () {
  // Everything for Artist Name
  var artistNameContainerEl = $("<div>")
    .attr("id", "container-artist-name")
    .addClass("text-3xl mt-10 mb-5");

  var artistNameTitleEl = $("<h2>")
    .addClass("artist-name")
    .text(artistName);

  artistNameContainerEl.append(artistNameTitleEl);
  $("section").append(artistNameContainerEl);

  console.log("Creating Genre...")
  // Everything for Artist's Genres
  var artistGenreContainerEl = $("<div>")
    .attr("id", "container-genre")
    .addClass("my-2");

  var artistGenreTitleEl = $("<h2>")
    .addClass("title-section")
    .text("Genres");

  var artistGenreListEl = $("<div>")
    .attr("id", "container-genre-fetched")
    .addClass("container-genre flex justify-center flex-col flew-wrap mx-3 md:mx-48");

  for (i = 0; i < artistGenre.length; i++) {
    console.log("genre item " + i);
    var artistGenreListItemEl = $("<h3>")
      .attr("id", "")
      .addClass("genre")
      .text("#" + artistGenre[i]);
    artistGenreListEl.append(artistGenreListItemEl);
  }

  artistGenreContainerEl.append(artistGenreTitleEl, artistGenreListEl);
  $("section").append(artistGenreContainerEl);
}

// Artist Image
var createArtistImageForm = function () {
  // Below is just piece to create all the html elements
  var artistImageContainerEl = $("<div>")
    .attr("id", "container-images")
    .addClass("flex justify-center wrap my-2 mx-20");

  var artistImageEl = $("<img>")
    .attr("src", artistImage)
    .attr("alt", "Your favorite artist")
    // .addClass("image rounded-lg col-span-6 md:col-span-2");
    .addClass("image rounded-lg");

  artistImageContainerEl.append(artistImageEl);
  $("section").append(artistImageContainerEl);

}

// Artist Link
var createArtistLinkForm = function () {
  var artistLinkContainerEl = $("<div>")
    .attr("id", "container-link")
    .addClass("my-2");

  var artistLinkTitleEl = $("<button>")
    .attr("id", "container-link")
    .addClass("btn title-section")
    .text(artistName + "'s last.fm Site");

  artistLinkContainerEl.append(artistLinkTitleEl);
  $("section").append(artistLinkContainerEl);
}

// Arist Lyrics Search
var createLyricsSearch = function () {
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
    .addClass("w-full grid gap-2 grid-cols-6");

  var lyricsSearchBoxInputEl = $("<input>")
    .attr("type", "text")
    .attr("name", "search-lyrics")
    .attr("placeholder", "Enter Song Name Here")
    .addClass("rounded-lg col-span-4 p-3");

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

// Lyrics Display Functions | controls HTML generation process ___________________________________
var createLyricsDisplay = function (songTitle, songLyrics) {
  console.log("Displaying Song Lyrics...")
  $("#container-lyrics-song").remove();
  var lyricsContainerEl = $("<div>")
    .attr("id", "container-lyrics-song")
    .addClass("my-2");

  var lyricsSongTitleEl = $("<h2>")
    .attr("id", "container-lyrics-song-title-fetched")
    .addClass("title-song mx-20 md:mx-60 p-4")
    .text(songTitle);

  var lyricsSongLyricsEl = $("<p>")
    .attr("id", "container-lyrics-fetched")
    .addClass("song-lyrics text-justify mx-20 px-10 py-5 md:mx-60")
    .html(songLyrics);

  lyricsContainerEl.append(lyricsSongTitleEl, lyricsSongLyricsEl);
  $("#container-lyrics").append(lyricsContainerEl);
}

// ###########################################################
// ###########################################################

// All fuctions to be ran will be in the tech.js