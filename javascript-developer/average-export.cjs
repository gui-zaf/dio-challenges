function finalAverage(grades) {
  const total = grades.reduce((acc, cur) => acc + cur, 0);
  const average = total / grades.length;

  if (average >= 7) return `${average.toFixed(2)} - Pass`;
  else if (average >= 5) return `${average.toFixed(2)} - Exam`;
  else return `${average.toFixed(2)} - Fail`;
}

module.exports = { finalAverage };
