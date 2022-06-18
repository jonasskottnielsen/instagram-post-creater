import { Router } from 'express';

import Stats from '../../Controllers/Stats.js';

import Auth from '../../Middleware/Auth.js';

const router = Router();

router.get('/', Auth.validateOrigin, Stats.getTotalDownloads);
router.get('/:partnumber', Auth.validateOrigin, Stats.getTotalDownloadsOfFile);

export default router;
