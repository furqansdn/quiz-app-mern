import { Router } from 'express';
import { Container } from 'typedi';
import catchAsync from '../../utils/catchAsync';
import isLogin from '../middleware/isLogin';
import QuestionController from '../controllers/questionController';
import QuestionService from '../../services/question';

export default (app: Router) => {
  const router = Router();
  app.use('/quiz', router);

  const questionController = new QuestionController();

  router
    .route('/:id/question')
    .post(catchAsync(isLogin), catchAsync(questionController.create));
};
