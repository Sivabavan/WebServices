//Rest Parameters
//method_01
const mySum = (...n) =>{  //when we use ... we can pass any number of paramater
	let t =0
	n.forEach((i) =>t=t+i)
	console.log(n)
}
mySum(4,5,6,89,2)

//method_02
const mysumm = (...n) =>{
	return n.reduce((t,i) => t=t+i)
}
console.log(mysumm(4,5,6,8,2))