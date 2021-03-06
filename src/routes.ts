import { Router } from 'express';
import AddressController from './controllers/AddressController';

import UserController from './controllers/UserController';

const authenticated = require('./middlewares/auth');
const auth = require('./handlers/auth');

const router = Router();

const userController = new UserController();
const addressController = new AddressController();

router.get('/users', userController.listAll);
router.get('/users/:id', userController.listOne);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.get('/address', addressController.listAll);
router.get('/address/:id', addressController.listOne);
router.post('/users/:email/address', addressController.create);
router.put('/address/:id', addressController.update);
router.delete('/address/:id', addressController.delete);

router.post('/auth', auth.authenticate);

export default router;
