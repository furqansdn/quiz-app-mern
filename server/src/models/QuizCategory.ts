import mongoose from 'mongoose';
import { IQuizCategory } from '../interfaces/IQuizCategory';

const quizCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IQuizCategory>(
  'QuizCategory',
  quizCategorySchema
);
