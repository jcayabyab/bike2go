
export function sumTimes(rides, user){
    let sum = 0;
   for(var ride in rides)
        sum += ride.time;
    user.totalTime = sum;
}
 
export function sumDistances(rides, user){
    let sum = 0;
    for(var ride in rides)
        sum += ride.distance
    user.totalDistance = sum;
}

export function sumCosts(user){
    let rate = 0.667;
    user.balance = rate * user.totalTime;
}

export function assignTime(ride){
    //assigns a random time between 5 minutes and 70 minutes
    ride.time = Math.floor(Math.random() * (5*60000 + 70*60000)) + 30000;
}

export function assignSpeed(ride){
    //speed netween 4km/h to 20km/h
    let speed = Math.floor(Math.random() * (24)) + 4;
    ride.duration = ride.time/speed;
}

