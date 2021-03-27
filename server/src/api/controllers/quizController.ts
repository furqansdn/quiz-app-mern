import { Request, Response, NextFunction } from 'express';

import { Container } from 'typedi';
import QuizService from '../../services/quiz';
import autobind from '../../utils/autobindDecorator';

export default class QuizController {
  private quizService: QuizService;
  constructor() {
    this.quizService = Container.get(QuizService);
  }

  @autobind
  public async index(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.quizService.getAll();

    res.status(200).json(result);
  }

  @autobind
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.quizService.getOne(req.params.id);

    res.status(200).json(result);
  }

  @autobind
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.quizService.create(req.body);
    res.status(200).json(result);
  }

  @autobind
  public async update(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizService.update(req.params.id, req.body);

    res.status(200).json(result);
  }

  @autobind
  public async delete(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizService.delete(req.params.id);

    res.status(200).json(result);
  }
}
