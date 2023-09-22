const speedLimit = 70;
let demeritPoints = 0;

// convert user input to an integer
let speedOfCar = parseInt(prompt("enter speed of car"));
if (speedOfCar < speedLimit) {
  // within speed limit range
  console.log("OK");
} else {
  let kmAboveLimit = speedOfCar - speedLimit; //kilometers above speed limit
  let points = kmAboveLimit / 5; //points per 5 kilometer
  demeritPoints += points; //demeritPoints = demeritPoints + points
  console.log(`Total number of demerit points: ${Math.floor(demeritPoints)}`); //truncate decimal part
  if (demeritPoints > 12) {
    console.log("license suspended");
  }
}
