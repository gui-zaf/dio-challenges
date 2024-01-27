const { calculateSalaryTax } = require('./salary-tax-export.cjs');

const grossSalary = 3550.21;
const benefits = 0;

const result = calculateSalaryTax(grossSalary, benefits);

console.log(result);