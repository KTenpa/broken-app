function timeWord(timeStr) {
    const numbers = {
      0: "twelve", 1: "one", 2: "two", 3: "three", 4: "four",
      5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
      10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 
      14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 
      18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 
      40: "forty", 50: "fifty"
    };
  
    let [hourStr, minuteStr] = timeStr.split(":");
    let hour = parseInt(hourStr, 10);
    let minute = parseInt(minuteStr, 10);
  
    if (hour === 0 && minute === 0) {
      return "midnight";
    }
    if (hour === 12 && minute === 0) {
      return "noon";
    }
  
    let period = hour < 12 ? "am" : "pm";
    let displayHour = hour % 12;
    if (displayHour === 0) displayHour = 12;
  
    let hourWord = numbers[displayHour];
    let minuteWord = "";
  
    if (minute === 0) {
      minuteWord = "o'clock";
    } else if (minute < 10) {
      minuteWord = "oh " + numbers[minute];
    } else if (minute < 20) {
      minuteWord = numbers[minute];
    } else {
      let tens = Math.floor(minute / 10) * 10;
      let ones = minute % 10;
      minuteWord = numbers[tens];
      if (ones !== 0) {
        minuteWord += " " + numbers[ones];
      }
    }
  
    if (minuteWord === "o'clock") {
      return `${hourWord} o'clock ${period}`;
    } else {
      return `${hourWord} ${minuteWord} ${period}`;
    }
  }

module.exports = timeWord;
