const removeFromArray = function(arr, ...items) {
  items.forEach(item => {
    let i;
    while ((i = arr.findIndex(element => element === item)) != -1) {
      arr.splice(i, 1);
    }
  });

  return arr;
};
    

// Do not edit below this line
module.exports = removeFromArray;
