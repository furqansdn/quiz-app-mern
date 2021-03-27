import { Router } from 'express';
import catchAsync from '../../utils/catchAsync';
import AuthController from '../controllers/authController';
import isLogin from '../middleware/isLogin';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);
  const authController = new AuthController();

  route.post('/signup', catchAsync(authController.signup));
  route.post('/signin', catchAsync(authController.signin));

  route.get('/check-auth', catchAsync(isLogin), (req, res) => {
    res.status(200).json({ message: 'Authenticated!' });
  });
};
