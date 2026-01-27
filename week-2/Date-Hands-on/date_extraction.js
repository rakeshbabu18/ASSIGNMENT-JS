 /* Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid */

let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();

console.log(today < enrollmentDeadline ? "Enrollment Open" : "Enrollment Closed");

let input = "2026-02-30";
let d = new Date(input);

let check =
    d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");

console.log(!isNaN(d) && input === check ? "Valid Date" : "Invalid Date");
