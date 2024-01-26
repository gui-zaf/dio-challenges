function gets(grades) {
  
  const total = grades.reduce((acc, cur) => acc + cur, 0);
  const finalAverage = total / grades.length;

  if (finalAverage >= 7) return `${finalAverage.toFixed(2)} - Pass`;
  else if (finalAverage >= 5) return `${finalAverage.toFixed(2)} - Exam`;
  else return `${finalAverage.toFixed(2)} - Fail`;
}

function print(text) {
  console.log(text);
}

module.exports = { gets, print };
