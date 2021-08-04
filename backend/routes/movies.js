const router = require('express').Router();

const movie = require("../models/movieModel");

//Function to get movies from the database
router.route("/getMovies").get((req, res) => {
    movie.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });


//function to post movies to the database
router.post("/insertMovie", (req, res) => {
    console.log("I HAVE REQUESTED TO ADD\n" + req.body);
    const newMovie = new movie(req.body);
    newMovie.save()
    .then(item => {res.send("Movie saved to the database");})
    .catch(err => {res.send("Unable to save Movie to database");})
  });

//Function to remove movies from the database
router.delete("/deleteMovie", (req, res) => {
  console.log("DELETING\n" + req.body);

});


  module.exports = router;