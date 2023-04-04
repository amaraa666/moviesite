import {Types , Schema , model} from 'mongoose';

interface IComments{
    name: string;
    email: string;
    text: Array<string>;
    movie_id: String;
    date: Date;
}

const commentSchema = new Schema<IComments>({
    name: String,
    email: String,
    text: [String],
    movie_id: {
        type: Types.ObjectId,
        ref: "movies"
    }
})

const Comments = model<IComments>('comments' , commentSchema);

export default Comments;