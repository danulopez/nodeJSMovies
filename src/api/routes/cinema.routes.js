const express = require("express")
const {getCinema, postCinema, putCinema, deleteCinema}= require ("../controllers/cinema.controllers")

const cinemaRoutes = express.Router();

cinemaRoutes.get("/", getCinema)
cinemaRoutes.post("/", postCinema)
cinemaRoutes.put("/", putCinema)
cinemaRoutes.delete("/:id", deleteCinema)



module.exports = cinemaRoutes