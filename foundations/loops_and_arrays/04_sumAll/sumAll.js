const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return 'ERROR';
  }

  if ([min, max].some(number => number < 0)) {
    return 'ERROR'
  }
  
  let newNumber = 0;

  [min, max] = [Math.min(min, max), Math.max(min, max)];
  
  for (let i = 0; i <= max - min; i++) {
    newNumber += min + i;
  }

  return newNumber;
};

// Do not edit below this line
module.exports = sumAll;
