export type NumberValidationFn = (input: number) => boolean;
export type StringValidatorFn = (input: string) => boolean;

/********************************************************************
 * NUMBER VALIDATORS
 * ******************************************************************/
const isGreaterThan = (min: number): NumberValidationFn => {
  return (input: number) => input > min;
};

const isLowerThan = (max: number): NumberValidationFn => {
  return (input: number) => input < max;
};

const isEven = (): NumberValidationFn => {
  return (input: number) => !(input % 2);
};

/********************************************************************
 * STRING VALIDATORS
 * ******************************************************************/

const isValidInteger = (value: string) => {
  if (value === '') {
    return false;
  }
  return Number.isInteger(+value);
};

// TODO: isValidFloat, isValidEmail, isValidPhoneNumber, etc. validators

/********************************************************************
 * EXPORTS
 * ******************************************************************/

export const STRING_VALIDATORS: StringValidatorFn[] = [isValidInteger];

export const NUMBER_VALIDATORS: NumberValidationFn[] = [
  isGreaterThan(0),
  isLowerThan(100),
  isEven(),
];
