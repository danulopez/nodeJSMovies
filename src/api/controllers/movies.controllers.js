const Movie = require("../models/movie.models")

const getMovies = async (req,res) => {
    try {
        const allMovies =await Movie.find()
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getMovieById = async(req, res) => {
    console.log("esta es la funcion id");
    const id = req.params.id
    try {
        const movieById = await Movie.findById(id)
        return res.status(200).json(movieById)
    } catch (error) {
        return res.status(500).json(movieById)
    }
}
const getMovieByTitle = async(req, res) => {
    console.log("esta es la funcion title");
    const title = req.params.title
    try {
        const movieByTitle = await Movie.find(title)
        return res.status(200).json(movieByTitle)
    } catch (error) {
        return res.status(500).json(movieByTitle)
    }
}
const getMovieByGenre= async(req, res) => {
    console.log("esta es la funcion genre");
    const genre = req.params.genre
    try {
        const movieByGenre = await Movie.find(genre)
        return res.status(200).json(movieByGenre)
    } catch (error) {
        return res.status(500).json(movieByGenre)
    }
}

const getMovieByYear= async (req, res) => {
    console.log("esta es la función year");
    const year = req.params.year
    try {
        const movieByYear = await Movie.find(year)
        return res.status(200).json(movieByYear)
    } catch (error) {
        return res.status(500).json(movieByYear)
    }
}


const postMovie = async (req, res) =>{
    try {
       const newMovie = new Movie(req.body)
       const createdMovie = await newMovie.save()
       return res.status(201).json(createdMovie)        
    } catch (error) {
        return res.status(500).json(error)
    }

}
const putMovie = async (req, res) =>{
    try {
       const {id} = req.params
       const modifyMovie = new Movie(req.body)
       modifyMovie._id =id
       const movieUpdated = await Movie.findByIdAndUpdate(id, modifyMovie)
       return res.status(201).json(movieUpdated)        
    } catch (error) {
        return res.status(500).json(error)
    }

}

const deleteMovie = async (req, res) => {
    const {id} = req.params;
    try {
    const deleteMovie = await Movie.findByIdAndDelete(id)
    if (!deleteMovie) {
        return res.status(404).json({mensaje: "no coincide el id"})
    }
    return res.status(200).json(deleteMovie)
 } catch (error) {
    return res.status(500).json(error)
 }
}

module.exports = {getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear, putMovie, postMovie, deleteMovie}

