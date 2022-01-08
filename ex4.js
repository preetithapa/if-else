//Write a  program to check whether a number is divisible by 5 and 11 or not.
var input=require("readline-sync");
var num=input.questionInt("enter the num");
if (num%5==0){
    console.log("it is divisible for 5");
}
else if (num%11==0){
    console.log("it is divsible for 11");
}
else if (num%5 ==0 && num%11==0){
    console.log(" it is divisble by both")
}
else{
    console.log(nothing)
}