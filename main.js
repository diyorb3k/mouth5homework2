// 5-masalaa
// function setIntersection(set1, set2) {
//   let intersection = new Set([...set1, ...set2]);

//   return intersection;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// console.log(setIntersection(set1, set2));
//6-masalaa
// function setIntersection(set1, set2) {
//   let intersection = new Set();

//   for (let elem of set1) {
//     if (set2.has(elem)) {
//       intersection.add(elem);
//     }
//   }

//   return intersection;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// console.log(setIntersection(set1, set2));

// 7-masalaaa
// const checkSetSubset = function (set1, set2) {
//   for (let elem of set1) {
//     if (!set2.has(elem)) {
//       return false;
//     }
//   }
//   return true;
// };
// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// console.log(checkSetSubset(set1, set2));

// 8-masalaa
// const removeDuplicates = function (arr) {
//   return [...new Set(arr)];
// };
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let arrr = removeDuplicates(arr);

// console.log(arrr);
// 9-masala
// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// let combinedArr = [...arr1, ...arr2];
// mergeArr = function (ar1, arr2) {};
// console.log(combinedArr);
// 10-masala
// const concatArrays = function () {
//   let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ];
//   return [].concat(...arr);
// };
// let flatArr = concatArrays();
// console.log(flatArr);

try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
} finally {
  console.log("Work");
}
console.log("Bye");
