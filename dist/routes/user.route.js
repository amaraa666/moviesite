"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const route = (0, express_1.Router)();
route.get('/usesr', user_controller_1.getAll)
    .get('/usesr/:_id', user_controller_1.get)
    .put('/usesr/:_id', user_controller_1.update)
    .post('/usesr', user_controller_1.create)
    .delete('/usesr/:_id', user_controller_1.deleteUser);
exports.default = route;
