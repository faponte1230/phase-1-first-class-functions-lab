const returnFirstTwoDrivers = function (){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a){
    const fareMultiplier = function(b){
        return a * b;
    }
    return fareMultiplier;
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(returnFirstTwoDrivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(returnFirstTwoDrivers)
}