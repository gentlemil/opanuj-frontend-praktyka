export function add(value1: number, value2: number): number {
  return (value1 || 0) + (value2 || 0);
}
export function subtract(value1: number, value2: number): number {
  return (value1 || 0) - (value2 || 0);
}
export function multiply(value1: number, value2: number): number {
  return (value1 || 0) * (value2 || 0);
}

export function division(value1: number, value2: number): number {
  if (value2 === 0) {
    return NaN;
  }
  return (value1 || 0) / value2;
}
