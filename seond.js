//Check number is odd or even
function oddEven(number){
    if(number%2 == 0){
        return "EVEN";
    }else{
        return "ODD";
    }
}
console.log(oddEven(7));

//reversed number 
function reversed(num2){
    return num2.split('').reverse().join('');
}
console.log(reversed('HELLO'));


//reversed number without function
let num1 = 123456789;
let result = num1.toString().split('').reverse().join('');
console.log(result);



