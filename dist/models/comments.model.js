"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    text: [String],
    movie_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "movies"
    }
});
const Comments = (0, mongoose_1.model)('comments', commentSchema);
exports.default = Comments;
