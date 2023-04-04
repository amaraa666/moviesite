import User from '../models/user.model'
import { Request, Response } from 'express'

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await User.find({}).limit(30);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}
const get = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await User.findById({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const create = async (req: Request, res: Response) => {
    try {
        const result = await User.create(req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}


const update = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await User.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const result = await User.findByIdAndUpdate({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
}

export { getAll, get, deleteUser, update, create }

