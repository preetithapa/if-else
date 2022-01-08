//Write a program to input week number and print week day.
var input=require("readline-sync")
var week=input.questionInt("enter the week")
if(week == 1)
    {
        console.log("Monday");
    }
    else if(week == 2)
    {
        console.log("Tuesday");
    }
    else if(week == 3)
    {
        console.log("Wednesday");
    }
    else if(week == 4)
    {
        console.log("Thursday");
    }
    else if(week == 5)
    {
        console.log("Friday");
    }
    else if(week == 6)
    {
        console.log("Saturday");
    }
    else if(week == 7)
    {
        console.log("Sunday");
    }
    else
    {
        console.log("please enter again");
    }