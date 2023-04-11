import { Request, Response } from "express";
import Movies from "../models/movie.model";

const getAll = async (req: Request, res: Response): Promise<void> => {
    const {myVal , myPage} = req.body
    const count = (myPage -1) * 30 
    try {
        if (myVal.isFiltered) {
            const totalRows = await Movies.find(
                {$or: [
                        { title: { $regex: myVal.searchText } },
                        { plot: { $regex: myVal.searchText } },
                        { fullplot: { $regex: myVal.searchText } }
                    ]})
                    .count();
            const result = await Movies.
                find({
                    $or: [
                        { title: { $regex: myVal.searchText } }
                        { plot: { $regex: myVal.searchText } },
                        { fullplot: { $regex: myVal.searchText } }
                    ]
                }).limit(30).skip(count)
            res.json({ status: true, result, totalRows })
            return
        }
        const totalRows = await Movies.find({}).count();
        const result = await Movies.find({}).limit(30).skip(count)
        res.json({ status: true, result, totalRows })
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
        res.json({ status: true, result });
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