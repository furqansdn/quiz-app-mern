import mongoose from 'mongoose';

export interface IQuizCategory extends mongoose.Document {
  _id: mongoose.ObjectId;
  name: string;
}
