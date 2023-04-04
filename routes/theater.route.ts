
import { Router } from "express";

import { getAll, get, update, create, deleteTheater } from "../controllers/theater.controller";

const route = Router();

route.get('/theaters', getAll)
    .get('/theaters/:_id', get)
    .put('/theaters/:_id', update)
    .post('/theaters', create)
    .delete('/theaters/:_id', deleteTheater);

export default route;
