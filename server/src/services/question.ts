import { Service, Inject } from 'typedi';
import { IQuestion } from '../interfaces/IQuestion';

@Service()
export default class Question {
  constructor(
    @Inject('questionModel') private questionModel: Models.QuestionModel
  ) {}

  public async create(body: IQuestion): Promise<any> {
    try {
      const doc = await this.questionModel.create(body);
      return doc;
    } catch (error) {
      throw error;
    }
  }
}
