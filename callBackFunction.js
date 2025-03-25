//call back function
//a function passed as an argument	
const greet = (msg, fun)=>{
	console.log("Hi.." +msg)
	fun()
}

greet("Good Morning", () => {
	console.log("My Name Is Bavan")
	})
	
const multtwo = (n) => n*4
const myarr = (mult,...n) => {
	n.forEach((i) =>console.log(mult(i)))
}

myarr(multtwo,2,4,8,5,7)