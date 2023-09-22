// convert input to integer
let studentMarks = parseInt(prompt("enter student marks"));

const displayGrade = (studentMarks) => {
  // checking studentMarks within 0 and 100 range
  if (studentMarks >= 0 && studentMarks <= 100) {
    // output grade based on specified condition
    if (studentMarks > 79) {
      console.log("A");
    } else if (studentMarks >= 60 && studentMarks <= 79) {
      console.log("B");
    } else if (studentMarks >= 50 && studentMarks <= 59) {
      console.log("C");
    } else if (studentMarks >= 40 && studentMarks <= 49) {
      console.log("D");
    } else {
      console.log("E");
    }
  } else {
    // studentMarks not within range
    console.log("input should be between 0 and 100");
  }
};

// invoke
displayGrade(studentMarks);
