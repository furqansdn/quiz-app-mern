import { Router } from 'express';

import authRoute from './routes/auth';
import quizCategoryRoute from './routes/quizCategory';

export default () => {
  const app = Router();

  authRoute(app);
  quizCategoryRoute(app);
  return app;
};
