import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IQuizCategory } from '../../interfaces/IQuizCategory';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type QuizCategoryModel = Model<IQuizCategory>;
  }
}
