import { Router } from "express";
import { getAll, get, update, deleteMovie, create } from "../controllers/movies.controller";
const route = Router();


route.get('movies', getAll)
    .get('/movies/:_id', get)
    .put('/movies/:_id', update)
    .post('/movies', create)
    .delete('/movies/_id', deleteMovie);

export default route;
