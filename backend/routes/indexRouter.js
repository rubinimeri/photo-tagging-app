import { Router } from 'express';
import indexController from '../controllers/indexController.js';

const router = Router();

router.post('/player', indexController.gameStart);
router.put('/player', indexController.gameEnd);
router.put('/check-coordinates', indexController.checkCoordinates);

export default router;

