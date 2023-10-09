//1.Write a program that takes an array of elements and counts the occurrences of each element using a Map.

function countOccurrences(arrMain) {
  const elementCountMap = new Map();

  for (let i = 0; i < arrMain.length; i++) {
    const element = arrMain[i];
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  return elementCountMap;
}

const arrMain = [1, 2, 3, 2, 1, 4, 5, 4];
const result = countOccurrences(arrMain);

console.log(result);

//2.Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.

const hasSubarrayWithSum = (arr, targetSum) => {
  const seen = new Set();
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;

    if (currentSum === targetSum || seen.has(currentSum - targetSum)) {
      return true;
    }

    seen.add(currentSum);
  }

  return false;
};

const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const resultSub = hasSubarrayWithSum(arr, targetSum);

console.log(resultSub);

//3.Write a program that takes an array of strings and groups anagrams together using a Map.

function groupAnagrams(arrayOfWords) {
  const anagramMap = new Map();

  for (const word of arrayOfWords) {
    const sortedWord = word.split("").sort().join("");
    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }
    anagramMap.get(sortedWord).push(word);
  }

  return anagramMap;
}
const arrayOfWords = ["eat", "tea", "tan", "ate", "nat", "bat"];
const resultAnagram = groupAnagrams(arrayOfWords);
console.log(resultAnagram);

//4. Write a program that takes an array of strings and reverses each string in the array using the array methods.

const arrayOfItems = ["apple", "banana", "orange"];
const reversedArray = arrayOfItems.map((str) => {
  return str.split("").reverse().join("");
});
console.log(reversedArray);

//5. Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.

const arrayOfNum = [1, 2, 4, 7, 9, 16, 25];
const perfectSquares = arrayOfNum.filter((num) => Math.sqrt(num) % 1 === 0);
console.log(perfectSquares);

//6.Write a program that takes two objects and merges them into a single object

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };
const mergedResult = mergeObjects(obj1, obj2);
console.log(mergedResult);

//7.Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().

const arrOfObj = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];
function convertArrayToObject(arrOfObj) {
  return Object.assign(
    {},
    ...arrOfObj.map((item) => ({ [item.key]: item.value }))
  );
}
const output = convertArrayToObject(arrOfObj);
console.log(output);

//8.Write a program that takes a function with an array parameter and destructure the array inside the function.
function displayArray([first, second, ...rest]) {
  console.log(`First Element: ${first}`);
  console.log(`Second Element: ${second}`);
  console.log(`Rest Elements: ${rest}`);
}
const arrayOfNumbers = [1, 2, 3, 4, 5];
displayArray(arrayOfNumbers);

//9.Write a program that takes a nested object containing numeric values and calculates the sum of all values.

function sumNestedObject(obj) {
  return Object.values(obj).reduce((acc, val) => {
    if (typeof val === "number") {
      return acc + val;
    } else if (typeof val === "object") {
      return acc + sumNestedObject(val);
    }
    return acc;
  }, 0);
}
const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};
const totalSum = sumNestedObject(nestedObj);
console.log("Sum:", totalSum);

//10.Write a program that takes an object and counts the occurrences of each property

function countProperties(obj) {
  return Object.keys(obj).reduce((count, key) => {
    count[key] = (count[key] || 0) + 1;
    return count;
  }, {});
}
const obj = { name: "John", age: 30, city: "New York", profession: "Engineer" };
const resultThis = countProperties(obj);
console.log(resultThis);
