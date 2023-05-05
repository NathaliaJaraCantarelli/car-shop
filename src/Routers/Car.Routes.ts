import { Router } from 'express';
import CarController from '../Controllers/Car.Controller';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());
router.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
router.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());
router.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default router;