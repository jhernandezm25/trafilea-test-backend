import { Router } from 'express';
import NumberFunction from '../functions/numbers.function';


const router = Router();

router.post('/print', NumberFunction.printNumbers);
router.post('/save', NumberFunction.saveNumber);
router.get('/get/:numberInfo', NumberFunction.getNumberValue);
router.get('/get', NumberFunction.getAllNumbers);

export default router;
