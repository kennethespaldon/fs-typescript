export const isNotNumber = (number: string): boolean => {
  const arg = Number(number);
  if (typeof arg === 'number' && !isNaN(arg)) {
    return false;
  }
  
  return true;
};

export const parseExerciseArgs = (args: string[]): [number, number[]] => {
  if (args.length < 4) throw new Error('Not enough arguments provided!');

  if (isNotNumber(args[2])) throw new Error('First provided value was not a number!');
  const target = Number(args[2]);

  const hours = [];
  for (let i = 3; i < args.length; i++) {
    if (isNotNumber(args[i])) {
      throw new Error('Provided values were not numbers!');
    }

    hours.push(Number(args[i]));
  }

  return [target, hours];
};

export const parseBmiArgs = (args: string[]): [number, number] => {
  if (args.length < 4) throw new Error('Not enough arguments provided!');
  if (args.length > 4) throw new Error('Too many arguments provided!');
  
  if (isNotNumber(args[2]) || isNotNumber(args[3])) {
    throw new Error('Provided values were not numbers!');
  };

  const height = Number(args[2]);
  const weight = Number(args[3]);

  return [height, weight];
};