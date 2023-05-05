import express from 'express';

import departments from './routes/departments';
import regions from './routes/regions';
const router = express.Router();

router.use('/departments', departments);
router.use('/regions', regions);

export default router;