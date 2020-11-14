//UC1 if else condition
{
    const IS_ABSENT=0;
    let empCheck=Math.floor((Math.random()*10)%2);
    if(empCheck==IS_ABSENT){
        console.log("UC1-Employee is Absent. Exiting the program");
        return;
    }
    else
    console.log("UC1- Employee is present");
}
 const IS_PART_TIME=1;
 const IS_FULL_TIME=2;
 const PART_TIME_HOURS=4;
 const FULL_TIME_HOURS=8;
 const WAGE_PER_HOUR=20;
 const MAX_HRS_IN_MONTH=160;

 function getWorkingHours(empCheck){
 switch(empCheck)
 {
     case IS_PART_TIME:
         return PART_TIME_HOURS;
     case IS_FULL_TIME:
         return FULL_TIME_HOURS;
     default:
         return 0;
 }
}
let empCheck=Math.floor((Math.random()*10)%3);
let empHrs=0;
let empHrs=getWorkingHours(empCheck);
 let empWage=empHrs*WAGE_PER_HOUR;
 console.log("UC2-EMP WAGE="+empWage);
{
    const NUM_OF_WORKING_DAYS=20;
    let totalEmpHrs=0;
    for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
        let empCheck=Math.floor(Math.random()*10)%3;
        totalEmpHrs+=getWorkingHours(empCheck);
    }
    let empWage=totalEmpHrs*WAGE_PER_HOUR;
    console.log(totalEmpHrs);
}
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10%3);
    totalEmpHrs+=getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("UC6 TOTAL days"+ totalWorkingDays + "emp wage "+empWage);

let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7 Total days: "+totalWorkingDays+"total wage "+totalEmpWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("UC7A-Emp wage with reduce:"+empDailyWageArr.reduce(totalWages,0));
//UC7B
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+"="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C show days when full time wage
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C-Daily Wage filter");
console.log(fullDayWageArr);

//UC7D find the first occurence when full time wage was earned using find
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7D First time fulltime wage find" + mapDayWithWageArr.find(findFullTimeWage));
//UC7E- check if every element of full time wage is truly holding full timw wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E Check :"+fullDayWageArr.every(isAllFullTimeWage));

//UC7F Check if there is any part time workers
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7F CHECK if there is any part time "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G find number of days employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage>0) return numOfDays+1;
        return numOfDays;
}
console.log("UC7G number of days emp worked"+empDailyWageArr.reduce(totalDaysWorked,0));

console.log("Employee Wage with reduce: "+empWageArray.reduce(totalWages,0));
//map daily wage with day
let day=0;
function mapDayWithWage(dailyWage){
    day++;
    return day+"="+dailyWage;
}
let mapDayWithWages=empWageArray.map(mapDayWithWage);
console.log("Map b/w days and wages");
console.log(mapDayWithWages);
//Checks if it contains 160
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
function partTimeWage(dailyWage){
    return dailyWage.includes("80");
}

function totalWorkingDays(numOfDays,dailywage){
    if(dailywage>0){
        return numOfDays+1;
    }
    return numOfDays;
}
let fullDayWage=mapDayWithWages.filter(fullTimeWage);
console.log("------------------");
console.log("Daily Wage filter when full wage is obtained");
console.log(fullDayWage);
console.log("------------------");
console.log("First day when full wage is obtained");
console.log(mapDayWithWages.find(fullTimeWage));
console.log("------------------");
console.log("Check All element have full time wage");
console.log(fullDayWage.every(fullTimeWage));
console.log("------------------");
console.log("Daily Wage filter when part time wage is obtained");
console.log(mapDayWithWages.some(partTimeWage));
console.log("------------------");
console.log("Finding total number of days worked");
console.log("Total number of working days: "+empWageArray.reduce(totalWorkingDays,0));

//Using map
console.log("------------------");
console.log("Employee Wage Map");
console.log(empWageMap);
console.log("------------------");
console.log("Employee Hr Map");
console.log(empHrMap);
console.log("Total Employee Wage is, using Maps: "+Array.from(empWageMap.values()).reduce(totalWages,0));
//Arrow Functions

const findTotal=(totalVal,dailyVal)=> {return totalVal+ dailyVal;}
let totalHrs=Array.from(empHrMap.values()).reduce(findTotal,0);
let totalWage=Array.from(empWageMap.values()).filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("Total wage with arrows=> "+totalWage+" and hrs with arrow => "+totalHrs);

console.log("Employee Wage and Hr object: "+empWageandHrMap);
let totWages=empWageandHrMap.filter(daily=>daily.dailyWage>0).reduce((totalWage,dailywage)=> totalWage+=dailywage.dailyWage,0);
let totalWorkingHrs=empWageandHrMap.filter(daily=>daily.dailyWage>0).reduce((totalWage,dailywage)=> totalWage+=dailywage.dailyHr,0);
console.log("\n------------------");
console.log("Employee Wage using objects : "+totWages);
console.log("Employee Working hrs using objects : "+totalWorkingHrs);
console.log("\n------------------");
console.log("Full working days using Objects");
empWageandHrMap.filter(dailyWage=>dailyWage.dailyHr==8).forEach(empWageandHrMap=>process.stdout.write(empWageandHrMap.toString()));
console.log("\n------------------");
console.log("Part-time working days using Objects");
empWageandHrMap.filter(dailyWage=>dailyWage.dailyHr==4).forEach(empWageandHrMap=>process.stdout.write(empWageandHrMap.toString()));
console.log("\n------------------");
console.log("Non-working days");
empWageandHrMap.filter(dailyWage=>dailyWage.dailyHr==0).forEach(empWageandHrMap=>process.stdout.write(empWageandHrMap.toString()));v
// //hashmap
// let keystring='a string';
// let keyObj={};
// let keyFunc=function(){};
// //setting values
// let myMap=new Map();
// myMap.set(keystring,"value associated with 'a string'");
// myMap.set(keyObj,"value associated with keyObj");
// myMap.set(keyFunc,"value associated with key function");
// let size=map.size;
// let valStr=myMap.get(keystring);
// let iskey=myMap.isKeyExist('a string');//myMap.has('a string');