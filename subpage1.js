const assignmentInput = document.getElementById("assignment");
const midtermInput = document.getElementById("midterm");
const finalExamInput = document.getElementById("finalExam");
const calculateBtn = document.getElementById("calculateBtn");
const message = document.getElementById("message");

function parseScore(raw) {
  const text = raw.trim();
  if (text === "") {
    return 0;
  }
  if (!/^-?\d+(\.\d+)?$/.test(text)) {
    throw new Error("Please input a valid float value");
  }

  const value = Number(text);
  if (value < 0) {
    throw new Error("The score can't be a negative value");
  }
  if (value > 100) {
    throw new Error("The score can't be greater than 100");
  }
  return value;
}

function determineGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  return "F";
}

function calculateAverage(assignments, midterm, finalExam) {
  return (assignments * 0.3) + (midterm * 0.3) + (finalExam * 0.4);
}

function formatResult(score) {
  return `Final Score: ${score.toFixed(2)}, Grade: ${determineGrade(score)}`;
}

calculateBtn.addEventListener("click", () => {
  try {
    const assignment = parseScore(assignmentInput.value);
    const midterm = parseScore(midtermInput.value);
    const finalExam = parseScore(finalExamInput.value);
    const finalScore = calculateAverage(assignment, midterm, finalExam);
    message.textContent = formatResult(finalScore);
  } catch (error) {
    message.textContent = error.message;
  }
});
