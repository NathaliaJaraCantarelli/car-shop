import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.Controller';

const router = Router();

router.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotor(),
);

router.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);

router.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default router;
