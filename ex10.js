//A school following rule for grading

var input=require("readline-sync");
var marks=input.questionInt("enter the marks");
if (marks < 100 && marks>80){
    console.log("A grade");
}
else if(marks<80 && marks>70){
    console.log("B grade");
}
else if(marks<70 && marks>60){
    console.log("C grade");
}
else if(marks<60 && marks>50){
    console.log("D grade");
}
else{
    console.log("F Grade")
}