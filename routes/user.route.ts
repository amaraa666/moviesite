
import { Router } from "express";

import { getAll, get, update, create, deleteUser } from "../controllers/user.controller";

const route = Router();

route.get('/usesr', getAll)
    .get('/usesr/:_id', get)
    .put('/usesr/:_id', update)
    .post('/usesr', create)
    .delete('/usesr/:_id', deleteUser);

export default route;
