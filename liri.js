require("dotenv").config()

var keys = require("./keys.js")



// 9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`



var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")








//    * `spotify-this-song`



var spotify = new Spotify(keys.spotify)

// * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// * If no song is provided then your program will default to "The Sign" by Ace of Base.








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



