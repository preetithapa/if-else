var input=require("readline-sync");
// var age=input.questionInt("enter the age");
var sex =input.question("enter the sex");
if (sex=="f"){
    console.log("urban area only");
}
    var age=input.questionInt("enter age");
    if (age>=20 && age<40){
        if (sex=="m"){
            console.log("you can work anywhere");
        }else{
            console.log("wrong input choosen");
        }
    }else if(age>40 && age<60){
        if (sex=="m"){
            console.log("you can work in urban area");
        }else{
            console.log("wrong input choosen");
        }
    }else{
        console.log("his riterment age ");
    }

