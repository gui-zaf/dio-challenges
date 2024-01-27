function largestAndLowestNumber(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  const largestEven = Math.max(...evenNumbers);
  const lowestOdd = Math.min(...oddNumbers);

  if (numbers.length === 0) return "No numbers provided";
  else if (evenNumbers.length === 0)
    return `No even numbers provided. The lowest odd number is ${lowestOdd}`;
  else if (oddNumbers.length === 0)
    return `No odd numbers provided. The largest even number is ${largestEven}`;
  else
    return `The largest even number is ${largestEven} and the lowest odd number is ${lowestOdd}`;
}

module.exports = { largestAndLowestNumber };
