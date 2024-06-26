function solution(a, b){
    let minStr = a.length < b.length ? a : b;
    let maxStr = a.length > b.length ? a : b;
    return minStr + maxStr + minStr;
    // your code here
  }
  