function selectionSort(arr) {
  let sortedArr = [];
  let copy = [...arr]
  for (i = 0; i < copy.length; i++) {
    let smallestValue = Math.min(...arr)
    sortedArr.push(smallestValue)
    arr.splice(arr.indexOf(smallestValue), 1);
  }
  return sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1000, -4, -1, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, -4, -100]));

  console.log("");


  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  let startTime = Date.now()

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

/******************************************************************
 * initialize an new empty array to hold sorted values
 *
 * iterate through the input array:
 *    compare the current value each value already in the new array
 *    slice in the value to the array
 * 
 * 
 * ***************************************************************/
