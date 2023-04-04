import { Types, model, Schema } from 'mongoose';

interface IMovie {
    title: string;
    rating: number,
    directors: Array<string>
};

const MovieSchema = new Schema<IMovie>({
    title: {
        type: String,
        required: true
    },
    rating: Number,
    directors: [String]
});

const Movie = model<IMovie>('movies', MovieSchema);

export default Movie;