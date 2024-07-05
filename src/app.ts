import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import { notFound } from './app/middleware/notFound';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
export const app = express();

app.use(cors());
// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('he he noob');
});

app.use(globalErrorHandler);

app.use(notFound);
