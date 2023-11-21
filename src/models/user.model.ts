import mongoose from 'mongoose';
import User from '../types/user';

const db = mongoose.connection.useDb('ulekare')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		unique: true,
	},
	birthDate: Date,
	web: {
		type: String,
		require: false,
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
});

type UserDocument = User & mongoose.Document<User, any, User>;

export default db.model<UserDocument>('User', UserSchema);
