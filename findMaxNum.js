//find max
let num=[3,69,87,23,78]
let max=num[0]
num.forEach((n) =>{
	if(n>max)
	{
		max=n;
	}
	//(max<n)&&(max=n)
})
console.log("max number:"+max);