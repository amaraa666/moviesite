import { Request, Response } from "express";
import Movies from "../models/movie.model";

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Movies.find({});
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

const get = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movies.findById({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};


const create = async (req: Request, res: Response) => {
    try {
        const result = await Movies.create(req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

const update = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movies.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

const deleteMovie = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movies.findByIdAndDelete({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

export { getAll, get, update, create, deleteMovie };