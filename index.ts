import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TheaterRoute from './routes/theater.route';
import MovieRoute from './routes/movie.route';
import UserRoute from './routes/user.route';
import CommentRoute from './routes/comment.route';
import cors from 'cors';


const app: Express = express();
dotenv.config();

const url: string = process.env.MONGO_DB_URL || "";

mongoose.connect(url)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))



app.use(express.json())
app.use('/api', TheaterRoute);
app.use('/api', MovieRoute);
app.use('/api' , UserRoute);
app.use('/api', CommentRoute );


app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ status: true, message: 'hello api' });
});

app.listen(process.env.PORT, () => {
    console.log('server is running' + process.env.PORT);
});
