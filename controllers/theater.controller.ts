import Theater from '../models/theater.model'
import { Request, Response } from 'express'

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Theater.find({}).limit(30);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}
const get = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Theater.findById({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const create = async (req: Request, res: Response) => {
    try {
        const result = await Theater.create(req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const update = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Theater.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

const deleteTheater = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const result = await Theater.findByIdAndUpdate({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

export { getAll, get, deleteTheater, update, create }

