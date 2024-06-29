function nearestSq(n){
    // your code
  console.log(Math.sqrt(n));
  console.log(Math.round(Math.sqrt(n)));
  console.log(Math.pow(Math.round(Math.sqrt(n)), 2));
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}