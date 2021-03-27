import { Router } from 'express';

import QuizCategoryController from '../controllers/quizCategoryController';
import isLogin from '../middleware/isLogin';
import catchAsync from '../../utils/catchAsync';

const route = Router();
export default (app: Router) => {
  app.use('/quiz/category', route);

  const quizCategory = new QuizCategoryController();

  route
    .route('/')
    .get(catchAsync(isLogin), catchAsync(quizCategory.index))
    .post(catchAsync(isLogin), catchAsync(quizCategory.create));

  route
    .route('/:id')
    .get(catchAsync(isLogin), catchAsync(quizCategory.get))
    .patch(catchAsync(isLogin), catchAsync(quizCategory.update))
    .delete(catchAsync(isLogin), catchAsync(quizCategory.delete));
};
