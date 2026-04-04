import { bmiCalculator } from './bmiCalculator.ts';
import { isNotNumber } from './utils.ts';
import express from 'express';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if (isNotNumber(req.query.height as string) || isNotNumber(req.query.weight as string)) {
    res.status(400).send({ error: 'malformatted errors' });
  }
  
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  const bmi = bmiCalculator(height, weight);

  res.send({
    weight,
    height,
    bmi
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});