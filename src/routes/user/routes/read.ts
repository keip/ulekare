import { Request, Response } from 'express';
import UserModel from '../../../models/user.model';

const Route = async (req: Request, res: Response) => {
	const userId = req.params.userId;

	const user = await UserModel.findById(userId);
	if (user) {
		res.json({
			success: true,
			user
		})
	} else {
		res.json({
			success: false,
		})
	}
};

export default Route;
