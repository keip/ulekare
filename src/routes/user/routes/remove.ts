import { Request, Response } from 'express';
import UserModel from '../../../models/user.model';

const Route = async (req: Request, res: Response) => {
	const userId = req.params.userId;

	await UserModel.findByIdAndRemove(userId);

	res.json({
		success: true,
	})
};

export default Route;
