import type { NumberValidationFn } from './helpers';

export function validate(
  input: string,
  validators: NumberValidationFn[]
): string {
  if (!input || !Number.isInteger(Number(input))) {
    return 'Invalid - empty or non integer.';
  }
  const numericValue = Number(input);

  for (const validator of validators) {
    if (!validator(numericValue)) {
      return 'Invalid number.';
    }
  }

  return 'Valid';
}
