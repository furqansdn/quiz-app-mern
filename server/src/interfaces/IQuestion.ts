import { Document } from 'mongoose';

export interface IQuestion {
  _id: string;
  quiz: string;
  question: string;
  images: string[];
  questionOptions: IQuestionOptions[];
}

export interface IQuestionOptions {
  _id: string;
  text: string;
  isCorrect: boolean;
}

export interface IQuestionDocument extends Document {}
