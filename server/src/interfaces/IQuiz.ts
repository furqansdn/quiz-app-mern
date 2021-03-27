import { Document } from 'mongoose';

export interface IQuiz {
  _id?: string;
  title: string;
  category: string;
  timeLimit?: number;
  isLimit?: boolean;
}

export interface QuizDocument extends IQuiz, Document {
  readonly _id?: string;
}
