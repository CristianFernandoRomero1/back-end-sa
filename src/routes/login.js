import {Router} from 'express';
import {user} from '../controllers/login.js';
import {inspectionList} from '../controllers/inspector/inspection.js';

const router = Router();
router.post('/login', user);
router.post('/inspectionlist', inspectionList);

export default router;