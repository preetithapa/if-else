var input=require("readline-sync");
var num1=input.questionInt("enter the fist number");
var num2=input.questionInt("enter the second number");
if (num1>num2){
    console.log(" num1 it is maximum");
}
else if (num1<num2){
    console.log(" num2 it is maximum");
}
else{
    console.log("it is equal");
}
