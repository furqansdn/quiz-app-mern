import mongoose from 'mongoose';

import { IQuestionDocument } from '../interfaces/IQuestion';

const questionOptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true, default: false },
});

const questionSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Quiz is required'],
    ref: 'Quiz',
  },
  question: {
    type: String,
    required: [true, 'Question is required'],
  },
  images: [String],
  questionOptions: [questionOptionSchema],
});

export default mongoose.model<IQuestionDocument>('Question', questionSchema);
