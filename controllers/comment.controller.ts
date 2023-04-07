import Comment from '../models/comments.model';
import { Request, Response } from 'express';
import Movie from '../models/movie.model';

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Comment.find({}).limit(30).populate({ path: 'movie_id', select: '_id title rating' });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}
const get = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Comment.findById({ _id }).populate({ path: 'movie_id', select: '_id title rating' });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const create = async (req: Request, res: Response) => {
    try {
        const result = await Comment.create(req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const update = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Comment.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

const deleteComment = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const result = await Comment.findByIdAndUpdate({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

export { getAll, get, deleteComment, update, create }

