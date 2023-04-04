"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const theaterSchema = new mongoose_1.Schema({
    theaterId: {
        type: Number,
        required: true
    },
    location: {
        address: {
            street: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: String,
            enum: ['Point', "polygon", "lineString"],
            coordinates: [Number]
        }
    }
});
const Theater = (0, mongoose_1.model)('theaters', theaterSchema);
exports.default = Theater;
