const speedLimit = 70;
let demeritPoints = 0;

// convert input to integer
let speedOfCar = parseInt(prompt("enter speed of car"));

const displayDemeritPoints = (speedOfCar) => {
  if (speedOfCar < speedLimit) {
    // speed within range
    console.log("OK");
  } else {
    // km/s above limit
    let kmAboveLimit = speedOfCar - speedLimit;

    // points per 5 km/s
    let points = kmAboveLimit / 5;

    // demeritPoints = demeritPoints + points
    demeritPoints += points;

    console.log(`Total number of demerit points: ${Math.trunc(demeritPoints)}`);

    if (demeritPoints > 12) {
      console.log("license suspended");
    }
  }
};

// invoke
displayDemeritPoints(speedOfCar);
