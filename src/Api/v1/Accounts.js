import { Router } from 'express';

import Accounts from '../../Controllers/Accounts';

const router = Router();

router.get('/', Accounts.getAccounts);
router.get('/:account_id', Accounts.getAccount);

export default router;
