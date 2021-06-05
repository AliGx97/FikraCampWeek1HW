/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function extractDate(dateString) {
  let t = dateString.split(/\/| |\:/); //Regular expression (regex) to split string depending on example's input

  //Date Object has sequence (year,month,day,hours,minutes,seconds)
  let date = new Date(
    t[2], //year
    t[1] - 1, //JS Date deals with months as from 0-11 (not 1-12)
    t[0], //day
    t[3], //hours
    t[4] //minutes
  );

  return date;
}
function CheckOverlap(t1Start, t1End, t2Start, t2End) {
  let day1Start = extractDate(t1Start);
  let day1End = extractDate(t1End);
  let day2Start = extractDate(t2Start);
  let day2End = extractDate(t2End);
  //need to use getTime to be able to use comparison operators (read it online).
  return day2Start.getTime() <= day1End.getTime() ? "Overlap" : "No Overlap";
}

console.log(
  CheckOverlap(
    "29/5/2021 13:00",
    "14/5/2021 13:00",
    "14/5/2021 13:00",
    "16/5/2021 13:00"
  )
);

console.log(
  CheckOverlap(
    "29/5/2021 13:00",
    "14/5/2021 13:00",
    "14/5/2021 13:01",
    "16/5/2021 13:00"
  )
);
