const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = (accumulator,currentvalue)=> {return accumulator+currentvalue;}
batteryBatches.reduce(totalBatteries,0);