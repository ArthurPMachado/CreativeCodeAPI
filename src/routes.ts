import { Router } from 'express';
import AddressController from './controllers/AddressController';

import UserController from './controllers/UserController';

const router = Router();

const userController = new UserController();
const addressController = new AddressController();

router.get('/users', userController.listAll);
router.get('/users/:id', userController.listOne);
router.post('/users', userController.create);

router.post('/address', addressController.create);
/**
 router.put('/users');
 router.delete('/users');

 router.get('/address');
 router.get('/address');
 router.put('/address');
 router.delete('/address');

*/

export default router;
