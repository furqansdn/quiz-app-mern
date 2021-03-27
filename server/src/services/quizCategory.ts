import { Service, Inject } from 'typedi';
import { ObjectId } from 'mongoose';
import { IQuizCategory } from '../interfaces/IQuizCategory';
import { HTTPNotFound } from '../utils/AppError';

@Service()
export default class QuizCategory {
  constructor(
    @Inject('quizCategoryModel')
    private quizCategoryModel: Models.QuizCategoryModel
  ) {}

  public async getOne(id: string): Promise<IQuizCategory> {
    try {
      const result = this.quizCategoryModel.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getAll(): Promise<IQuizCategory[]> {
    try {
      return this.quizCategoryModel.find();
    } catch (error) {
      throw error;
    }
  }

  public async update(id: string, body: IQuizCategory): Promise<IQuizCategory> {
    try {
      const doc = this.quizCategoryModel.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      if (!doc) {
        throw new HTTPNotFound(`No Such Document Exist`);
      }

      return doc;
    } catch (error) {
      throw error;
    }
  }

  public async create(body: IQuizCategory): Promise<IQuizCategory> {
    try {
      const doc = this.quizCategoryModel.create(body);
      return doc;
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: string): Promise<unknown> {
    try {
      const doc = await this.quizCategoryModel.findByIdAndDelete(id);

      if (!doc) {
        throw new HTTPNotFound(`No Such Document Exist`);
      }

      return { message: 'success', data: null };
    } catch (error) {
      throw error;
    }
  }
}
