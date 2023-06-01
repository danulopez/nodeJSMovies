const express = require("express")
const {getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear, postMovie, deleteMovie, putMovie} = require("../controllers/movies.controllers")

const moviesRoutes = express.Router();

moviesRoutes.get("/", getMovies)
moviesRoutes.get("/id/:id", getMovieById)
moviesRoutes.get("/title/:title", getMovieByTitle)
moviesRoutes.get("/genre/:genre", getMovieByGenre)
moviesRoutes.get("/year/:year", getMovieByYear)
moviesRoutes.post("/", postMovie)
moviesRoutes.put("/", putMovie)
moviesRoutes.delete("/:id", deleteMovie)



module.exports = moviesRoutes