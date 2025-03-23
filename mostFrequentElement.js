//[4,8,3,4,3,2,1,,8,4]
//find the most frequent element in the array
const arrlist = [4, 8, 3, 4, 3, 2, 1, 8, 4]; 
const frequencyMap = {};
let maxFreq = 0;
let mostFrequentElement = null;
for (let num of arrlist) {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
   if (frequencyMap[num] > maxFreq) {
    maxFreq = frequencyMap[num];
    mostFrequentElement = num;
  }
}
console.log("Most Frequent Element:", mostFrequentElement);
console.log("Frequency:", maxFreq);
