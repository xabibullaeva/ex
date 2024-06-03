let num = +prompt("Enter num: ")
while(isNaN(num) || num == 0){
    a = +prompt("NaN Enter another number: ")
}
let box = ""
if (num == 1){
    box = box + " qo'y... "
} else {
    for(let i = 1; i <= num; i++){
       box = box + i  + " qo'ylar... "
   }
}
console.log(box )



// let num1 = +prompt("Enter num1: ")
// let num2 = +prompt("Enter num2: ")

// while(isNaN(num1, num2) || num1 == 0 && num2){
//     num1 = +prompt("Enter num1: ")
//     num2 = +prompt("Enter num2: ")
// }
// let a = ""
// for (let i = num1; i < num1; i++){
//     a = a + "*"
//     console.log(a)
// }
