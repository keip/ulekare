import { Router } from 'express';

const router = Router();

import CreateRoute from './routes/create';
import ListRoute from './routes/list';
import ReadRoute from './routes/read';
import removeRoute from './routes/remove';
import updateRoute from './routes/update';

router.route('/user/list').get((req, res) => {
	return ListRoute(req, res);
});

router.route('/user/read/:userId').get((req, res) => {
	return ReadRoute(req, res);
});

router.route('/user/create').put((req, res) => {
	return CreateRoute(req, res);
});

router.route('/user/update').post((req, res) => {
	return updateRoute(req, res);
});

router.route('/user/remove/:userId').delete((req, res) => {
	return removeRoute(req, res);
});

export default router;
