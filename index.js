// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [
    function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2);
},
      
    function returnLastTwoDrivers (drivers) {
    return drivers.slice(-2);
}
]

function createFareMultiplier(fare){
    return function (multiplier){
        return fare * multiplier;
    }
    

}

const fareDoubler = function createFareMultiplier(fare){
    let busfare = fare *2
    return busfare
    
};

const fareTripler = function createFareMultiplier(fare) {
    let busfare = fare * 3
    return busfare

};

function selectDifferentDrivers(selectDifferentDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(selectDifferentDrivers)
}
