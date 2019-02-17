module.exports = {
  sumTimes: function(rides, user) {
    let sum = 0;
    rides.forEach(ride => (sum += ride.time));
    user.totalTime = sum;
  },

  sumDistances: function(rides, user) {
    let sum = 0;
    for (var ride in rides) sum += ride.distance;
    user.totalDistance = sum;
  },

  sumCosts: function(user) {
    let rate = 0.667;
    user.balance = rate * user.totalTime;
  },

  assignTime: function() {
    //assigns a random time between 5 minutes and 70 minutes
    return (time =
      Math.floor(Math.random() * (5 * 60000 + 70 * 60000)) + 30000);
  },

  assignSpeed: function() {
    let distance = Math.floor(Math.random() * 24) + 4;
    return distance;
  },

  milliToHour: function(user) {
    hour = Math.floor(user.totalTime / 3600000);
    minute = Math.floor((user.totalTime - hour * 3600000) / 60000);
    formattedNum = ("0" + minute).slice(-2);
    return hour + ":" + formattedNum;
  },

  formatMoney: function(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
};
