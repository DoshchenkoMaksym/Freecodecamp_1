/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour1(arr) {

    let newArr = [];
    
    for (let item of arr) {
        
        newArr.push(Math.max.apply(null, item));
        
    };

    return newArr;

  };

  function largestOfFour2(arr) {

      return arr = arr.map(item => Math.max.apply(null, item));

  };
  