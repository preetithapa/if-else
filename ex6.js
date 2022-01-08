//Write a  program to input any character and check whether it is alphabet, digit or special character.
var input=require("readline-sync");
var ch=input.question("enter the user");
if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
    console.log("The Given Character ", ch, "is an Alphabet")
}else if (ch >= '0' && ch <= '9'){
    console.log("The Given Character ", ch, "is a Digit");
}else{
    console.log("The Given Character ", ch, "is a Special Character");
}