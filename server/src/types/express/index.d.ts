import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IQuizCategory } from '../../interfaces/IQuizCategory';
import { QuizDocument } from '../../interfaces/IQuiz';
import { IQuestionDocument } from '../../interfaces/IQuestion';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type QuizCategoryModel = Model<IQuizCategory>;
    export type QuizModel = Model<QuizDocument>;
    export type QuestionModel = Model<IQuestionDocument>;
  }
}
