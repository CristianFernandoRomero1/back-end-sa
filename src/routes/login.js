import {Router} from 'express';
import {user} from '../controllers/login.js';

const router = Router();
router.post('/login', user);

export default router;