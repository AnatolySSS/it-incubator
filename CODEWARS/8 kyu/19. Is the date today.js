function isToday(date) {
  //Code goes here.
  let today = new Date();
  return today.toDateString() == date.toDateString();
}
