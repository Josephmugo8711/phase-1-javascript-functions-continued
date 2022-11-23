// code your solution here
//defines the function as specified
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()

function mondayWork(office = "go to the office"){
    return `This Monday, I will ${office}.`
}

mondayWork()

function wrapAdjective(adjective = "*"){

    return function(message){
        return `You are ${adjective}${message}${adjective}!`
    };

}
wrapAdjective('*')('a hard worker')('*')
wrapAdjective('||')("a dedicated programmer")('||')