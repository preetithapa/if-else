var input=require("readline-sync");
var age=input.questionInt("enter the age");
var sex =input.question("enter the sex");
if (sex=="f" && age>=20 && age<60){
    console.log("urban area only");
}
if (sex=="m" && age>=20 && age<40){
    console.log("you can work anywhere");
}
if(sex=="m" & age>40 && age<60){
    console.log("only utban area")
}
else{
    console.log("nothing")
}

