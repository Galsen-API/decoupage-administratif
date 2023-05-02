import express from 'express';

import departments from './routes/departments';
const router = express.Router();

router.use('/departments', departments);

export default router;