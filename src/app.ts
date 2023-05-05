import express from 'express';
import carRoutes from './Routers/Car.Routes';
import VerifyErrors from './Middlewares/VerifyErrors';

const app = express();
app.use(express.json());

app.use(carRoutes);
app.use(VerifyErrors.verify);

export default app;
