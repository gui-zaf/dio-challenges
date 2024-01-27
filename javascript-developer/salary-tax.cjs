const { calculateSalaryTax } = require('./salary-tax-export.cjs');

const grossSalary = 3000;
const benefits = 0;

const result = calculateSalaryTax(grossSalary, benefits);

console.log(result);