import { Router } from "express";
import movieServices from "../services/movieServices.js";

const router = Router();

router.get('/create', (req,res) => {
    res.render('movies/create')
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

   await  movieServices.create(movieData)
    res.redirect('/');
});

router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
const movie = await movieServices.getOne(movieId);

    res.render('movies/details', {movie})
})

export default router;