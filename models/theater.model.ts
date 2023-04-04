

import { Types, Schema, model } from 'mongoose';
interface ITheater {
    theaterId: number;
    location: {
        address: {
            street: string;
            city: string;
            state: string;
            zipcode: string;
        },
        geo: {
            type: 'Point' | "polygon" | "lineString";
            coordinates: Array<number>
        }
    }
}

const theaterSchema = new Schema<ITheater>({
    theaterId: {
        type: Number,
        required: true
    },
    location: {
        address: {
            street: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: String,
            enum: ['Point', "polygon", "lineString"],
            coordinates: [Number]
        }
    }
})

const Theater = model<ITheater>('theaters', theaterSchema);

export default Theater;
