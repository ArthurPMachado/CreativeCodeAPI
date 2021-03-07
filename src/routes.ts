import { Router } from 'express';

import UserController from './controllers/UserController';

const router = Router();

const userController = new UserController();

router.get('/users', userController.create);
/**
 router.get('/users');
 router.post('/users');
 router.put('/users');
 router.delete('/users');

 router.get('/address');
 router.get('/address');
 router.post('/address');
 router.put('/address');
 router.delete('/address');

*/

export default router;
