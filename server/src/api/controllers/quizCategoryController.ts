import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';

import QuizCategory from '../../services/quizCategory';
import autobind from '../../utils/autobindDecorator';

export default class QuizCategoryController {
  private quizCategoryService: QuizCategory;

  constructor() {
    this.quizCategoryService = Container.get(QuizCategory);
  }

  @autobind
  public async index(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizCategoryService.getAll();

    res.status(200).json(result);
  }

  @autobind
  public async create(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizCategoryService.create(req.body);

    res.status(200).json(result);
  }

  @autobind
  public async get(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizCategoryService.getOne(req.params.id);

    res.status(200).json(result);
  }

  @autobind
  public async update(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizCategoryService.update(
      req.params.id,
      req.body
    );

    res.status(200).json(result);
  }

  @autobind
  public async delete(req: Request, res: Response, next: NextFunction) {
    const result = await this.quizCategoryService.delete(req.params.id);

    res.status(200).json(result);
  }
}
