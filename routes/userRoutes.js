import express  from 'express';
import { admin, manager, user } from '../controller/userController.js';
import { tokenValid } from '../middleware/authMiddleware.js';
import { roleBasedAccess } from '../middleware/roleMiddleware.js';

 const router = express.Router();


router.get('/user',tokenValid,roleBasedAccess('admin','user','manager'),user);
router.get('/admin',tokenValid,roleBasedAccess('admin'),admin);
router.get('/manager',tokenValid,roleBasedAccess('manager','admin'),manager);


export const userRouter  = router;