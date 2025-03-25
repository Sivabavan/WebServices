//write recursive function to pint numbers from 1 to n
function printNumbers(n, current = 1) 
{
    if (current > n)
	{
		return
	}		
		
    console.log(current)
    printNumbers(n, current + 1)
}


let n = 15;
printNumbers(n);