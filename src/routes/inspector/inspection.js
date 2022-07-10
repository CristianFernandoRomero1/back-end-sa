import {Router} from 'express';
import {inspectionList} from '../../controllers/inspector/inspection.js';
const router = Router();
router.post('/inspectionlist', inspectionList);
export default router;