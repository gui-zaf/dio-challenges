function calculateSalaryTax(grossSalary, benefits) {
  let tax = 0;

  if (grossSalary <= 1100) tax = 0.05;
  else if (grossSalary <= 2500) tax = 0.1;
  else tax = 0.15;

  if (benefits === undefined) benefits = 0;

  let netSalary = grossSalary - grossSalary * tax + benefits;

  return `The provided salary: ${grossSalary} incurs a tax rate of ${tax}. The net salary is ${netSalary}.`;
}

module.exports = { calculateSalaryTax };
