function checkDayStatus() {
    let date = new Date();
    let hours = date.getHours();
    let result;
    
    if (hours >= 0 && hours < 12) {
      result = "morning";
    } else if (hours === 12) {
      result = "noon";
    } else if (hours > 12 && hours <= 18) {
      result = "afternoon";
    } else {
      result = "evening";
    }
  
    alert(`My favourite part of the day is ${result}.`);
  }