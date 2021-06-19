let time=prompt("Enter the time you want to convert");

let myArray=time.split(":");

if(myArray[0]=='12' &&myArray[2].substr(2,4)=="AM" ){
    myArray[0]="00";
}
if( parseInt(myArray[0])>=01 && myArray[2].substr(2,4)=="PM"){
   myArray[0]=parseInt(myArray[0]);
   myArray[0]+=12;
}

let final_array=myArray.join(":");
final_array=final_array.substr(0,8);
console.log(final_array);
alert(time+" on a 12-hour clock is "+final_array+" on a 24-hour clock");