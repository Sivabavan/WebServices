//reverse the array using  push and pop
//a b c d -> d c b a 
let arr1=['a','i','c','p']
console.log(arr1)
let arrlength = arr1.length;
let arr2 =[]
for(let i=0; i < arrlength; i++)
{
	arr2.push(arr1.pop())
}

console.log("reverse number :"+arr2)