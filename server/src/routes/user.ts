import { Router } from 'express';

import hedera from '@steakcoin/hedera';

const router = Router();

const hederaConfig = hedera.getHederaCreds();

router.get('/user/hedera', async (req, res) => {
  if (req.user) {
    const hUser = await hedera.getUserFromUserTable(
      (req.user as any)?.id,
      hederaConfig
    );

    res.json({
      success: true,
      user: hUser,
      cookies: req.cookies,
    });
  } else {
    res.redirect('/api/v1/auth/login/failed');
  }
});

export default router;
