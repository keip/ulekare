import { Request, Response } from 'express';
import UserModel from '../../../models/user.model';

const Route = async (req: Request, res: Response) => {
	const userId = req.body._id;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const birthDate = req.body.birthDate;
	const email = req.body.email;
	const web = req.body.web;

	const result = await UserModel.findByIdAndUpdate(
		userId, 
		{
			firstName,
			lastName,
			birthDate,
			email,
			web,
		},
		{
			new: true
		}
	);

	res.json({
		success: true,
		newUser: result,
	});
};

export default Route;
