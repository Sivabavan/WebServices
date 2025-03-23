
//arr =[1,2,3,4,5,6,]
//target=7
//write a code find the all pairs that  sum up to the target
const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
const pairs = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}console.log("Pairs are : ", pairs);
