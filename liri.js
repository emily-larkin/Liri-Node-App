// requires dotenv, .env hides keys
require("dotenv").config()

// requires the keys.js file where the keys are referenced
var keys = require("./keys.js")

// requires spotify npm
var Spotify = require('node-spotify-api');

// gets the spotify keys so we can make calls to spotify
var spotifyKeys = new Spotify(keys.spotify)

// switch statement for what command we're giving liri
var askingLiri = function (caseData, functionData) {
    switch (caseData) {
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;

            // case :
            // ();
            // break;

        default:
            console.log("Liri does not know that.")
    }
}

// arguments from the user will be run through the switch statment askingLiri
var runThis = function (argOne, argTwo) {
    askingLiri(argOne, argTwo);
}

// pass the switch statement the arguments from the user 
runThis(process.argv[2], process.argv[3]);


//    * `concert-this`



// var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")


//    * `spotify-this-song`

function getMeSpotify(songName) {

    spotifyKeys.search({
        type: 'track',
        query: songName
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            // * Artist(s)
            console.log("Artist(s): " + songs[i].album.artists.map(getArtistNames));
            // * The song's name
            console.log("Song: " + songs[i].name);
            // * A preview link of the song from Spotify
            console.log("Preview: " + songs[i].preview_url)
            // * The album that the song is from
            console.log("Album: " + songs[i].album.name);
            console.log("==========================")
        }
    });
    // * If no song is provided then your program will default to "The Sign" by Ace of Base.
}

var getArtistNames = function (artists) {
    return artists.name;
}


//    * `movie-this`

// 3. `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

//      * It's on Netflix!

//    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.





//    * `do-what-it-says`



// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.



// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.



// * Edit the text in random.txt to test out the feature for movie-this and concert-this.


