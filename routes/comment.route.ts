
import { Router } from "express";

import { getAll, get, update, create, deleteComment } from "../controllers/comment.controller";

const route = Router();

route.get('/comment', getAll)
    .get('/comment/:_id', get)
    .put('/comment/:_id', update)
    .post('/comment', create)
    .delete('/comment/:_id', deleteComment);

export default route;
