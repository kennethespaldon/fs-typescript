import { bmiCalculator } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';
import { isNotNumber } from './utils.ts';
import express from 'express';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if (isNotNumber(req.query.height as string) || isNotNumber(req.query.weight as string)) {
    res.status(400).send({ error: 'malformatted parameters' });
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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const hours = req.body.daily_exercises;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const target = req.body.target;

  if (hours === undefined || target === undefined) {
    res.status(400).send({ error: 'parameters missing' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  hours.forEach((hour) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (isNotNumber(hour)) {
      res.status(400).send({ error: 'malformatted parameters' });
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (isNotNumber(target)) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return res.send(calculateExercises(hours, target));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});