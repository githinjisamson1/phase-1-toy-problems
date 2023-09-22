// convert dynamic user input to float
let totalBasicSalary = parseFloat(prompt("enter basic salary amount"));
let totalBenefits = parseFloat(prompt("enter benefits amount"));

// total taxable income/gross pay
const calculateGrossSalary = (basicSalary, benefits) => {
  return basicSalary + benefits;
};

// income tax per month/paye
const calculatePaye = (basicSalary, benefits) => {
  let totalTaxableIncome = calculateGrossSalary(basicSalary, benefits);
  let totalTax = 0;
  let personalRelief = 2400;
  let netTax = 0;

  //   check tax bracket(s) to apply
  if (totalTaxableIncome <= 24000) {
    let firstBracket = totalTaxableIncome * 0.1;
    totalTax = firstBracket;
    netTax = totalTax - personalRelief;

    return netTax;
  } else if (totalTaxableIncome <= 32333) {
    let firstBracket = 24000 * 0.1;
    let secondBracket = (totalTaxableIncome - 24000) * 0.25;
    totalTax = firstBracket + secondBracket;
    netTax = totalTax - personalRelief;

    return netTax;
  } else if (totalTaxableIncome <= 500000) {
    let firstBracket = 24000 * 0.1;
    let secondBracket = (32333 - 24000) * 0.25;
    let thirdBracket = (totalTaxableIncome - 32333) * 0.3;
    totalTax = firstBracket + secondBracket + thirdBracket;
    netTax = totalTax - personalRelief;

    return netTax;
  } else if (totalTaxableIncome <= 800000) {
    let firstBracket = 24000 * 0.1;
    let secondBracket = (32333 - 24000) * 0.25;
    let thirdBracket = (500000 - 32333) * 0.3;
    let fourthBracket = (totalTaxableIncome - 500000) * 0.325;
    totalTax = firstBracket + secondBracket + thirdBracket + fourthBracket;
    netTax = totalTax - personalRelief;

    return netTax;
  } else {
    let firstBracket = 24000 * 0.1;
    let secondBracket = (32333 - 24000) * 0.25;
    let thirdBracket = (500000 - 32333) * 0.3;
    let fourthBracket = (800000 - 500000) * 0.325;
    let fifthBracket = (totalTaxableIncome - 800000) * 0.35;
    totalTax =
      firstBracket +
      secondBracket +
      thirdBracket +
      fourthBracket +
      fifthBracket;
    netTax = totalTax - personalRelief;

    return netTax;
  }
};

// nhif deduction
const calculateNhif = (basicSalary, benefits) => {
  let grossPay = calculateGrossSalary(basicSalary, benefits);
  let nhif = 0;

  //   check nhif deduction amount to apply
  if (grossPay <= 5999) {
    nhif = 150;
    return nhif;
  } else if (grossPay <= 7999) {
    nhif = 300;
    return nhif;
  } else if (grossPay <= 11999) {
    nhif = 400;
    return nhif;
  } else if (grossPay <= 14999) {
    nhif = 500;
    return nhif;
  } else if (grossPay <= 19999) {
    nhif = 600;
    return nhif;
  } else if (grossPay <= 24999) {
    nhif = 750;
    return nhif;
  } else if (grossPay <= 29999) {
    nhif = 850;
    return nhif;
  } else if (grossPay <= 34999) {
    nhif = 900;
    return nhif;
  } else if (grossPay <= 39999) {
    nhif = 950;
    return nhif;
  } else if (grossPay <= 44999) {
    nhif = 1000;
    return nhif;
  } else if (grossPay <= 49999) {
    nhif = 1100;
    return nhif;
  } else if (grossPay <= 59999) {
    nhif = 1200;
    return nhif;
  } else if (grossPay <= 69999) {
    nhif = 1300;
    return nhif;
  } else if (grossPay <= 79999) {
    nhif = 1400;
    return nhif;
  } else if (grossPay <= 89999) {
    nhif = 1500;
    return nhif;
  } else if (grossPay <= 99999) {
    nhif = 1600;
    return nhif;
  } else {
    nhif = 1700;
    return nhif;
  }
};

// nssf deduction
const calculateNssf = (basicSalary, benefits) => {
  let nssf = 0.05 * calculateGrossSalary(basicSalary, benefits);
  return nssf;
};

// net = gross - (paye + nhif + nssf)
const calculateNetSalary = (gross, paye, nhif, nssf) => {
  let netSalary = gross - (paye + nhif + nssf);

  return netSalary;
};

let totalGrossSalary = calculateGrossSalary(totalBasicSalary, totalBenefits);
let totalPaye = calculatePaye(totalBasicSalary, totalBenefits);
let totalNhif = calculateNhif(totalBasicSalary, totalBenefits);
let totalNssf = calculateNssf(totalBasicSalary, totalBenefits);
let totalNetSalary = calculateNetSalary(
  totalGrossSalary,
  totalPaye,
  totalNhif,
  totalNssf
);

console.log({
  totalGrossSalary,
  totalPaye,
  totalNhif,
  totalNssf,
  totalNetSalary,
});
