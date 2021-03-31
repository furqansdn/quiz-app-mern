import faker from 'faker';
import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import QuizService from '../../services/quiz';
import QuestionService from '../../services/question';
import QuizCategoryService from '../../services/quizCategory';
import autobind from '../../utils/autobindDecorator';

export default class Faker {
  private quizService: QuizService;
  private questionService: QuestionService;
  private quizCategoryService: QuizCategoryService;

  constructor() {
    this.quizService = Container.get(QuizService);
    this.questionService = Container.get(QuestionService);
    this.quizCategoryService = Container.get(QuizCategoryService);
  }

  @autobind
  public async quizFaker(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<QuizService[]> {
    let docNumber: number = +req.query.doc || 5;

    let fakeQuiz = [];
    for (let i = 0; i < docNumber; i++) {
      const quiz = {};
    }

    // Not Ready
    return req.body;
  }
}
