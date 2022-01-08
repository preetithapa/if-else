var input=require("readline-sync")
var angle1=input.questionInt("enter the angle1");
var angle2=input.questionInt("enter the angle2");
var angle3=input.questionInt("enter the angle3");
if (side1==side2==side3){
    console.log("equal triangle");
}
else if(side1==side2!=side3 || side2==side3!=side1 || side1==side3!=side2){
    console.log("esosoceles triangle")
}
else{
    console.log("scaleane triagle")
}

