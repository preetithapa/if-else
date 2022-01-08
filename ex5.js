//Write a  program to check whether a number is even or odd.
var input=require("readline-sync");
var number=input.questionInt("enter the number");
if (number%2==0){
    console.log("it is even number");
}
else{
    console.log("it is odd number")
}
