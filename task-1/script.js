let input ='';
let lastResult=0;

function appendToInput(value)
{
    if(value === "sqrt"){
        input+="Math.sqrt(";

    }
    else if(value === "ans"){
        input+=lastResult;
    }
    else{
        input+=value;
    }
    document.getElementById("input").innerHTML=input;
 }


 function deleteLast(){
    input=input.slice(0,-1)
    document.getElementById("input").innerHTML=input;
 }

 function clearInput(){
    input = '';
    document.getElementById("input").innerHTML="";
    document.getElementById("result").innerHTML="";
 }

 function calculate(){
    try{
        let expression =input.replace(/%/g,"/100");
        let result = eval(expression);
        if(input.includes("Math.sqart")){
            result= eval(expression);
        }
        result=Math.round(result*100)/100;
        lastResult=result;
        document.getElementById("result").innerHTML=result;
 }
 catch(e){
    document.getElementById("result").innerHTML="Error";
}
 }