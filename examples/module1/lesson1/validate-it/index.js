/**
 * I. CODE REVIEW
 * 1. Number.isInteger(input.value) - input.values is a string, so it'll always return false
 * 2. result.innerHTML = 'Valid' assignment called after if else statement, so it'll always overwrite the result
 * 3. Number(input.value) > 0 && Number(input.value) < 100 && Number(input.value) % 2 === 0 - instead of calling function Number()
 *    several times, better approach would be to assign it to a variable and use it (less operations)
 * 4. Using innerHTML is not a good practice when we aren't sure about the content of the variable, better to use textContent
 */

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if (input.value) {
      if (Number.isInteger(input.value)) {
        // 1.
        if (
          Number(input.value) > 0 &&
          Number(input.value) < 100 &&
          Number(input.value) % 2 === 0 // 3.
        ) {
          result.innerHTML = 'Valid';
        } else {
          result.innerHTML = 'Invalid';
        }
        result.innerHTML = 'Valid'; // 2. and 4.
      } else {
        result.innerHTML = 'Invalid';
      }
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
