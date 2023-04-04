"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const MovieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    rating: Number,
    directors: [String]
});
const Movie = (0, mongoose_1.model)('movies', MovieSchema);
exports.default = Movie;
