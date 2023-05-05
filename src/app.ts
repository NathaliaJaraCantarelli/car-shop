import express from 'express';
import carRoutes from './Routers/Car.Routes';
import motorcycleRoutes from './Routers/Motorcycle.Routes';
import VerifyErrors from './Middlewares/VerifyErrors';

const app = express();
app.use(express.json());

app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(VerifyErrors.verify);

export default app;
