import mongoose from 'mongoose';
import { QuizDocument } from '../interfaces/IQuiz';

const quizSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'name is required'] },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'category is required'],
    ref: 'Quiz_Category',
  },
  timeLimit: {
    type: Number,
    required: [
      function (this: QuizDocument) {
        return this.isLimit;
      },
      'time limit is required',
    ],
  },
  isLimit: { type: Boolean, default: false },
});

export default mongoose.model<QuizDocument>('Quiz', quizSchema);
