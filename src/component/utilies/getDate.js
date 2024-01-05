export function getDate (){
    // Create an array of month names
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Create a new Date object with the current date and time
  var currentDate = new Date();
  
  // Extract day, month, date, and year
  var day = currentDate.toLocaleString('en-us', { weekday: 'long' });
  var month = monthNames[currentDate.getMonth()];
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();
  
  // Display the result
  return (day + " " + month + " " + date + " " + year);
  
}