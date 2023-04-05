"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const theater_route_1 = __importDefault(require("./routes/theater.route"));
const movie_route_1 = __importDefault(require("./routes/movie.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const comment_route_1 = __importDefault(require("./routes/comment.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const url = process.env.MONGO_DB_URL || "";
mongoose_1.default
    .connect(url)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', theater_route_1.default);
app.use('/api', movie_route_1.default);
app.use('/api', user_route_1.default);
app.use('/api', comment_route_1.default);
app.get('/', (req, res) => {
    res.json({ status: true, message: 'hello api' });
});
app.listen(process.env.PORT, () => {
    console.log('server is running' + process.env.PORT);
});
