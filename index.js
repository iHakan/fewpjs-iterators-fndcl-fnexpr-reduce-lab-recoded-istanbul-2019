const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = (accumulator, currentValue)=>{return accumulator+currentValue};

batteryBatches.reduce(totalBatteries,0);