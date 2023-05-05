import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.Controller';

const router = Router();

router.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotor(),
);

export default router;
