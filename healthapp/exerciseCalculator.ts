import { parseExerciseArgs } from './utils.ts';

interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (hours: number[], target: number): Result => {
  const periodLength = hours.length;
  const trainingDays = hours.filter(hour => hour > 0).length;
  const average =  hours.reduce((accumulator, current) => accumulator + current, 0) / periodLength;
  const success = average >= target;
  
  let rating;
  let ratingDescription;
  if (average < target - 1) {
    rating = 1;
    ratingDescription = 'terrible';
  } else if (average < target + 1) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else {
    rating = 3;
    ratingDescription = 'amazing';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

try {
  const [target, hours] = parseExerciseArgs(process.argv);
  console.log(calculateExercises(hours, target));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong. ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
