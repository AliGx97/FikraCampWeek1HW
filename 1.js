/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function BestProfit(arr) {
  let days = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
  };
  let daysToMaxProfit = {};
  let maxProfit = 0;
  for (let buyDay = 0; buyDay < arr.length; buyDay++) {
    const bought = arr[buyDay];
    for (let sellDay = buyDay + 1; sellDay < arr.length; sellDay++) {
      const sold = arr[sellDay];
      if (sold - bought > maxProfit) {
        maxProfit = sold - bought;
        daysToMaxProfit["buyDay"] = days[buyDay];
        daysToMaxProfit["sellDay"] = days[sellDay];
      }
    }
  }
  return daysToMaxProfit;
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));
console.log(BestProfit([150, 130, 132, 143, 120, 140]));
