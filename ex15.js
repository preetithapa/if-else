console.log("welcome Indian bank");
var  input=require("readline-sync");
var language=input.question("enter your language");
var pin=input.question("enter the pin");
if (language=="english"){
    console.log("english language")
}
if (language!="english"){
    console.log("other lauguage is a not avilable");
}
var  amount=input.questionInt("enter the saving amount");

if (amount<=500 && pin==1234){
    console.log("aviable hai");
}
	