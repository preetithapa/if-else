var  input=require("readline-sync");
var s=input.questionInt("enter your s");
if (s<=10000){
    GS=s+(s/100*2)+(s/100*80)
    console.log(GS)
}
	if (10000>=s<=20000){
        GS=s+(s/100*25)+(s/100*30)
        console.log(GS)
    }
		if (s>=20000){
            GS=s+(s/100*30)+(s/100*95)
            console.log(GS)
        }
        