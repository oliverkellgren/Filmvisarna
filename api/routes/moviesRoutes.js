const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/moviesController");

router.get("/search", moviesController.getMoviesBySearch);
router.get("/:movieId", moviesController.getMovieById);
router.get("", moviesController.getAllMovies);

module.exports = router;
