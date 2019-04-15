// requires dotenv, .env hides keys
require("dotenv").config()

// requires the keys.js file where the keys are referenced
var keys = require("./keys.js")

// requires spotify npm
var Spotify = require("node-spotify-api");

// requires request
var axios = require("axios")

// gets the spotify keys so we can make calls to spotify
var spotifyKeys = new Spotify(keys.spotify)


// switch statement for what command we're giving liri
var askingLiri = function (caseData, functionData) {
    switch (caseData) {
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;

        case "movie-this":
            getMovie(functionData);
            break;

        case "concert-this":
            getConcert(functionData);
            break;

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

function getConcert(artist) {

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL)
    .then(function(response) {
            response.data.forEach(function(showInfo) {
            // * Name of the venue
            console.log("Venue Name: " + showInfo.venue.name);
            // * Venue location
            console.log("Venue Location: "+ showInfo.venue.city);
            // * Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log(" " + showInfo.datetime)
            console.log("========================")
            });
        }
    ).catch(function (error) {
    console.log(error);
  });

}


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
function getArtistNames(artists) {
    return artists.name;
}


//    * `movie-this`

function getMovie(movieName) {
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL)
        .then(function (response) {
            //        * Title of the movie.
            console.log("Title: " + response.data.Title)
            //        * Year the movie came out.
            console.log("Release Year: " + response.data.Year)
            //        * IMDB Rating of the movie.
            console.log("IMDB Rating: " + response.data.imdbRating)
            //        * Rotten Tomatoes Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
            //        * Country where the movie was produced.
            console.log("Country Produced: " + response.data.Country)
            //        * Language of the movie.
            console.log("Language: " + response.data.Language)
            //        * Plot of the movie.
            console.log("Plot: " + response.data.Plot)
            //        * Actors in the movie.
            console.log("Actors: " + response.data.Actors)
            console.log("===========================")
        });
    //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    //      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

}


//    * `do-what-it-says`



// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.



// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.



// * Edit the text in random.txt to test out the feature for movie-this and concert-this.