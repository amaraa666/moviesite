"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
const route = (0, express_1.Router)();
route.get('/movies', movies_controller_1.getAll)
    .get('/movies/:_id', movies_controller_1.get)
    .put('/movies/:_id', movies_controller_1.update)
    .post('/movies', movies_controller_1.create)
    .delete('/movies/:_id', movies_controller_1.deleteMovie);
exports.default = route;
