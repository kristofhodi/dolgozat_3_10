import express from "express"

import { addMovie, deleteMovie, getAllmovies, getAllmoviesByid, updateMovie } from "../controller/moviescontroller.js"

const router = express.Router()

router.get('/', getAllmovies)

router.get('/:id', getAllmoviesByid)

router.post('/',addMovie)

router.put('/:id', updateMovie)

router.delete('/:id', deleteMovie)

export default router