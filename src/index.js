
exports.min = function min (array) {
  if (array == null || array.length == 0){
    return 0;
  }
  else{
    let minimal = array[0];
    for(let i = 1; i < array.length; i++){
      if (array[i]<minimal){
        minimal = array[i];
      }
    }
    return minimal;   
  }
}

exports.max = function max (array) {
  if (array == null || array.length == 0){
    return 0;
  }
  else{
    let maximal = array[0];
    for(let i = 1; i < array.length; i++){
      if (array[i]>maximal){
        maximal = array[i];
      }
    }
    return maximal;
  }
}

exports.avg = function avg (array) {
  if (array == null || array.length == 0){
    return 0;
  }
  else{
    average = 0;
    for(let i = 0; i < array.length; i++){
      average += array[i];
    }
    return average / array.length;
  }
}