//Write a C program to input angles of a triangle and check whether triangle is valid or not.
var input=require("readline-sync")
var angle1=input.questionInt("enter the angle1");
var angle2=input.questionInt("enter the angle2");
var angle3=input.questionInt("enter the angle3");
sum=angle1+angle2+angle3
if (sum==180){
    console.log("it is trangle");
}
else{
    console.log("it is not trangle");
}
