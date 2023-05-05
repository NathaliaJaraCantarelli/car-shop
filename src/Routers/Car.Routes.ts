import { Router } from 'express';
import CarController from '../Controllers/Car.Controller';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

export default router;