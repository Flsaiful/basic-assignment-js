
//feet to mile

function feetToMile(feet){

    var mile = feet/5280;
    return mile;


}
var result = feetToMile(31680);
console.log(result);




//wood calculator
function woodCalculator(table, chair, bed){

    var tableCount = table * 1;
    var ChairCount = chair * 3;
    var bedCount = bed * 5;
    var totalWood = tableCount + ChairCount + bedCount;
    return totalWood;


}
var woodresult = woodCalculator(4, 14, 12);
console.log(woodresult);




//brickCalculator

function brickCalculator(eitFor7Floor, eitFor16Floor, eitFor30Floor){
 var floor7 = eitFor7Floor *1000;
 var floor16 = eitFor16Floor *1000;
 var floor30 = eitFor30Floor *1000;
 var totalit = floor7 + floor16 +floor30;
 return totalit;

}
var totalresult = brickCalculator(15, 12, 10);
console.log(totalresult);
