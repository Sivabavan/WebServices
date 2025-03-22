console.log("\nReversing the numbers in left and right")

let num = 15;
let middle = Math.round(num / 2)

a = 1;
b = num;
c = middle;
while (a <= num) {
    
    if (a < middle) {
        console.log(--c)
    } else if (a == middle) {
        console.log("\n"+ middle + "\n")
    } else {
        console.log(num)
        b--
    }
    a++;
}