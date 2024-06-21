function findMaxValue(arr){
  debugger;
    if (arr.length === 0) {
        // Handle empty array case
        return undefined;
      }
      let maxValue = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
          maxValue = arr[i];
        }
      }
      return maxValue;
    }
const numbers = [3, 7, 1, 90, 4, 6];
const maxNumber = findMaxValue(numbers);
console.log(`The maximum value in the array is: ${maxNumber}`);
