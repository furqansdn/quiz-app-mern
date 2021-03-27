import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Container } from 'typedi';
import { BadRequest } from '../../utils/AppError';
import config from '../../config';
import { IUser } from '../../interfaces/IUser';
import { Document } from 'mongoose';

const verifyToken = (token: string, secret: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (secret) {
      jwt.verify(token, secret, function (err, decoded) {
        if (err) {
          return reject(err);
        }
        if (typeof decoded === 'object') {
          return resolve(decoded as any);
        }
      });
    }
  });
};

export default async (req: Request, res: Response, next: NextFunction) => {
  let token: string;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new BadRequest('You are not authenticated');
  }

  const decode = await verifyToken(token, config.jwt.secret);

  const userModel: Models.UserModel = Container.get('userModel');
  const user = await userModel.findById(decode.id);

  if (!user) {
    throw new BadRequest('User of this token is no longer exist');
  }

  req.currentUser = user;
  next();
};
