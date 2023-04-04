import {Types , Schema , model} from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String , 
        required: true
    },
    email: String,
    password: String
})

const User = model<IUser>('users' , userSchema);

export default User;