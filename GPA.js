var $ = function (id) {
  return document.getElementById(id);
};

function calculateGPA() {
  const creditHours1 = parseInt(document.getElementById("creditHours1").value);
  const grade1 = document.getElementById("grade1").value.toUpperCase().trim();

  const creditHours2 = parseInt(document.getElementById("creditHours2").value);
  const grade2 = document.getElementById("grade2").value.toUpperCase().trim();

  const creditHours3 = parseInt(document.getElementById("creditHours3").value);
  const grade3 = document.getElementById("grade3").value.toUpperCase().trim();

  const creditHours4 = isNaN(
    parseInt(document.getElementById("creditHours4").value)
  )
    ? 0
    : parseInt(document.getElementById("creditHours4").value);
  const grade4 =
    document.getElementById("grade4").value.toUpperCase().trim() == ""
      ? "F"
      : document.getElementById("grade4").value.toUpperCase().trim();

  const creditHours5 = isNaN(
    parseInt(document.getElementById("creditHours5").value)
  )
    ? 0
    : parseInt(document.getElementById("creditHours5").value);
  const grade5 =
    document.getElementById("grade5").value.toUpperCase().trim() == ""
      ? "F"
      : document.getElementById("grade5").value.toUpperCase().trim();

  const totalCreditHours =
    creditHours1 + creditHours2 + creditHours3 + creditHours4 + creditHours5;
  const gradeValues = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0,
  };

  const gradePoint1 = gradeValues[grade1];
  const gradePoint2 = gradeValues[grade2];
  const gradePoint3 = gradeValues[grade3];
  const gradePoint4 = gradeValues[grade4];
  const gradePoint5 = gradeValues[grade5];

  const totalGradePoints =
    creditHours1 * gradePoint1 +
    creditHours2 * gradePoint2 +
    creditHours3 * gradePoint3 +
    creditHours4 * gradePoint4 +
    creditHours5 * gradePoint5;
  const gpa = totalGradePoints / totalCreditHours;

  document.getElementById("avg-gpa").value = gpa.toFixed(2);
}
