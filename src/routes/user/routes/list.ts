import { Request, Response } from 'express';
import UserModel from '../../../models/user.model';
import { PipelineStage } from 'mongoose';

const Route = async (req: Request, res: Response) => {
	const page = parseInt(req.query.page as string);
	const pageSize = parseInt(req.query.pageSize as string);

	const select = {};
	const aggregate: PipelineStage[] = [];

	// select
	aggregate.push({
		$match: select,
	});

	// skip & limit
	const skip = pageSize > 0 ? page * pageSize : page;
	const limit = pageSize;
	aggregate.push({
		$facet: {
			users: [{ $skip: skip }, { $limit: limit }],
			totalCount: [
				{
					$count: 'count',
				},
			],
		},
	});

	UserModel
		.aggregate(aggregate)
		.then(results => {
			const result = results[0];
			res.json({
				success: true,
				users: result.users,
				page,
				totalCount: result.totalCount,
			});
		}).catch(err => {
			res.json({
				success: false,
				err
			})
		});
};

export default Route;
