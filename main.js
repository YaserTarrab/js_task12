
// 1) Task

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}


// 2) Task

let mixedArray = [10, "Yaser", 4, "Red", 5, "Yallow"];
let strings = [];
let numbers_1 = [];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "string") {
    strings.push(mixedArray[i]);
  } else if (typeof mixedArray[i] === "number") {
    numbers_1.push(mixedArray[i]);
  }
}

console.log("Strings:", strings);
console.log("Numbers:", numbers_1);


// 3) Task 

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}


// 4) Task

let nums = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log("Sum:", sum);


// 5) Task

let items = ["Apple", "Yaser", "kahled"];
let search = "Yaser";
let found = false;

for (let i = 0; i < items.length; i++) {
  if (items[i] === search) {
    found = true;
    break;
  }
}

if (found) {
  console.log(`${search} is found.`);
} else {
  console.log(`${search} is not found.`);
}

// 6) Task

let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
  num[i] *= 2;
}

console.log("Doubled Array:", num);


// 7) Task

let numbers_2 = [10, 20, 485, 6, 100, 5];
let max = numbers[0];

for (let i = 1; i < numbers_2.length; i++) {
  if (numbers_2[i] > max) {
    max = numbers_2[i];
  }
}

console.log("Largest Number:", max);


// 8) Task

let mixed_Array = [10, "Apple", 20, "Orange", 30, "Banana"];
let filteredArray = [];

for (let i = 0; i < mixed_Array.length; i++) {
  if (typeof mixed_Array[i] === "number") {
    filteredArray.push(mixed_Array[i]);
  }
}

console.log("Filtered Array:", filteredArray);


// 9) Task


for (let i = 10; i >= 1; i--) {
    console.log(i);
  }


  // 10) Task

  let threeDimArray = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]]
  ];
  
  for (let i = 0; i < threeDimArray.length; i++) {
    for (let j = 0; j < threeDimArray[i].length; j++) {
      for (let k = 0; k < threeDimArray[i][j].length; k++) {
        threeDimArray[i][j][k] *= 2;
      }
    }
  }
  
  console.log("Modified 3D Array:", threeDimArray);