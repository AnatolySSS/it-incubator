function strCount(str, letter){  
    //code here
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == letter && count++
        
    }
    return count;
  }