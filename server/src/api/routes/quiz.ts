import { Router } from 'express';
import QuizController from '../controllers/quizController';
import isLogin from '../middleware/isLogin';
import catchAsync from '../../utils/catchAsync';

const router = Router();
export default (app: Router) => {
  app.use('/quiz', router);

  const quizInstance = new QuizController();

  router
    .route('/')
    .get(catchAsync(isLogin), catchAsync(quizInstance.index))
    .post(catchAsync(isLogin), catchAsync(quizInstance.create));
  router
    .route('/:id')
    .get(catchAsync(isLogin), catchAsync(quizInstance.get))
    .patch(catchAsync(isLogin), catchAsync(quizInstance.update))
    .delete(catchAsync(isLogin), catchAsync(quizInstance.delete));
};
