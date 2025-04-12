// Observer pattern

import { NUMBER_VALIDATORS } from './helpers';
import { validate } from './validators';

class Subject {
  private observers: Array<() => void> = [];

  subscribe(observer: () => void) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}

function main() {
  // 1. Declare variables
  const input = document.querySelector('input')! as HTMLInputElement;
  const validateBtn = document.getElementById(
    'validation-btn'
  )! as HTMLButtonElement;
  const cleanUpBtn = document.getElementById(
    'cleanup-btn'
  )! as HTMLButtonElement;
  const result = document.getElementById('result')! as HTMLElement;

  // Declare subjects for the buttons
  const validateSubject$: Subject = new Subject();
  const cleanUpSubject$: Subject = new Subject();

  // Subscribe observers to the validate button
  validateSubject$.subscribe(() => {
    result.innerHTML = validate(input.value, NUMBER_VALIDATORS);
  });

  cleanUpSubject$.subscribe(() => {
    input.value = '';
    result.innerHTML = '';
  });

  validateBtn.addEventListener('click', () => validateSubject$.notify());
  cleanUpBtn.addEventListener('click', () => cleanUpSubject$.notify());
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
