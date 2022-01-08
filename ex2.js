//Find maximum between three numbers
var input=require("readline-sync");
var num1=input.questionInt("enter a num1");
var num2=input.questionInt("enter the num2");
var num3=input.questionInt("enter the num3");
if(num1>num2 && num1 > num3){
    console.log("num1 is maximum")
}
else if (num2>num1 && num2>num3){
    console.log("num2 is maximum")
}
else if(num3> num1 && num3>num1){
    console.log("num3 is maximum")
}
else{
    ("done")
}