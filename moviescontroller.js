import movies from '../data/movies.js'

export const getAllmovies = (req, res) => {
    res.status(200).json(movies)
}

export const getAllmoviesByid = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'not found'})
    }
    res.status(200).json(movies[id])
}

export const addMovie = (req, res) => {
    const {title, director, year, oscar} = req.body
    if (!title || !director || !year || !oscar) {
        return res.status(404).json({message: 'missing data'})
    }
    const newMovie = {title, director, year, oscar}
    movies.push(newMovie)
    res.status(201).json(newMovie)
}

export const updateMovie = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'not found'})
    }
    const {title, director, year, oscar} = req.body
    if (!title || !director || !year || !oscar) {
        return res.status(404).json({message: 'missing data'})
    }
    movies[id] = {title, director, year, oscar}
    res.status(200).json(movies[id])
}

export const deleteMovie = (req, res) => {
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'not found'})
    }
    movies.splice(id, 1)
    res.status(200).json({message: 'delete successful'})
}
