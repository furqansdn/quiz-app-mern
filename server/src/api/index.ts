import { Router } from 'express';

import authRoute from './routes/auth';
import quizCategoryRoute from './routes/quizCategory';
import quizRoute from './routes/quiz';

export default () => {
  const app = Router();

  authRoute(app);
  quizRoute(app);
  quizCategoryRoute(app);
  return app;
};
