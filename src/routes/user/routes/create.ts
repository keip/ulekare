import { Request, Response } from 'express';
import UserModel from '../../../models/user.model';

const Route = async (req: Request, res: Response) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const birthDate = req.body.birthDate;
	const email = req.body.email;
	const web = req.body.web;

	const user = {
		firstName,
		lastName,
		birthDate,
		email,
		web,
	};

	const newUser = new UserModel(user);

	newUser
		.save()
		.then(user => {
			res.json({
				success: true,
				user,
			});
		})
		.catch(err => {
			res.json({
				success: false,
				err,
			});
		});
};

export default Route;
