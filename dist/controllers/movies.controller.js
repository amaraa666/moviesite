"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.create = exports.update = exports.get = exports.getAll = void 0;
const movie_model_1 = __importDefault(require("../models/movie.model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { myVal, myPage } = req.body;
    const count = (myPage - 1) * 30;
    try {
        if (myVal.isFiltered) {
            const totalRows = yield movie_model_1.default.find({ $or: [
                    { title: { $regex: myVal.searchText } },
                    { plot: { $regex: myVal.searchText } },
                    { fullplot: { $regex: myVal.searchText } }
                ] })
                .count();
            const result = yield movie_model_1.default.
                find({
                $or: [
                    { title: { $regex: myVal.searchText } }
                    // { plot: { $regex: myVal.searchText } },
                    // { fullplot: { $regex: myVal.searchText } }
                ]
            }).limit(30).skip(count);
            res.json({ status: true, result, totalRows });
            return;
        }
        const totalRows = yield movie_model_1.default.find({}).count();
        const result = yield movie_model_1.default.find({}).limit(30).skip(count);
        res.json({ status: true, result, totalRows });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
    ;
});
exports.getAll = getAll;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield movie_model_1.default.findById({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
    ;
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_model_1.default.create(req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
    ;
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield movie_model_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
    ;
});
exports.update = update;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield movie_model_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
    ;
});
exports.deleteMovie = deleteMovie;
