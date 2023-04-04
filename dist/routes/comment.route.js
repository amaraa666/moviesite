"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const route = (0, express_1.Router)();
route.get('/comment', comment_controller_1.getAll)
    .get('/comment/:_id', comment_controller_1.get)
    .put('/comment/:_id', comment_controller_1.update)
    .post('/comment', comment_controller_1.create)
    .delete('/comment/:_id', comment_controller_1.deleteComment);
exports.default = route;
