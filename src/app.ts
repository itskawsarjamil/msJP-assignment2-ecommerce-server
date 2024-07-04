import express, { Request, Response } from 'express';
import cors from 'cors';
export const app = express();

app.use(cors());
// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('he he noob');
});
