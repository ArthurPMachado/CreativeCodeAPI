import { Router } from 'express';
import AddressController from './controllers/AddressController';

import UserController from './controllers/UserController';

const router = Router();

const userController = new UserController();
const addressController = new AddressController();

router.post('/users', userController.create);
router.post('/address', addressController.create);
/**
 router.get('/users', userController.create);
 router.get('/users');
 router.put('/users');
 router.delete('/users');

 router.get('/address');
 router.get('/address');
 router.put('/address');
 router.delete('/address');

*/

export default router;
