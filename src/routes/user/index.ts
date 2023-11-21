import { Router } from 'express';

const router = Router();

import createRoute from './routes/create';
import listRoute from './routes/list';
import readRoute from './routes/read';
import removeRoute from './routes/remove';
import updateRoute from './routes/update';

router.route('/user/list').get(listRoute);
router.route('/user/read/:userId').get(readRoute);
router.route('/user/create').put(createRoute);
router.route('/user/update').post(updateRoute);
router.route('/user/remove/:userId').delete(removeRoute);

export default router;
