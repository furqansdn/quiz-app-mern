import { Router } from 'express';

import authRoute from './routes/auth';
import quizCategoryRoute from './routes/quizCategory';
import quizRoute from './routes/quiz';
import questionRoute from './routes/question';

export default () => {
  const app = Router();

  authRoute(app);
  quizRoute(app);
  questionRoute(app);
  quizCategoryRoute(app);
  return app;
};
