// convert user input to an integer
let studentMarks = parseInt(prompt("enter student marks"));

// checking if studentMarks is within 0 and 100 range
if (studentMarks >= 0 && studentMarks <= 100) {
  // output grade based on specified condition
  if (studentMarks > 79) {
    console.log("A");
  } else if (studentMarks >= 60 && studentMarks <= 79) {
    console.log("B");
  } else if (studentMarks > 49 && studentMarks <= 59) {
    console.log("C");
  } else if (studentMarks >= 40 && studentMarks <= 49) {
    console.log("D");
  } else {
    console.log("E");
  }
} else {
  // studentMarks is not within 0 and 100 range
  console.log("input should be between 0 and 100");
}
