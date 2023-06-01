const Cinema = require("../models/cinema.models")

const getCinema = async (req,res) => {
    try {
        const cinemas =await Cinema.find().populate('movies')
        return res.status(200).json(cinemas)
    } catch (error) {
        return next(error)
    }
}
const postCinema = async (req, res) =>{
    try {
       const newCinema = new Cinema({
        name: req.body.name, 
        location: req.body.location,
        movies: []
       })
       const createdCinema = await newCinema.save()
       return res.status(201).json(createdCinema)        
    } catch (error) {
        return next(error)
    }

}
const putCinema = async (req, res) =>{
    try {
       const {cinemaId} = req.body;
       const {movieId} = req.body;
       const updatedCinema = await Cinema.findOneAndUpdate(cinemaId,{$push: {movies: movieId}},{new:true});
       return res.status(201).json(createdCinema)        
    } catch (error) {
        return next(error)
    }

}
const deleteCinema = async (req, res) => {
    const {id} = req.params;
    try {
    const deleteCinema = await Cinema.findByIdAndDelete(id)
    if (!deleteCinema) {
        return res.status(404).json({mensaje: "no coincide el id"})
    }
    return res.status(200).json(deleteCinema)
 } catch (error) {
    return next(error)
 }
} 
module.exports = {getCinema, postCinema, putCinema, deleteCinema}