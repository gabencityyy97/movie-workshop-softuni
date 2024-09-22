import { Router } from "express";
import movieServices from "../services/movieServices.js";

const router = Router();

router.get('/create', (req,res) => {
    res.render('movies/create')
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

   await  movieServices.create(movieData)
    res.end();
})

export default router;