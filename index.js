// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(){
    return drivers.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers];

selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier){
    return function(value) {
        return value * multiplier
    }
}

function fareDoubler(fare){
    return fare * 2 ;
}
function fareTripler(fare){
    return fare * 3 ;
}
 function selectDifferentDrivers(arrayOfDrivers, selectorFunction){
    return selectorFunction(arrayOfDrivers) ;
 }