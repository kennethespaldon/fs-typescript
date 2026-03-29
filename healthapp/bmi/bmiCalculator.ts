const bmiCalculator = (height: number, weight: number) => {
  const bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 16) {
    console.log('Underweight (severe thinness)');
  } else if (bmi < 17) {
    console.log('Underweight (moderate thinness');
  } else if (bmi < 18.5) {
    console.log('Underweight (mild thinness');
  } else if (bmi < 25) {
    console.log('Normal range');
  } else if (bmi < 30) {
    console.log('Obese (Class I)');
  } else if (bmi < 40) {
    console.log('Obese (Class II');
  } else {
    console.log('Obese (Class III');
  }
};

console.log(bmiCalculator(180, 74));
