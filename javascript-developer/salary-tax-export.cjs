function calculateSalaryTax(grossSalary, benefits = 0) {
  let tax = 0;

  if (grossSalary <= 1100) tax = 0.05;
  else if (grossSalary <= 2500) tax = 0.1;
  else tax = 0.15;

  let netSalary = grossSalary - grossSalary * tax + benefits;

  return `The provided salary: ${grossSalary} BRL incurs a tax rate of ${tax * 100}%.\n
The net salary is ${netSalary.toFixed(2)} BRL.`;
}

module.exports = { calculateSalaryTax };
