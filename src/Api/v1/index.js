import express from 'express';

import Accounts from './Accounts'

const router = express.Router();

router.use('/accounts', Accounts);


router.get('/*', (request, response) => response.status(404).json({ message: 'Invalid1 endpoint' }));
router.post('/*', (request, response) => response.status(404).json({ message: 'Invalid2 endpoint' }));

export default router;
