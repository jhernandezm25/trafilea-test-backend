import { Router } from 'express';
import NumberFunction from '../functions/numbers.function';


const router = Router();

router.post('/printNumbers', NumberFunction.printNumbers);

export default router;
