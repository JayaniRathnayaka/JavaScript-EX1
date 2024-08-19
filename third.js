//LARGEST NUMBER IN ARRAY
function largeNum(arr){
    return Math.max(...arr);

}
console.log("Largest Number is:" + largeNum([2,4,5,8,9]));
console.log('');


//FACTORIAL
function factoriall(a){
    if(a == 0 ||a == 1){
        return 1;
    }else{ 
        return a*factoriall(a-1);
    }
}
console.log(factoriall(5));


//COUNT VOWELS
function countVowels(str){
    var vowels = 'aeiouAEIOU';
    let count = 0;

for (let char of str){
    if(vowels.includes(char)){
        count++;
    }
}
return count;
}
console.log("Vowels: " + countVowels('HEllo Woerld'));



//farenhit to celcius
function farenToCel(celcius){
    return(celcius*9/5)+32;

}
console.log(farenToCel(100));

