import { Service, Inject } from 'typedi';
import { IQuiz } from '../interfaces/IQuiz';
import { BadRequest, HTTPNotFound } from '../utils/AppError';
import QuizCategory from './quizCategory';

@Service()
export default class QuizService {
  constructor(
    @Inject('quizModel') private quiz: Models.QuizModel,
    @Inject((type) => QuizCategory) private quizCategory: QuizCategory
  ) {}

  public async getAll(): Promise<IQuiz[]> {
    try {
      const result = await this.quiz.find();
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getOne(id: string): Promise<IQuiz> {
    try {
      const result = await this.quiz.findById(id);
      if (!result) {
        throw new HTTPNotFound('Quiz not found');
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async create(body: IQuiz): Promise<IQuiz> {
    try {
      const category = await this.quizCategory.getOne(body.category);
      if (!category) {
        throw new BadRequest(`Cannot find category of ${body.category}`);
      }
      return this.quiz.create(body);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: string, body: IQuiz): Promise<IQuiz> {
    try {
      const result = await this.quiz.findOneAndUpdate({ _id: id }, body, {
        new: true,
        runValidators: true,
      });
      if (!result) {
        throw new HTTPNotFound('No Quiz Found');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: string): Promise<unknown> {
    try {
      const doc = await this.quiz.findByIdAndDelete(id);

      if (!doc) {
        throw new HTTPNotFound(`No Such Document Exist`);
      }
      return { message: 'success', data: null };
    } catch (error) {
      throw error;
    }
  }
}
