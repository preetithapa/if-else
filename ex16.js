var input=require("readline-sync");
var age=input.questionInt("enter first age");
var age2=input.questionInt("enter the second age");
var age3=input.questionInt("enter the thirs age");
if (first>=second && first>=third){
    console.log("oldest is first");
}
else if (second>=first && second>=third){
    console.log("oldest is second");
}
else if ( third>=first && third>=second){
    console.log("oldest is third");
}
else{
    ("we are equal")
}
	