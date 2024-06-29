function arr2bin(arr){
    // show me the code
  let output = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) {
        output = 'NaN'
        break;
      }
        Number.isInteger(arr[i]) ? output += arr[i] : output += 0
  }
  return output.toString(2);
}