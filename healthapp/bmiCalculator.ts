import { parseBmiArgs } from './utils.ts';

export const bmiCalculator = (height: number, weight: number) => {
  const bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 16) {
    return 'Underweight (severe thinness)';
  } else if (bmi < 17) {
    return 'Underweight (moderate thinness';
  } else if (bmi < 18.5) {
    return 'Underweight (mild thinness';
  } else if (bmi < 25) {
    return 'Normal range';
  } else if (bmi < 30) {
    return 'Overweight (Pre-obese)';
  } else if (bmi < 35) {
    return 'Obese (Class I)';
  } else if (bmi < 40) {
    return 'Obese (Class II)';
  } else {
    return 'Obese (Class III)';
  }
};

if (process.argv[1] === import.meta.filename) {
  try {
    const [height, weight] = parseBmiArgs(process.argv);
    console.log(bmiCalculator(height, weight));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong. ';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }
}
