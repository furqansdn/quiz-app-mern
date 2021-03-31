import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import QuestionService from '../../services/question';
import autobind from '../../utils/autobindDecorator';

export default class QuestionController {
  private questionService: QuestionService;
  constructor() {
    this.questionService = Container.get(QuestionService);
  }

  @autobind
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    req.body.quiz = req.params.id;
    const result = await this.questionService.create(req.body);
    res.status(200).send(result);
  }
}
